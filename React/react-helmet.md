# react-helmet

react-helemet이란 index.html의 `<head>`안의 요소를 변경할 수 있는 react라이브러리 입니다

## 다운로드 방법

```
npm install react-helmet
```

## 사용방법

사용할때는 무조건 `<helmat>`테그 안에 넣어서 사용한다

1.  title변경하는 방법

```jsx
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

export default Home;
```

이렇게 하면 Home페이지로 이동했을때 title이 Home으로 변경된다

2.  메타테그 변경하는 방법

```jsx
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

export default Home;
```

Home페이지로 이동되었을때 메타테그가 변경 & 추가 된다

3. 스크립트 추가

```jsx
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <script /*내용*/></script>
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

export default Home;
```

위처럼하면 스크립트 추가

4. 스타일 추가

```jsx
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="style.css" />
      </Helmet>
      <h1>Home</h1>
    </>
  );
}

export default Home;
```

위처럼 하면 스타일시트 추가가능
