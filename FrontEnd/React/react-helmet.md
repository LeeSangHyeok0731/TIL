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

## React 19 문서 메타데이터 지원

2024년 12월 5일

React 19가 출시가 되었는데, 거기에서 **문서 메타데이터 지원**에 관한 새로운 기능이 추가되었다

````md
HTML에서 `<title>`, `<link>`, 와 같은 문서 메타데이터 태그는 문서 섹션 `<meta>`에 배치하기 위해 예약되어 있습니다 `<head>`. React에서 앱에 적합한 메타데이터를 결정하는 구성 요소는 를 렌더링하는 위치에서 매우 멀리 떨어져 있거나 `<head>`React가 를 전혀 렌더링하지 않을 수 있습니다 `<head>`. 과거에는 이러한 요소를 효과에 수동으로 삽입하거나 와 같은 라이브러리를 통해 삽입해야 했으며 **react-helmet**<br>React 애플리케이션을 서버에서 렌더링할 때 신중하게 처리해야 했습니다.

React 19에서는 구성 요소에서 문서 메타데이터 태그를 기본적으로 렌더링하는 기능을 추가합니다.
````

```jsx
function BlogPost({post}) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title> // <-
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={post.keywords} /> // <-
      <p>
        Eee equals em-see-squared...
      </p>
    </article>
  );
}
```

이게 무슨 소리냐

이제는 `react-helmet`에서 지원하는 기능들을 전부 내장으로 사용할 수 있다는 말이다

아마 더이상은 `react-helmet`은 사용하지 않을것 같다
