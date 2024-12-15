# **Redux**

**Redux**는 Javascript의 상태를 관리하기 위한 라이브러리입니다

애플리케이션의 상태를 중앙에서 관리하고, 이 상태를 예측 가능한 방식으로 업데이트하도록 도와줍니다.

### **Redux Toolkit**

Redux의 **공식 권장 도구**로, Redux 사용을 더 쉽고 효율적으로 만들어주는 라이브러리입니다.

Redux의 복잡한 설정과 불필요한 **보일러플레이트** 코드를 줄여주고, 상태 관리의 복잡성을 해결하는 데 중점을 둔 도구입니다.

#### **다운로드**

```
npm install @reduxjs/toolkit react-redux
```

리덕스는 **스토어(store)**, **액션(action)**, **리듀서(reducer),** 그리고 **디스패치(dispatch)**가 필요합니다.

설명의 편의를 위해서 버튼을 누르면 count가 1씩 증가하거나 감소하는 웹페이지를 만들어 보겠습니다

### **Store**

```tsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

const store = configureStore({
  reducer: counterReducer,
});

export default store;
```

**스토어(store)**는 상태를 중앙에서 관리하는 역할을 합니다

configureStore을 사용해 reducer을 선언합니다

### **Action & Reducer**

```tsx
// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

// createSlice로 슬라이스 생성
const counterSlice = createSlice({
  name: "counter", // 슬라이스 이름
  initialState: { count: 0 }, // 초기 상태

  // 리듀서 부분: 상태를 어떻게 업데이트할지 정의
  reducers: {
    increment: (state) => {
      state.count += 1; // 카운트 증가
    },
    decrement: (state) => {
      state.count -= 1; // 카운트 감소
    },
  },
});

// 액션 부분: 각 리듀서에 대한 액션 생성
export const { increment, decrement } = counterSlice.actions;

// 리듀서 부분: store에 등록될 리듀서 추출
export default counterSlice.reducer;
```

원래는 action과 reducer을 따로 만들어 줘야 하지만 앞서 설치했던 tooltik덕분에 createSlice를 사용하면 함께 생성할 수 있습니다

**Reducer**은 상태를 어떻게 업데이트할지 정의하는 역할을 수행하고

**Action**은 정의한 Reducer의 대한 트리거 역할을 합니다

먼저 creacteSlice로 **counterSlice**를 생성해 줍니다.

그 후에 슬라이스 이름과 초기상태를 정해 줍니다

그 후 리듀서 부분을 정의합니다

액션은 각각의 리듀서에 대한 액션을 생성합니다

그리고 store에 등록할 리듀서를. reducer로 추출합니다

### **Dispatch**

**디스패치(dispatch)**는 액션을 스토어로 내보내는 함수입니다

쉽게 말해 액션을 시작하게 하는 트리거역할입니다

```tsx
// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.count); // 상태 가져오기
  const dispatch = useDispatch(); // 디스패치 함수 가져오기

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </div>
  );
}

export default App;
```

먼저 **useSelector**상태를 가져옵니다

그 후 **useDispatch();**를 사용해 디스페치 함수를 가져옵니다

이제 우리는 클릭할 때 increment와 decrement가 작동되게 하면 끝납니다

작동시키는 방법은 useDispatch로 감싸주면 안에 있는 것 **디스패치 한다**라는 뜻입니다
