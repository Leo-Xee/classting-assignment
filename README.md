# Classting Assignment

간단한 퀴즈 웹 애플리케이션

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
