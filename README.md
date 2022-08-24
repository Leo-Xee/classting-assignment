# Classting Assignment

과제 제출한 이후에 아쉬웠던 코드들이 있어서 개인적으로 리팩토링을 진행했습니다.

<br/>

## 리팩토링 내용

### ✅ 퀴즈 데이터를 가져오는 API를 커스텀 훅으로 분리 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/dfa32ae654cc95459cc48b0eb700cd35e2358aee)

- 기존에는 `QuizView` 컴포넌트에서 직접 `SWR` 라이브러리를 의존하고 있었는데 이를 커스텀 훅으로 분리했습니다.

### ✅ 삼항연산자의 중첩 제거 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/facd6593490036c03cb153c75f6b564a6882b54f)

- 한눈에 이해하기 어려운 삼항연산자의 중첩을 제거했습니다.

### ✅ Setter 노출을 최소화하기 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/3d9f5064d5d72fddc6c96343c8b5253ceed482a2)

- `ResultView` 컴포넌트에서 Store의 Setter를 무분별하게 가져와서 사용하고 있었습니다. 하지만 Setter를 노출하는 것은 안티 패턴으로 상태 로직이 변경되었을 경우에 유지보수가 어려워지는 문제가 있어서 Store 내부에 해당 로직을 포함하는 함수를 만들고 사용할 때 해당 함수만을 호출하는 방식으로 변경했습니다.

### ✅ Store 분리하기 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/9484612e03a2ccebd5a952da6ca65b4b2cff8fc0)

- `useQuizStore`에서 관리하고 있는 상태가 너무 많았고 서로 다른 특징을 가진 상태들이 섞여 있어서 Store를 `useQuizStore`와 `useOptionStore`로 분리했습니다. `useQuizStore`에는 퀴즈 진행을 위한 상태를 관리하고 `useOptionStore`는 퀴즈 진행을 위한 옵션들의 상태를 관리합니다.

```ts
// useQuizStore의 상태
{
  isReadMode: boolean;
  startTime: number;
  endTime: number;
  page: number;
}

// useOptionStore의 상태
{
  count: number;
  difficulty: Difficulty;
  quizzes: Quiz[];
}
```

### ✅ Quiz 타입의 속성을 카멜케이스로 통일 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/1fa4e4d5c63a397a8447bc0a35880e967f4d253e)

- 퀴즈 데이터를 위한 API 응답을 `filter` 함수를 사용해서 전처리하는 과정에서 `correct_answer`과 `selected_answer`이 기존 컨벤션을 지키지 않고 있었습니다. 그래서 동일하게 카멜케이스로 변경했습니다.

### ✅ Chart 컴포넌트의 이름과 Props 변경 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/99e6999c2ba5f176745476d457fe93d6d3483062)

- `Chart` 컴포넌트라는 이름이 포괄적이라서 `DoughnutChart` 로 이름을 변경하였습니다. 
- `Props`로 퀴즈 결과를 `[win, lose]`형식의 튜플로 받고 있었는데 의미가 명확하지 않아서 `Props`로 `win`과 `lose`를 따로 내려 받도록 수정했습니다.

### ✅ QuizView 컴포넌트 리팩토링 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/f6a2b630bc3c0bb387949748338cf9275ac3605b)

- `QuizView` 컴포넌트에서 현재 페이지의 퀴즈 데이터를 일일이 변수에 할당해서 사용하는 로직이 읽기 좋지 않았습니다. 그래서 이를 `getCurrentQuiz` 라는 함수 내부에서 처리하고 해당 함수를 호출해서 사용하도록 변경했습니다.

### ✅ 엘리먼트에 textContent가 있는 경우에 aria-labelledby 사용하도록 변경 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/44effb133b9b797a2321c4b8a78ac98de60255ff)

- 스크린리더 사용자에게 추가적인 정보를 주기 위해서 `aria-label`을 사용했었는데 엘리먼트에 `textContent`가 있을 경우에 스크린리더는 내용을 무시하고 `aria-label`의 값만을 사용자에게 알려주는 문제가 있었습니다. 이 문제를 해결하고자 `aria-label` 대신 `aria-labelledby`를 사용하도록 변경했습니다.

### ✅ 스타일 코드의 중복을 Emotion의 Composition으로 제거 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/fd30b6290e59180d3a2dad8be7ebb8a918c7eeb4)

- `Selector` 컴포넌트와 `Input` 컴포넌트의 스타일 관련 코드가 거의 유사했지만 일일이 하드코딩되어 있었습니다. 그래서 Emotion의 Composition 기능을 사용해서 중복을 제거했습니다.

### ✅ HTML 엘리먼트의 기본 속성들을 Wrapper 컴포넌트의 Props가 모두 반영하도록 변경 - [코드](https://github.com/Leo-Xee/classting-assignment/commit/50b17ad52314e91f3f942eed721dcfca031f202b)

- Native HTML 엘리먼트를 직접 감싸는 컴포넌트의 `Props`를 임의로 제한해서 선언하는 바람에 엘리먼트의 모든 속성을 제어할 수가 없었고 자동완성도 기대할 수가 없는 문제가 있었습니다. 그래서 엘리먼트의 기본 타입을 인터섹션을 사용해 `Props`에 추가했습니다.


