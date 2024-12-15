# styled-components

스타일드 컴포넌트란 react의 라이브러리로 css를 조금더 간편하게 사용하려고 만들었다

## 사용방법

```
npm install styled-components
```

먼저 `styled`를 `import`해준다

```jsx
import styled from "styled-components";
```

그리고 사용하면 된다

```jsx
const RedButton = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  border-radius: 50%;
`;
```

이제 만든 styled를 사용할 수 있다

```jsx
<RedButton>빨간 버튼</RedButton>
```

보충 설명을 하자면 styled뒤에는 사용할 테그<br>
즉 p, a, h1, h2, div같은게 올 수 있다

그리고 스타일을 지정할때는 css와 같지만 벡틱(**``**)으로 묶어야 한다는 특징이 있다
