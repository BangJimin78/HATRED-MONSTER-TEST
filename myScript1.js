let currentStep = 1;
let isLocked = false; 

function handleScrollEvent() {
    if (isLocked) return; 

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 단계별 스크롤 기준점 정의
    const step3Threshold = windowHeight * 1.5;
    const step4Threshold = windowHeight * 2.8; // 3단계에서 4단계로 넘어가는 구간

    let intendedStep = 1;
    if (scrollY > step4Threshold) {
        intendedStep = 4;
    } else if (scrollY > step3Threshold) {
        intendedStep = 3;
    } else if (scrollY > 50) {
        intendedStep = 2;
    }

    // 스크롤을 올려서 이전 단계로 가려고 하는 경우(intendedStep < currentStep)는 무시함
    if (intendedStep > currentStep) {
        
        // 건너뛰기 방지 시스템 (1단계씩 순차 이동)
        if (intendedStep - currentStep > 1) {
            currentStep = currentStep + 1;
        } else {
            currentStep = intendedStep;
        }

        // HTML에 현재 스텝 기록
        document.body.setAttribute('data-step', currentStep);

        // 단계별 애니메이션 시간에 맞춘 자물쇠 잠금 시간
        let animationTime = 2000; // 1 -> 2 단계 (4.2초)
        
        if (currentStep === 3) {
            animationTime = 2000; // 2 -> 3 단계 (6초)
        } else if (currentStep === 4) {
            animationTime = 3000; // 3 -> 4 단계 (3초)
        }

        isLocked = true;
        setTimeout(() => {
            isLocked = false; 
            handleScrollEvent(); 
        }, animationTime);
    }
}

// 새로고침 시 스크롤 위치 초기화
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// 마우스로 스크롤을 할 때마다 함수 실행
window.addEventListener('scroll', handleScrollEvent);

// 🚨 [추가된 부분] 새로고침 직후 URL 파라미터(step=4) 체크하여 4단계로 바로 이동
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('step') === '4') {
    document.body.setAttribute('data-step', '4');
    currentStep = 4;
    // 4단계 위치(windowHeight * 2.9)로 스크롤 이동
    window.scrollTo(0, window.innerHeight * 2.9);
} else {
    document.body.setAttribute('data-step', '1');
    window.scrollTo(0, 0);
}