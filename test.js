let currentStep = 0; 
const questions = [
    {
        title: "Q1.",
        text: "당신이 사람을 대할 때<br>절대 포기할 수 없는 기본 매너는?",
        answers: [
            { text: "타인에게 시각적인 불쾌감을 주지 않도록 스스로 철저히 관리하는 것", type: "외모혐오" },
            { text: "무리하게 자신의 권리만 내세우며 주변에 사회적 피로도를 만들지 않는 것", type: "여성혐오" },
            { text: "핑계 대거나 나약한 티를 내지 않고, 묵묵하게 자신의 무게를 견뎌내는 것", type: "남성혐오" },
            { text: "굳이 유별난 취향을 밖으로 드러내어 평범한 사람들을 당황스럽게 하지 않는 것", type: "성소수자혐오" }
        ]
    },
    {
        title: "Q2.",
        text: "피로가 극에 달한 출퇴근길,<br>공공장소에서 당신의 인내심을 가장 시험하는 순간은?",
        answers: [
            { text: "사회적 양보나 특혜를 마치 당연한 기득권처럼 요구하며 밀고 들어올 때", type: "노인혐오" }, 
            { text: "주변의 흐름이나 타인의 불편은 안중에도 없이 자기 편의에만 몰두해 있을 때", type: "청년혐오" }, 
            { text: "공공의 공간에서 소란과 돌발 행동이 가감 없이 방치될 때", type: "아동청소년혐오" }, 
            { text: "대다수가 긴박하게 움직이는 상황 속, 특정 개인으로 인해 전체의 흐름이 지연될 때", type: "장애인혐오" }
        ]
    },
    {
        title: "Q3.",
        text: "새로운 사람을 마주했을 때, 은연중에<br>'나와는 좀 결이 안 맞겠다'고 직감하게 되는 태도는?",
        answers: [
            { text: "우리 사회의 보편적인 상식이나 분위기와는 확연히 겉도는 이질적인 느낌", type: "인종혐오" }, 
            { text: "스스로에 대한 통제력이 부족해 보이고 시각적으로 정돈되지 않은 인상", type: "외모혐오" }, 
            { text: "상황을 유연하게 넘기지 못하고 불필요하게 날이 서 있거나 억세게 굴 때", type: "여성혐오" }, 
            { text: "대범하게 상황을 감당하지 못하고 지나치게 예민하고 소심한 태도를 보일 때", type: "남성혐오" }
        ]
    },
    {
        title: "Q4.",
        text: "원활하고 안정적인 사회를 위해,<br>구성원들에게 가장 '우선적으로 요구되어야 할 태도'는?",
        answers: [
            { text: "다수가 합의해 온 보편적이고 전통적인 기준을 함부로 흔들거나 훼손하지 않는 안정감", type: "성소수자혐오" }, 
            { text: "시대의 변화를 따라가지 못하는 낡은 방식이나 룰을 미련 없이 뒤로 물러나게 하는 것", type: "노인혐오" }, 
            { text: "본인의 권리와 편의만 앞세우기 전에 묵묵히 궂은 과정을 견뎌내며<br>스스로를 증명하는 끈기", type: "청년혐오" }, 
            { text: "공적인 분위기를 깨뜨리는 미성숙한 소란에 대해 엄격하게 제한하고 통제하는 규율", type: "아동청소년혐오" }
        ]
    },
    {
        title: "Q5.",
        text: "당신이 활동 중인 사진 동아리에서 이번 주말 단체<br>야외 출사를 떠납니다. 은연중에 같은 조가 되기를 꺼리게<br>되는 회원은?",
        answers: [
            { text: "다리를 다쳐 이동 루트에 제약을 발생시키고 결국<br>누군가가 전담해서 케어해야 하는 사람", type: "장애인혐오" }, 
            { text: "우리가 사진에 담고자 하는 특유의 로컬 감성이나 정서를<br>전혀 이해하지 못하고 자기 마음대로 사진 찍는 사람", type: "인종혐오" }, 
            { text: "기본적인 스타일링이나 관리가 전혀 안 되어 있어<br>회원들끼리 서로 촬영해줄 때 사진의 무드를 확 깨는 사람", type: "외모혐오" }, 
            { text: "무거운 삼각대나 장비를 옮기는 궂은일은 피하면서<br>세팅해 놓은 예쁜 배경에서 자기 인생샷만 얄밉게 건져가려는 사람", type: "여성혐오" }
        ]
    },
    {
        title: "Q6.",
        text: "직장이나 모임에서 함께 일하기 가장 힘든 유형은?",
        answers: [
            { text: "중요한 위기 상황이나 총대를 메야 할 순간에 앞장서지 않고<br>요리조리 핑계를 대며 책임을 회피하는 우유부단한 유형", type: "남성혐오" }, 
            { text: "공적인 업무 자리에서 개인의 유별난 사생활이나 특이한 취향을 드러내<br>주변을 당황스럽게 만드는 유형", type: "성소수자혐오" }, 
            { text: "효율적인 새로운 시스템을 배우려 하진 않고<br>본인이 과거에 성공했던 익숙한 방식만을 고집하는 유형", type: "노인혐오" }, 
            { text: "조직을 위한 아주 작은 수고로움조차 거부하며<br>철저하게 자기 자신의 몫만 이기적으로 계산하는 유형", type: "청년혐오" }
        ]
    },
    {
        title: "Q7.",
        text: "당신의 평온한 주말 일상을 가장 방해하는 요소는?",
        answers: [
            { text: "조용한 식당이나 카페 분위기를 망치는 아이들의 웃음소리", type: "아동청소년혐오" },
            { text: "대중교통이나 길거리에서 앞을 가로막는 누군가의 느린 걸음", type: "장애인혐오" },
            { text: "익숙하고 편안한 우리 동네 골목길에서 들리는 낯선 외국어 소리", type: "인종혐오" }
        ]
    },
    {
        title: "Q8.",
        text: "누군가의 수준을 파악할 수 있는 지표는<br>무엇이라 생각하나요?",
        answers: [
            { text: "대화나 사소한 습관에서 은연중에 묻어나는 출신 지역", type: "지역혐오" },
            { text: "지적 수준과 성실성을 증명하는 최종 학력과 대학 간판", type: "학벌혐오" },
            { text: "현재 종사하고 있는 직업과 그 직업의 사회적 위치", type: "직업혐오" },
            { text: "부모로부터 자연스럽게 물려받은 집안 배경과 경제력", type: "가족출신혐오" }
        ]
    },
    {
        title: "Q9.",
        text: "우리 사회에서 발생하는 경제적 격차의 가장 큰 원인은?",
        answers: [
            { text: "투자가 더디고 낙후된 특정 지역의 정체된 분위기", type: "지역혐오" },
            { text: "학창 시절 성실하게 노력하지 않은 개인의 나태함.", type: "학벌혐오" },
            { text: "전문성이 낮고 누구나 쉽게 대체 가능한 직업 선택", type: "직업혐오" },
            { text: "부모의 경제력이 부족해 불리하게 시작하는 집안 배경", type: "가족출신혐오" }
        ]
    },
    {
        title: "Q10.",
        text: "당신의 가족이 결혼 상대를 데려왔을 때,<br>절대 허락할 수 없는 상대는?",
        answers: [
            { text: "은근히 선입견과 거부감이 드는 특정 지역 출신의 상대", type: "지역혐오" },
            { text: "수준이 다르고 대화가 통하지 않는 상대", type: "학벌혐오" },
            { text: "미래가 불투명하고 당당히 소개하기 어려운 직업을 가진 상대", type: "직업혐오" },
            { text: "집안 형편이 어렵거나 교양이 부족한 상대", type: "가족출신혐오" }
        ]
    },
    {
        title: "Q11.",
        text: "살던 동네에 변화가 생긴다면 가장 불안한 것은?",
        answers: [
            { text: "낯선 이주민들의 증가", type: "난민이주민혐오" },
            { text: "이질적인 문화의 유입", type: "타문화혐오" },
            { text: "특정 종교 시설의 건축", type: "종교혐오" }
        ]
    },
    {
        title: "Q12.",
        text: "낯선 집단을 바라보는 당신의 솔직한 시선은?",
        answers: [
            { text: "세금 부담을 키우고 지역 치안을 위협하는 존재", type: "난민이주민혐오" },
            { text: "보편적 상식과 시민 의식에 뒤떨어지는 문화", type: "타문화혐오" },
            { text: "교리에만 얽매여 합리적인 대화가 통하지 않는 집단", type: "종교혐오" }
        ]
    },
    {
        title: "Q13.",
        text: "공동체의 안전과 고유한 정체성을 지키기 위해<br>가장 타당한 대책은?",
        answers: [
            { text: "사회의 인프라나 준비 상태를 고려하여<br>외부 인구 유입의 속도와 규모를 보다 엄격하게 조절하는 것", type: "난민이주민혐오" },
            { text: "고유의 주류 정서와 가치를 안정적으로 유지하기 위해<br>이국적인 문화나 유행의 무분별한 확산을 어느 정도 걸러내는 것", type: "타문화혐오" },
            { text: "다수의 평온한 일상과 사회적 안정을 위해<br>공공의 질서와 상충될 수 있는 특정 종교 활동에 명확한 기준을 적용하는 것", type: "종교혐오" }
        ]
    },
    {
        title: "Q14.",
        text: "사회 뉴스를 볼 때 유독 대중에게<br>불필요한 피로감을 준다고 느껴지는 현상은?",
        answers: [
            { text: "열심히 일해서 이룬 정당한 자산과 권리를 무시하고<br>무조건적인 결과의 평등만을 요구하는 모습", type: "사회주의혐오" },
            { text: "공동체의 연대나 공공의 이익보다 개인의 자율성과 사적 권리를 먼저 챙기려는 모습", type: "자유주의혐오" },
            { text: "객관적인 통계나 검증된 사실보다 개인의 직관이나 주관적인 신념을 더 신뢰하는 모습 ", type: "과학의학혐오" },
            { text: "본인이 선택한 신념이나 삶의 방식의 잣대를 타인까지 동조하도록 권유하는 모습", type: "환경채식혐오" }
        ]
    },
    {
        title: "Q15.",
        text: "사회의 건강하고 올바른 발전이 저해되는 가장 큰 원인은?",
        answers: [
            { text: "국가의 복지나 개입이 과도해지면서 개인의 자립 의지나<br>성실한 근로 의욕이 예전보다 약해진 점", type: "사회주의혐오" },
            { text: "무한한 자유 경쟁 체제가 당연시되면서<br>사회적 연대감이 줄어들고 격차가 점점 심해진 점 ", type: "자유주의혐오" },
            { text: "축적된 데이터와 과학적 팩트보다<br>대중적인 감성이나 주관적인 주장이 여론을 주도하는 점 ", type: "과학의학혐오" },
            { text: "현실적인 인간의 편의나 경제 발전보다<br>자연과 동물의 권리를 더 높은 우선순위에 두는 점", type: "환경채식혐오" }
        ]
    },
    {
        title: "Q16.",
        text: "내가 가치관적으로 가장 지지하기 어렵고<br>공감 안 되는 사회적 주장은?",
        answers: [
            { text: "사회의 격차를 줄이기 위해 고소득층에게 세금을 대폭 올려<br>부를 평등하게 재분배해야 한다", type: "사회주의혐오" },
            { text: "개인의 능력에 따라 성취를 이루었다면 그 과정에서 발생하는<br>격차나 차별점은 당연한 결과다", type: "자유주의혐오" },
            { text: "제도권 의학에는 늘 한계가 존재하므로<br>자연 치유나 대안 의학이 더 본질적인 해답이 될 수 있다", type: "과학의학혐오" },
            { text: "탄소 배출을 줄이고 생태계를 보호하기 위해<br>매일 먹는 식습관까지 지속 가능한 친환경 중심으로 과감하게 전환해야 한다", type: "환경채식혐오" }
        ]
    },
    {
        title: "Q17.",
        text: "인간관계에서 깊은 정신적 피로감을 느껴<br>슬그머니 거리를 두게 되는 순간은?",
        answers: [
            { text: "상대방이 가진 특유의 예민하거나 방어적인 기질이<br>은연중에 내 감정선까지 무겁게 가라앉힐 때", type: "성격성향혐오" },
            { text: "조금만 주의를 기울이면 예방할 수 있는 문제를 자꾸 놓쳐서<br>주변 사람들을 번거롭게 만들 때", type: "실수실패혐오" },
            { text: "이미 지나간 불행이나 상실의 기억에 깊이 몰두하며<br>주변에 지속적인 위로와 감정 소모를 바랄 때", type: "고인혐오" },
            { text: "공공장소나 모임에서 주변의 시선을 의식하지 않고<br>유독 개성적이거나 눈에 띄게 행동할 때", type: "행동혐오" }
        ]
    },
    {
        title: "Q18.",
        text: "누군가 어떤 일에 크게 실패하거나 무너진 모습을 볼 때<br>드는 생각은?",
        answers: [
            { text: "평소 그 사람이 가지고 있던 나약하거나 유연하지 못한 성향이 <br>결과에 다소 영향을 준 것이다", type: "성격성향혐오" },
            { text: "위기 상황에서의 대처 능력이 아쉽거나 본인이 철저하게 준비하지 못해<br>빚어진 결과이다", type: "실수실패혐오" },
            { text: "과거의 아픈 기억이나 불행을 핑계 삼아 스스로 일어서기보다<br>주변의 동정에 의지하는 탓이다", type: "고인혐오" },
            { text: "조직의 보편적인 흐름에 맞추지 않고 본인 스타일대로 처신했으니<br>어느 정도 예상된 결과이다", type: "행동혐오" }
        ]
    },
    {
        title: "Q19.",
        text: "오랜만에 떠난 여행지에서<br>다음 여행엔 빼고 싶은 유형은?",
        answers: [
            { text: "다들 허물없이 어울리는 분위기인데 혼자만 과하게 벽을 치고<br>속내를 드러내지 않는 성격", type: "성격성향혐오" },
            { text: "예약 시간을 잊거나 탑승권을 잃어버리는 등 사소한 실수를 자꾸 반복해<br>일정을 망치는 사람", type: "실수실패혐오" },
            { text: "신나게 노는 축제 분위기 속에 혼자만의 슬픈 추억을 꺼내 분위기를<br>가라앉게 하는 사람", type: "고인혐오" },
            { text: "공공장소에서 너무 크게 떠들거나 무례한 제스처로 주변 사람들에게<br>은근히 민망함을 주는 사람", type: "행동혐오" }
        ]
    }
];

