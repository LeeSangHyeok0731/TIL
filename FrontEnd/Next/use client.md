# use client

Next.js에서 react관련한 문법을 사용하려면 `"use client"`를 사용한다

예를 들어 `useState
`나 `useEffect`를 사용하는 경우에 사용한다

```tsx
"use client"; // <-----

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      {count}
      <button onClick={handleClick}>증가</button>
    </>
  );
}
```

## 왜?

Next는 흔히 풀스텍 프레임워크라 불린다

그말은 서버와 클라이언트작업을 동시에 진행할 수 있는데
그 2개를 구분하기 위해 "use client"와 "use server"를 사용한다
