# Grid
## **grid는 정말 greed!!**

```css
display: grid;
```
그리드 레이아웃은 2차원 방식으로 레이아웃을 설계할 수 있도록 고안된 속성이다.

이때 2차원 방식이란, 가로와 세로를 같이 사용해 레이아웃을 설계하는 방식이다.
***
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbru6z2%2FbtsJgbDPfX8%2FuSkKlj49oOMbuE3IcMqck0%2Fimg.jpg"><br>
https://studiomeal.com/archives/533

 1. 빨간색 선 - column<br>
세로를 의미한다<br>
 2. 초록색 선 - row<br>
가로를 의미한다<br>
 3. 안쪽에 회색선 - grid cell<br>
row와 column이 만나서 이루는 하나의 공간<br>
 4. 배경이 하늘색인 도형 - grid item<br>
grid cell안에 표현되는 요소<br>
5. 바깥의 검은 선 -  grid container<br>
 display:grid;가 적용되는 요소<br>
6. 보라색 선 - grid gap<br>
grid cell사이에 간격<br>
7. 노란색의 영역 - grid area<br>
grid cell들의 집합<Br>
***
## 문법
grid의 기본은 column과 row입니다
이것들을 조합하여 우리는 cell을 만들고 배치해야합니다

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid는 정말 Greed</title>
    <link rel="stylesheet" href="grid.css">
</head>
<body>
    <div id="container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</body>
</html>
```
```css
body {
    background-color:skyblue;/*배경색 스카이블루*/
    margin:0;
}
#container {
    display:grid;
    grid-template-columns: 200px 200px 200px;/*간격이 200px짜리 세로줄을 만든다*/
    grid-template-rows: 200px 200px 200px;/*간격이 200px짜리 가로줄을 만든다*/
}
.item{
    background-color:red;/*배경색 빨간색*/
    border-radius:10px;/*가장자리에 굴곡*/
    border:1px solid black;/*테두리 추가*/
}
```
* **grid-template-columns** 은 열(column)의 배치
* **grid-template-rows**은 행(row)의 배치

grid-template-columns:뒤에 만들고 싶은 행/열만큼 크기를 정해서 작성하면 됩니다

꼭 200px 200px 200px이 아니라 200px 100px 500px 340px ... 처럼 다양한 크기를 지정해 주셔도 됩니다

 

그런데 열/행이 3개가 아니라 100개 1000개 면 일일이 적어야 할까요?

 

당연히 아닙니다

```css
#container {
    display:grid;
    grid-template-columns: repeat(3, 200px);/*간격이 200px짜리 세로줄을 3개 만든다*/
    grid-template-rows: repeat(3, 200px);/*간격이 200px짜리 가로줄을 3개만든다*/
}
```

* **repeat**:같은 크기를 반복해서 만들수 있는 문법 입니다<br>
repeat(반복 횟수, 간격)으로 간편 하게 실행할 수 있습니다

## minmax
minmax는 최댓값과 최솟값을 정할수 있습니다

```css
#container {
    display:grid;
    grid-template-columns: repeat(3, minmax(200px, auto));
    grid-template-rows: repeat(3, minmax(200px, auto));
}
```

## auto-fill&auto-fit
auto-fill은 column의 갯수를 정하지 않고 너비가 되는 만큼 cell을 체웁니다

```css
#container {
    display:grid;
    grid-template-columns: repeat(auto-fill, 20%);
    grid-template-rows: repeat(3, 200px);
}
```

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbm3rc1%2FbtsJhkzM37N%2FcJHBxZAKxwyqOGMmr35XO0%2Fimg.png"><br>
^이렇게 체워집니다

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc6hmYs%2FbtsJgDtjQ2O%2FsN1pceE8CkKTMYTokkaAp1%2Fimg.png"><br>
^적으면 비워놓기도 합니다

## auto-fit
auto-fit을 사용하면 빈공간을 자동으로 채워 줍니다

## gap
gap을 사용하면 cell사이의 간격을 설정해 줍니다

```css
#container {
    display:grid;
    row-gap: 20px;/*row의 사이를 20px로 설정한다*/
    column-gap: 20px;/*column의 사이를 20px로 설정한다*/
}
```

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbp0HK0%2FbtsJhmYGITk%2FzHfXs2DhuLe7PXsciEgza0%2Fimg.png"><br>
* gap: 20px 20px;과 row-gap:20px; column-gap:20px;는 같은 의미로 쓰입니다

## cell의 영역 지정
grid는 column과 row에 번호를 매깁니다

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7BLSo%2FbtsJgFSdPIQ%2FJkXIIpsoFLthBGkQ9gqdZ0%2Fimg.png"><br>
우리는 이 번호를 가지고 column과 row의 범위를 지정할 수 있습니다

```css
.item:nth-child(1) {
    grid-column: 1 / 3;/*column의 1번 부터 3번까지*/
    grid-row: 1 / 2;/*row의 1부터 2번까지*/
    background-color:yellow;
}
```
위코드는 class="item"에서 첫번째의 범위를 가로 1번부터 3번까지, 세로를 1번부터 2번까지 정하는 코드입니다

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcexKLb%2FbtsJhihN66B%2FCeGKRZ3XL8QhBvkwBonVV0%2Fimg.png"><br>
이렇게 첫번째 class="item"의 범위가 늘어난 모습을 보실수 있습니다

## 정렬
은 display:flex와 같습니다

약간 차이점이 있다면 grid-container에서 cell들에게 정렬을 하는 경우와

grid-cell에서 grid-item에게 정렬을 하는 경우로 나뉘는 것만 알면 될것같습니다