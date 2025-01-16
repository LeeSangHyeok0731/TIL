# react-cookie

react-cookie라이브러리는 react에서 쿠기의 값저장, 삭제, 불러오기등을 쉽게 하기 위해 만들어진 라이브러리이다

## 사용방법

1. provider로 감싼다

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </StrictMode>
);
```

redux나 contextapi를 사용할 때와 비슷한 이유로 provider로 감싸야 한다

Provider로 감싸진 안의 컴포넌트만 접근이 가능하다

2. useCookies
   커스텀 훅의 형태로 쿠키를 읽고, 설정하고, 삭제할 수 있다

```tsx
import { useCookies } from "react-cookie";

const [cookies, setCookie, removeCookie] = useCookies(["cookieName"]);
```

- cookies: 현재 쿠키 값을 읽습니다.
- setCookie: 쿠키를 생성하거나 업데이트합니다.
- removeCookie: 쿠키를 삭제합니다.

ex)

```tsx
// 쿠키 설정
setCookie("user", "John Doe", { path: "/" });

// 쿠키 삭제
removeCookie("user", { path: "/" });
```

3. 생성<br>

아니면 새로운 cookie class를 생성하여 관리할 수도 있다

```tsx
import { Cookies } from "react-cookie";

const cookies = new Cookies();
```

```tsx
// ex
export const setCookie = (name: string, value: string, options?: any) => {
  return cookies.set(name, value, options);
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
```
