# type

ts의 타입은 많다

# 기본타입

## number

```ts
const a: number = 5;
```

## string

```ts
const a: string = "Lee";
```

## boolean

```ts
const a: boolean = true; // false
```

## any

```ts
const a: any = true; // "Lee" or 17
```

# 특수 타입

## 객체 타입

```ts
interface Person {
  name: string;
  age: number;
  isDeveloper?: boolean; // ? 붙은거는 있어도, 없어도 됨
}

const person: Person = {
  name: "이상혁",
  age: 30,
};
```

## 배열 타입

```ts
let numbers: number[] = [1, 2, 3];
```

## 함수 타임

```ts
function add(a: number, b: number): number {
  return a + b;
}

type MathOperation = (x: number, y: number) => number; // 타입 에일리어스

const multiply: MathOperation = (x, y) => x * y;
```

## 유니온 타입

```ts
let id: number | string = 101; // 숫자 또는 문자열
```

## 제네릭 타입

```ts
function wrap<T>(value: T): T[] {
  return [value];
}

let wrapped = wrap(123);
```

원래 제네릭 타입은 여기만의 고유타입은 아니다
