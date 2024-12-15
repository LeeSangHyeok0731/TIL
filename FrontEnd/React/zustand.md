# Zustand

Zastand는 react의 전역 상태 관리 라이브러리로 주로 사용하는 Redux나 context API와 다르게 react만의 라이브러리라는 특징이 있습니다

## 사용방법

생각 보다 Redux와 비슷하다.

store을 먼저 만들어 준다<br>
이해를 돕기 위해 카운트를 증가하고 감소하는 페이지를 만들어 볼거다

```jsx
import { create } from "zustand";

const useStore = create((set) => ({}));

export default useStore;
```

먼저 create를 가져와서 선언을 해준다

그 후에 값의 초기값을 설정해준다

```jsx
count: 0, // 증감될 카운트
electedButton: null, // 단순한 O / X
```

그다음에 값을 어떻게 관리할지 설정한다

```jsx
setSelectedButton: (button) => set({ selectedButton: button }), // 값을 받아오기
  incrementCount: () => set((state) => ({count: state.count + 1})), // count증가
  removeCount: () => set((state) => ({ count: state.count - 1 })), // count 감소
```

이렇게 해서 최종적인 코드는 다음과 같다

```jsx
// store.jsx
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  selectedButton: null,

  setSelectedButton: (button) => set({ selectedButton: button }),
  incrementCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
```

이제 사용해보자

참고로 파일 구조는

```
src/
|
|---App.js/
|     |
|     - firstchild.jsx/
|     - secondchild.jsx/
|
|---store.jsx
```

이해를 돕기 위해 위처럼 App의 자식컴포넌트로 firstchild와 secondchild가 있는 형식이다

```jsx
// firstchild.jsx
import React from "react";
import useStore from "./store";

function FirstChild() {
  const Button = useStore((state) => state.setSelectedButton);
  // setSelectedButton: (button) => set({ selectedButton: button })
  const increase = useStore((state) => state.incrementCount);
  // incrementCount: () => set((state) => ({count: state.count + 1})),
  const decrease = useStore((state) => state.removeCount);
  // decrementCount: () => set((state) => ({ count: state.count - 1 })),
  const handleClick = (button) => {
    Button(button);
  };

  return (
    <div>
      <h1>첫번째 자식</h1>
      <div>
        <button onClick={() => handleClick("O")}>O</button>
        <button onClick={() => handleClick("X")}>X</button>
      </div>
      <div>
        <button onClick={increase}>카운트 증가</button>
        <button onClick={remove}>카운트 감소</button>
      </div>
    </div>
  );
}

export default FirstChild;
```

useStore을 가져온뒤에 아까 선언했던 setSelectedButton, incrementCount, decrementCount를 각각 Button, increase, decrease에 선언했다

그다음에 onClick을 사용해 실행 시켜주면 된다

```jsx
// secondchild.jsx
import React from "react";
import useStore from "./store";

function SecondChild() {
  const selectedButton = useStore((state) => state.selectedButton);
  const count = useStore((state) => state.count);

  return (
    <div>
      <h1>두번째 자식</h1>
      <p>카운트: {count}</p>
      <p>선택한 버튼: {selectedButton}</p>
    </div>
  );
}

export default SecondChild;
```

위에도 useStore을 가져와서 store.jsx에서 만들었던 count와 selectedButton을 선언하고 이번에는 단순히 화면에 표현만 시켰다

위에 방법처럼 하면 정상적으로 작동한다

## 장점

1. 굉장히 쉽다. 동작을 이해하기 위해 알아야 하는 코드 양이 아주 적다. 핵심 로직의 코드 줄 수가 약 42줄밖에 되지 않는다. (VanillaJS 기준)
2. 보일러플레이트가 거의 없다. (Context API랑 비교)
3. 상태 변경 시 불필요한 리랜더링을 일으키지 않도록 제어하기 쉽다.
4. 특정 라이브러리에 엮이지 않는다. (그래도 React와 함께 쓸 수 있는 API는 기본적으로 제공한다.)
5. 한 개의 중앙에 집중된 형식의 스토어 구조를 활용하면서, 상태를 정의하고 사용하는 방법이 단순하다.

## 단점

1. 단순 사용은 정말 쉬운데 그 외 zustand에 들어있는 기능들을 사용하기 위해 공부할 수 있는 최신 한글 자료가 많이 없다.

2. ts에서 복잡한 타입을 정의할때 어려움이 있을 수 있다
