# Type Alias

타입 에일리어스는 TS에서 특정 타입에 이름을 지어주는 기능입니다

## 사용방법

타입 에일리어스는 ts에 기본적으로 내장되어 있는 기능으로 `type`을 앞에 붙여 사용할 수 있습니다

```ts
type User = { name: string; id: number };
```

위처럼 선언하면 `User`를 간단 하게 다시 사용할 수 있습니다

```ts
//사용예
function UserInfoPrint(user: User) {
  console.log(`유저의 이름은 ${user.name}, 유저의 아이디는 ${user.id}`);
}

const user: User = { name: "이상혁", id: 1412 };
UserInfoPrint(user);
```

이제는 불편하게 `name`와 `id`의 타입을 정해지지 않아도 됩니다

## 인터페이스와 다른 점

인터페이스와 타입 에일리어스는 둘다 객체타입을 정의하는 역할을 수행하지만 다른 점이 있습니다

1. **확장 방식**<br>
   인터페이스는 `extends`를 사용하여 확장하지만<br>
   타입 에일리어스는 `&`를 사용해서 타입을 **결합**합니다

```ts
//인터페이스 확장
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

// 타입 에일리어스 확장
type PersonType = { name: string };
type EmployeeType = PersonType & { id: number };
```

2. 선언 병합<br>
   인터페이스는 선언하고 다시 선언하면 두개의 선언이 합쳐지지만 타입 에일리어스는 같은 이름으로 다시 만들 수 없다

```ts
// 인터페이스 병합 예시
interface User {
  name: string;
}

interface User {
  id: number;
}

// 병합 결과: { name: string; id: number }
const user: User = { name: "이상혁", id: 1412 };

type User = { id: number };
type User = { name: string }; // <-- 에러
```
