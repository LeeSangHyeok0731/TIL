# interface

인터페이스는 ts에서 객체의 타입을 정의하는데에 사용됩니다

```ts
interface Person {
  name: string;
  age: number;
}
```

위에는 Person이라는 인터페이스를 정의했습니다

그러면 간단하게 객체를 정의할 수 있습니다

```ts
const person: Person = {
  name: "Lee",
  age: 30,
};
```

선택적으로 정의 할 수 있습니다

```ts
interface Car {
  brand: string;
  model: string;
  year?: number; // 선택적 속성
}
```

`?`를 사용하면 <br>
연도가 없어도 오류가 발생하지 않습니다

읽기 전용 속성이란 것도 있는데<br>
특징은 한번 초기화 하면 다시 값을 못바꿉니다

```ts
interface Book {
  readonly title: string;
  author: string;
}
```

함수의 타입도 정의할 수 있습니다

```ts
interface Add {
  (x: number, y: number): number;
}

const add: Add = (x, y) => x + y;
```