// 각 문항별로 선택된 답변의 인덱스를 저장
let selectedAnswers = new Array(questions.length).fill(null);

function render() {
    const q = questions[currentStep];
    document.getElementById('q-title').innerText = q.title;
    
    // 🚨 [핵심 추가] <br> 태그를 찾아서 모바일용 띄어쓰기와 PC용 줄바꿈으로 자동 변환합니다!
    document.getElementById('q-text').innerHTML = q.text.replace(/<br>/g, '<span class="br-space"> </span><br class="pc-br">');
    
    // 프로그레스바 (현재 문항 번호 / 전체 문항 수)
    document.getElementById('progress').innerText = `${currentStep + 1}/${questions.length}`;
    
    // 마지막 문항일 때만 버튼 이름이 "Result"로 변경
    document.getElementById('next-btn').innerText = currentStep === questions.length - 1 ? "Result" : "Next";
    
    // 질문에 등록된 답변(answers) 개수만큼 버튼을 동적으로 생성
    const answerArea = document.getElementById('answer-area');
    answerArea.innerHTML = ''; 
    
    q.answers.forEach((ansObj, i) => {
        const btn = document.createElement('button');
        btn.className = 'ans-btn';
        
        // 🚨 [핵심 추가] 답변 텍스트 안에 있는 <br>도 똑같이 변환해 줍니다!
        btn.innerHTML = ansObj.text.replace(/<br>/g, '<span class="br-space"> </span><br class="pc-br">');
        
        // 이전에 선택한 답변이 있다면 스타일 적용
        if (selectedAnswers[currentStep] === i) {
            btn.classList.add('selected');
        } else if (selectedAnswers[currentStep] !== null) {
            btn.classList.add('dimmed');
        }

        // 클릭 시 선택/해제 함수 연결
        btn.onclick = () => selectAnswer(i);
        answerArea.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (selectedAnswers[currentStep] === index) {
        selectedAnswers[currentStep] = null; // 다시 누르면 선택 해제
    } else {
        selectedAnswers[currentStep] = index;
    }
    render(); 
}

// 🚨 점수 계산 및 1등 괴물 추첨 함수
function calculateResult() {
    let scores = {};
    
    // 1. 유저가 선택한 답변들을 돌면서 해당 type의 점수를 +1씩 올립니다.
    selectedAnswers.forEach((ansIndex, qIndex) => {
        if (ansIndex !== null) {
            const selectedType = questions[qIndex].answers[ansIndex].type;
            if (!scores[selectedType]) {
                scores[selectedType] = 0;
            }
            scores[selectedType]++;
        }
    });

    // 2. 가장 높은 점수(maxScore)가 몇 점인지 찾습니다.
    let maxScore = 0;
    for (let type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
        }
    }

    // 3. 최고 점수와 동일한 점수를 가진 '혐오 타입'들을 모두 배열에 담습니다. (동점자 찾기)
    let topTypes = [];
    for (let type in scores) {
        if (scores[type] === maxScore) {
            topTypes.push(type);
        }
    }

    // 4. 동점자가 여러 명일 경우 랜덤으로 1개를 뽑습니다. (1명이면 걔가 당첨)
    const finalResult = topTypes[Math.floor(Math.random() * topTypes.length)];

    // 5. 최종 결정된 괴물을 브라우저에 몰래 저장해둡니다 (result.html에서 꺼내 볼 수 있도록).
    localStorage.setItem('monsterResult', finalResult);
}

let alertTimer;
document.getElementById('next-btn').addEventListener('click', () => {
    if (selectedAnswers[currentStep] === null) {
        // 기존 브라우저 기본 alert 대신 커스텀 알림창 띄우기
        const alertBox = document.getElementById('custom-alert');
        alertBox.classList.add('show');
        
        // 기존에 작동 중인 타이머가 있다면 초기화 (여러 번 연속 클릭 방지)
        clearTimeout(alertTimer); 
        
        // 2초 뒤에 부드럽게 사라지도록 설정
        alertTimer = setTimeout(() => {
            alertBox.classList.remove('show');
        }, 2000);
        return;
    }

    if (currentStep < questions.length - 1) {
        currentStep++;
        render();
    } else {
        // 마지막 19번 문항에서 Result 버튼을 누르면 점수를 계산하고 넘어갑니다.
        calculateResult();
        location.href = 'result.html';
    }
});

document.getElementById('back-btn').addEventListener('click', () => {
    if (currentStep === 0) {
        location.href = 'index.html?step=4';
    } else {
        currentStep--;
        render();
    }
});

render();