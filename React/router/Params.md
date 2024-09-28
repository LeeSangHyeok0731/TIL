# Params

주소 경로 내부에 특정 데이터를 넣어 전달하는 것

즉 특정 url경로의 값을 가져와서 활용할 수 있다

크게 **url 파라미터**와 **퀴리스트링**으로 나누어 진다

## **url 파라미터**
주소="https://faker/lol/1234"
```jsx
<Route path="lol/:id" element={<Lol />} />
```
이렇게 경로를 ```/lol/:id```에서 ```:```로 표현해준 id는 Lol컴포넌트에 파라미터로 전달이 되어 Lol컴포넌트내에서 ```useParams```훅을 통해 추출하고 사용할 수 있다.

## **쿼리스트링**

```?, &```을 기준으로 key와 value로 나눠 데이터를 전달 받는다
그후 전달받은 값은 ```useLocation```훅을 통해 추출하고 사용할 수 있다

예전까지는 ```?, &```를 직접 분리해서 추출을 해야 했는데 , ```useSearchParams```를 통해서 그러한 뷸편함을 해소 했다

## 특징 
 * **url파라미터**
    * ID, 이름등 특정 데이터를 조회할때 사용<br>
    * 일반적인 변수, 상수값들을 전달하기 위해 사용
 * **쿼리스트링**
    * 키워드 검색, 페이지네이션, 정렬방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용
    * key, value 형태의 데이터이므로 json이나 객체 형태의 데이터를 전달하기 용이하다


## **useParams**
url파라미터를 조회할 때 사용했다

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Lol(){
  let { id } = useParams();

  return (
    <div className="test">
      <p>현재 유저의 아이디는 { id } 입니다.</p>
    </div>
  )
}

export default Lol;
```

이렇게 해 놓으면 ```/lol/:id```인 id로 1234가 불러와 진다
만약 ```https://faker/lol/1234/1212``` 이고 ```/lol/:id/:name```라고 해 놓으면 1234는 id에 1212는 name에 불러올 수 있다

## **useSearchParams**
쿼리스트링을 추출하는데 사용된다

사용법이 useState와 유사하여 금방 익숙해질 수 있다

```jsx
const [serchParams, setSearchParams] = useSearchParams();
```

searchParams는 유용한 메소드를 많이 포함하고 있다

setSearchParams는  함수의 인자에 객체와 문자열을 넣어주면 현재 url의 쿼리스트링을 변경할 수 있다

자주 사용하는 메소드는

## 값을 읽어오는 메서드

```searchParams.get(key)```특정한 key의 value를 가져오는 메서드, 해당 key의 value가 두 개 이상이라면 처음의 값을 반환한다.

```searchParams.getAll(key)```특정 key에 해당하는 모든 value를 가져오는 메서드


## 값을 변경하는 메소드

```searchParams.set(key, value)```인자로 전달한 key 값을 value로 설정한다. 만일 기존에 key에 대한 값이 존재했다면 덮어씌운다.

```searchParams.append(key, value)```기존 값을 변경 혹은 삭제하지 않고 추가한다.

## 활용
```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Example() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Example;
```

만약 이런 코드에서 url이 ```http://example.com?name=Lee&age=17```이라면 화면에는 

```
Name: Lee
Age: 17
```
이 출력된다

```jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Example() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');
  const updateQuery = () => {
    setSearchParams({ name: 'Lee', age: '18' });
  };

  useEffect(() => {

  }, [searchParams])

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateQuery}>Change Age</button>
    </div>
  );
}

export default Example;
```
이렇게 하면 이 출력이 먼저 되고
```
Name: Lee
Age: 17
```
에서 버튼을 누르면 

```
Name: Lee
Age: 18
```
로 바뀐다