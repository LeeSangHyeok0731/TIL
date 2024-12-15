우리의 웹페이지가 복잡해지면

데이터를 보내는 데에 불필요한 과정이 생길 수도 있다

**A - B - C - D**처럼 데이터가 **A**에서 **D**로 가는 과정이 길어지고

B와 C는 오로지 값을 전달하는 역할만 수행한다

이러한 현상을 **Prop Drilling**이라 부릅니다

**Prop Drilling**을 방지하고자 **Context API**와 **Redux**를 사용한다

---

### **Context API**

위에서 설명한 것처럼 **Prop Drilling**을 방지 하기 위해 사용한다

React에 기본적으로 포함된 기능이라, 별도의 설치가 필요 없다.

그냥 React에서 제공하는 **createContext**와 **useContext**를 사용하면 된다.

#### **1\. Context 생성**

```
import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;
```

먼저 따로 파일을 만들어서 creacteContext();를 사용해서 Context를 생성한다

이렇게 생성하면 다른 컴포넌트에서도 import로 끌어와서 사용할 수 있다

#### 2\. **Provider로 데이터 제공**

```
import UserContext from "./context/context";

function App() {
  const username = "Mr. Lee"

  return (
    <UserContext.Provider value={username}>
      <Parants />
    </UserContext.Provider>
  );
}

export default App;
```

가장 최상위 컴포넌트를 **<{Context 이름}.Provider>**로 감싸줍니다

**.Provider**로 감쌈으로써 하위의 컴포넌트에서 username을 받아서 사용할 수 있습니다

보동 App.js가 최상위 컴포넌트라 App안에 감쌌고 username을 선언한뒤

value\={userName}를 작성하였습니다

#### **3.Context 데이터 사용하기**

값을 전달 받았으면 사용해야 겠죠?

```
import{ React, useContext }from "react";
import UserContext from "../context/context";

function Parants(){
    const userName = useContext(UserContext);

    return(
        <div>
            <h1>hello {userName}!</h1>
        </div>
    )
}

export default Parants;
```

1 **Context**를 사용하는 컴포넌트는  **useContext**훅을 사용해 값을 가져올 수 있습니다

결과를 보면

[##_Image|kage@AGNRt/btsJ7UAdcU9/obKrAKOigMWqm3HAxJYoc0/img.png|CDM|1.3|{"originWidth":256,"originHeight":97,"style":"alignLeft","filename":"스크린샷 2024-10-15 151132.png"}_##]

이렇게 정상적으로 출력되는 것을 볼 수 있다

이렇게 장점도 명확하지만 Context API는 단점도 명확하다

### **Context API의 단점**

Context API의 단점이라고 하면 크게 2가지를 꼽을 수 있습니다

#### **1\. 성능 문제**

Context의 값이 변경되면 아래의 해당값을 사용하는 모든 컴포넌트들이 전부 리렌더링이 된다

이는 성능이 저하되는 현상을 초래할 수 있다

#### **2\. 비교적 제한된 기능**

복잡한 상태 관리(예: 비동기 작업 처리, 미들웨어 등)를 위한 추가적인 구조가 필요할 수 있습니다.

만약 비동기 작업중 하나인 서버에서 데이터를 가져오는 경우를 가정하면 Context API로는

완전히 동작하기에 부족함이 있을 수 있습니다

이외에도 복잡한 상태 구조 관리의 한계, 구독 범위의 제한등 다양한 단점이 존재합니다
