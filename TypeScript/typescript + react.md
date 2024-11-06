# TypeScript + React

우리는 js의 라이브러리인 React.js를 사용한다<br>
그리고 js의 상위개념인 TypeScript도 사용한다<br>

그러면 그 두개를 동시에 사용할 순 없을까?

## 생성하기

```
mpx create-react-app {프로젝트 이름} --template typescript
```

위처럼 사용하면 우리는 React와 TS가 같이 있는 프로젝트가 생성 된다

우리가 리엑트를 생성하면 jsx파일을 만들수 있다<br>
ts가 포함되어 있는 jsx파일은 tsx라고 한다<br>
`파일명.tsx`

## 다른점

일단 React프로젝트의 `App.js`와 `index.js`는 `App.tsx`와 `index.tsx`로 변경된다<br>

## 주의할점

우리가 `react-router-dom`이나 `styled-components`같은 패키지를 사용하려 할때에는 스타일 패키지까지 같이 설치해야 한다<br>

ts는 타입정의가 엄격하기 때문에 오류가 발생할 수 도 있습니다

예시

```
npm install react-router-dom @types/react-router-dom
```

이렇게 `@types/`뒤에 설치한 패키지를 그대로 넣으면 된다

## 좋은 점

좋은점은 ts의 장점을 React에서도 그대로 사용할 수 있다는 점이다<br>

1. 타입지정으로 타입안정성 확보
2. 유지보수성 대폭 증가

위에 2가지 이유만으로 react에 ts를 같이 사용하는건 훌룡한 선택이라고 생각한다
