# **React Router Dom**
원래 우리는 A웹페이지를 보여주고 싶으면 A.html을 보여주고<br>
B웹페이지를 보여주고 싶으면 B.html을 보여준다<br><br>

근데 React는 SPA(Single Page Application)으로<br>
페이지전체를 하나의 페이지에 전부 담고 필요할 때 동적으로 화면을 바꿔가며 보여준다<br>

그러면 react는 화면전환을 할 수 없나?<br>

그래서 우리는 React Router Dom을 사용한다
***

## React Router Dom?
이걸 왜쓰냐?<br>
a테그는 화면을 전환할때 깜빡이며 전환이 된다<br>
이러한 현상은 부정적인 사용자 경험이 될 수 있기에 이것을 바로잡고자 routing을 한다<br>

## Router의 종류

### **Hash Router**
url에 해쉬(#)값을 이용하는 라우터

1. 주소에 # 가 붙는다
2. 검색엔진이 읽지 못한다
3. 별도의 서버 설정을 하지 않더라도 새로고침 시 오류가 발생하지 않는다. 이는 해시 라우터가 해쉬(#) 뒤의 값은 브라우저에서만 관리하고(라우팅하는 사실을 서버가 모름) 서버는 기본 url로 서버에 데이터를 요청하기 때문이다.
4. history API를 사용하지 않기 때문에 동적 페이지에 불리하다

### **Browser Router**
1. history api를 사용한다
2. 별도의 서버 설정이 없다면 새로고침시 404요류가 발생한다
3. 큰 프로젝트에 적합하다

>   서버가 존재하고, SEO가 필요한 프로젝트라면 BrowserRouter를 사용하는 것이 좋고, 그 외에 개인적이거나 작은 단위의 프로젝트라면 HashRouter를 사용해도 괜찮다!!

## **React-Router-Dom**
React로 생성된 SPA(Single Page Application) 내부에서 페이지 이동이 가능하게 해주는 라이브러리


### **설치 방법**
> npm i react-router-dom

### **사용하기**
```jsx
import { BrowserRouter, Link,  useNavigate} from 'react-router-dom'
```

### **BrowserRouter**
* history API를 활용해 history 객체를 생성한다.<br>
* history API는 내부적으로 stack 자료구조의 형태를 띄기 때문에 사용자가 방문한 url 기록들을 차곡차곡 쌓는 형태로 저장해둔다고 생각하면 된다.<br>
* 라우팅을 진행할 컴포넌트 상위에 ```<BrowserRouter>``` 컴포넌트를 생성하고 감싸주어야 한다!!

```jsx
* index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> // <- 이렇게
      <div>
        <h1>BrowserRouter</h1>
      </div>
      <MyComponent />
    </BrowserRouter>
  </React.StrictMode>
);
```


### **Link**
Link 컴포넌트는 라우터 내에서 직접적으로 페이지 이동을 하고자 할 때 사용되는 컴포넌트이다.

```jsx
import React from 'react';
import {Link} from 'react-router-dom';

function LinkExample(){
  return (
    <div>
      <Link to='https://github.com/LeeSangHyeok0731'> github </Link>
      <Link to='youtube.com'> youtube </Link>
    </div>
  );
}

export default LinkExample;
```
이렇게 ```<Link>```안에 to='url'을 넣어서 작동한다


### 1. Relative
계층 구조에 상대적이다.
상대 경로 표현이 가능하므로, ./.. 과 같은 표현도 사용이 가능하다.
### 2. preventScrollReset
페이지 중간에 있는 컨텐츠 내부에서 tab 목록을 누르는 것과 같은 시도를 할 때, 기존의 Link 컴포넌트였다면 클릭 시 스크롤이 초기화되어 페이지 가장 위로 이동하게 된다.
그러나 이 속성을 true로 설정해주면 이를 방지할 수 있다!!
### 3. state
useLocation 훅과 연계하여 특정 state를 넘겨주는 것도 가능하다.
```jsx
<Link to="new-path" state={{ some: "value" }} />

let { state } = useLocation();
```

### **useNavigate**
link가 html테그의 형태였다면 useNavigate는 함수에 가깝다

이 훅을 사용하면 특정 이벤트가 발생 했을때 이동할 수 있다

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const onClick = () => {
	navigate('url')
}
```

여기에는 속성을 추가 할 수 있는데
1. place
* 기본값은 false이고, true로 설정한다면 이동 후 뒤로가기가 불가능해진다.
```jsx
navigate("url", { replace: true });
```
2.  state
* state 전달 기능이 있다
```jsx
navigate("url", { state: { cardId: cardId } });

const location = useLocation();
const { cardId } = location.state;
```
