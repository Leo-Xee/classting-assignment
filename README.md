# Classting Assignment

간단한 퀴즈 웹 애플리케이션

<br />

## 🚀 실행 방법 ( [Deploy](http://classting-assignment-pi.vercel.app/) )

### 프로젝트 클론 및 의존성 설치

```bash
$ git clone https://github.com/Leo-Xee/classting-assignment.git
```

```bash
$ yarn install
```

### 프로젝트 실행

```bash
$ yarn dev
```

<br />

## 📚 기술 스택


|                                                            Typescript                                                            |                                                             React.js                                                             |                                                             Emotion                                                              | 
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | 
| <img src="https://user-images.githubusercontent.com/21965795/174472604-4e0c144f-4500-4cc6-80b7-3dd29c907171.png" width="100px"/> | <img src="https://user-images.githubusercontent.com/21965795/176630651-1248191d-432c-45ac-b876-9e5ff54e36f9.png" width="100px" > | <img src="https://user-images.githubusercontent.com/21965795/174472822-309713cb-6730-453c-8bd2-ea071c1176ec.png" width="100px"/> | 

|                                                         SWR                                                          |                                                              Zustand                                                              |
| :------------------------------------------------------------------------------------------------------------------------------: |  :------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/21965795/176630663-4053651d-581c-4855-84a2-51fecb6f6614.png" width="100px"/> |  <img src="https://user-images.githubusercontent.com/21965795/181411960-a0b2bb8f-425a-4065-a1cb-c0d0152df8f8.png" width="100px"/> |

<br />

## 🌲 디렉터리 구조
```bash
.
├── public
└── src
    ├── assets
    ├── components
    │   ├── Chart        // 퀴즈 정답률을 도넛차트로 보여주는 컴포넌트
    │   ├── ProgressBar  // 퀴즈 진행률을 보여주는 컴포넌트
    │   ├── QuizOption   // 랜딩 페이지에서 퀴즈의 옵션을 설정하는 컴포넌트
    │   ├── QuizView     // 퀴즈 진행 시, 전체 뷰를 보여주는 컴포넌트
    │   ├── ResultView   // 퀴즈 종료 시, 결과 뷰를 보여주는 컴포넌트
    │   ├── Title        // 랜딩 페이지의 제목을 보여주는 컴포넌트
    │   └── common
    │       ├── Button
    │       ├── Input
    │       ├── Selector
    │       └── Spinner
    ├── hooks            // 커스텀 훅 모음(Zustand의 Store 포함)
    ├── pages            // 페이지 컴포넌트
    ├── services         // API 관련 함수
    ├── styles           // 전역 스타일
    ├── tests            // 테스트 
    ├── types            // 기본, API 타입
    └── utils            // 유틸 함수들
```

<br />

## 📮 전역 상태관리

전역에서 관리한 상태값은 다음과 같습니다.

```ts
{
  isReadMode: boolean;    // 오답노트에서 퀴즈의 선택지 버튼을 비활성화하기 위한 상태값
  startTime: number;      // 퀴즈 시작 시간
  endTime: number;        // 퀴즈 종료 시간(마지막 퀴즈의 선택지를 누른 시간)
  count: number;          // 랜딩페이지에서 설정한 퀴즈 개수
  difficulty: Difficulty; // 랜딩페이지에서 설정한 퀴즈 난이도
  page: number;           // 현재 페이지 (count값보다 작으면 퀴즈가 진행 중이고 같으면 퀴즈가 완료된 것으로 분기처리)
  quizzes: Quiz[];        // 퀴즈 리스트
}  

type Difficulty = "Easy" | "Medium" | "Hard";
type Quiz = {
    category: string;                // 퀴즈 카테고리
    question: string;                // 퀴즈 질문
    choices: string[];               // 정답을 포함한 선택지 배열
    correct_answer: string;          // 정답
    selected_answer: string | null;  // 선택완료한 선택지
};
```

