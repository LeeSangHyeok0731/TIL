# Method

메소드의 정의는 **_객체의 함수_**이다

하지만 지금 설명할건 js의 기본적으로 내장되어 있는 함수, 즉

js의 메소드를 정리할 것이다.

가장 많이 사용되는 것만 정리했다

## 메소드

## map

사용방법

```js
let arr = [1, 2, 3];
let newArr = arr.map((/*가져올 값*/) => /*가져온 값을 수정하는 방법*/)
```

가져올 값들은 x, index등등 많다

그리고 수정하는 방법도 다양하다

```js
let arr = [1, 2, 3];
let newArr = arr.map((value, index) =>
  index % 2 === 0 ? value * 2 : value - 1
);

console.log(newArr); // [2, 1, 6]
```

## filter

사용방법

```js
let arr = [1, 2, 3];
let newArr = arr.filiter((/*가져올 값*/) => /*가져온 값을 거르는 기준*/)
```

조건의 맞는 값만 반환한다

```js
let arr = [1, 2, 3];
let newArr = arr.filiter((x) => x % 2 === 0);

console.log(newArr); // [2]
```

## push

사용방법

```js
let arr = [1, 2, 3];
arr.push(/*추가할 값*/);
```

배열의 값을 추가한다.
맨 마지막 값뒤에 추가된다

```js
let arr = [1, 2, 3];
arr.push("faker");

console.log(arr); // [1, 2, 3, "faker"]
```

다른 자료형도 된다

## reduce

사용방법

```js
let arr = [1, 2, 3];
const sum = arr.reduce(() => /*계산 방법*/)
```

안의 값을 누적하여 계산한다

```js
let arr = [1, 2, 3];
let sum = arr.reduce((acc, cur) => acc + cur, 0); // 6
```

## find

사용방법

```js
let arr = [1, 2, 3];
const newArr = arr.find((/*가져올 값*/) => (/*조건*/))
```

filter()와 다르게 첫번째 값만 가져온다

```js
let arr = [1, 2, 3];
const newArr = arr.find((x) => x % 2 === 1); // 1
```

## indexOf

사용방법

```js
let arr = [1, 2, 3];
const index = arr.indexOf(2); // 1
```

특정 값이 있는 인덱스번호를 반환한다

## includes

사용방법

```js
let arr = [1, 2, 3];
arr.includes(3); // true
```

특정값이 배열안에 있는지 확인하고 그 값을 boolean으로 반환한다

## split

사용방법

```js
let str = "a,b,c";
str.split(","); // ["a", "b", "c"]
```

()안의 값으로 나놔서 배열을 반환한다

## toUpperCase, toLowerCase

사용방법

```js
let str = "hello world";
let STR = str.toUpperCase(); // HELLO WORLD
let sTr = STR.toLowerCase(); // hello world
```

문자열의 요소를 대문자로, 소문자로 바꿔준다
