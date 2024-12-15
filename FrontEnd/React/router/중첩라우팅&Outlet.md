# 중첩 라우팅

특정 페이지 내에서 하위 페이지를 만들 수 있고, 해당 페이지마다 경로를 이용한 데이터 전달이 가능하다

한 중첩 라우팅을 구현할 경우 해당 하위 페이지 이외에는 컨텐츠가 바뀌지 않는다는 특징이 있다

```jsx
<Route path="/parents" element={<Parents />}>
    <Route path="/child" elememt={<Child />} />
</Route>
```

이렇게 위에 ```/parents```주소 안에 ```/child```를 생성하면 자동으로 ```/child```는 ```/parents```의 하위 라우팅이 되었다고 판단한다

이렇게 해두면 우리가 /parents/child로 이동하면 ```/parents```와 ```/child```가 동시에 렌더링이 된다

하지만 단지 이렇게만 한다고 중첩라우팅이 되지는 않는다

실제로 라우팅이 발생하는 부모요소인 ```/parents```에서 하위페이지가 렌더링될 자리를 명시해줘야만 한다

그래서 우리가 사용해야될게 바로 outlet 컴포넌트 이다

## **Outlet**

```jsx
import { Outlet } from 'react-router-dom';

function Parents() {
  return (
    <div>
      <div>
        <h1>중첩라우팅</h1>
        <h1>Outlet의 예시</h1>
      </div>
      <Outlet />
    </div>
  );
}
```

이렇게 Parents컴포넌트에 ```Outlet```컴포넌트를 넣어 줌으로써 하위요소인 Child컴포넌트를 렌더링할 수 있다(주소가 일치하는 경우)

