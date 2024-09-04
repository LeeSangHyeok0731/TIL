# form

폼은 우리가 서버로 정보를 보낼때 사용하는 하나의 방법중 하나이다
***

## ```<form>```
폼은 내가 보낼정보들을 감싸는 중요한 역할을 하는 테그이다
```html
<form>
    <!--우리가 입력할 정보들-->
</form>
```
 ```action="링크"```를 넣어서 어디로 보낼지 정할수 있다

## 정보입력 방법
우리가 form으로 묶어봤자 보낼정보가 없으면 소용이 없다<br>
우리는 직접 정보를 입력하고 보내야한다

### ```<select></select>```
우리가 선택을 할 수 있는 테그이다

<img src="img/스크린샷 2024-09-04 230306.png">

### ```<option></option>```

```<select>```의 옵션을 만들어 준다

```html
<select>
    <option>한국어</option>
    <option>English</option>
    <option>中文(简体)</option>
    <option>中文(繁體)</option>
</select>
```

### ```<label></label>```
우리가 정보를 보낼때 서버가 알아먹을수 있게 알려주는 역할을 한다


## **input 타입**
우리가 직접 정보를 적을때 작성하는 코드이다

```html
<input type="타입">
```
위 코드가 기본으로 여러 속성이 추가된다

### **text**
```html
<input type="text">
```
<input type="text"><br>
이렇게 적을수 있는 칸을 만든다

### **textarea**
```html
<input type="textarea">
```
<input type="textarea"><br>
text와 비슷하지만 조금더 크고 크기를 클라이언트상에서 조절할수 있다

### **password**
```html
<input type="password">
```
<input type="password"><br>
이렇게 적으면 *표시로 가려진다 비밀번호 적을때 유용

### **email**
```html
<input type="email">
```
<input type="email"><br>
이메일 형식이 올바른지 검사하는 기능이 있다

### **number**
```html
<input type="number">
```
<input type="number"><br>
숫자만 입력받을 수 있다