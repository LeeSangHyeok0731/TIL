# TypeScript

타입스크립트란

> 타입스크립트는 자바스크립트에 타입을 부여한 언어입니다.
> 자바스크립트의 확장된 언어라고 볼 수 있습니다

## 왜 사용하나요?

타입스크립트를 사용하는 이유는 **정적인 타입을 지원한다는 것이다**

```ts
const a: number = 5;
const b: string = "3";

console.log(a * b); //<- 에러
```

이러한 타입선언은 함수를 선언할때 더욱 빛을 발한다

js의 return값은 타입이 명확하지 않다

```jsx
function plus(a, b) {
  return a + b;
}
```

하지만 ts는 리턴값 마저도 정확하게 정해준다

```ts
function sum(a: number, b: number): number {
  return a + b;
}
```

타입은 여려개를 지정받을 수도 있다

```ts
function def(a: number | string, b: number | string): number | string {
  return /**/;
}
```

인터페이스와 같이 사용할 수 있다

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Lee",
  age: 17,
};
```
