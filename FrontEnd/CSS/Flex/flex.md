# Flex
플렉스는 보통 정렬할때 사용하는 css속성이다

```css
display:flex;
```

## **정렬**
사실상 flex는 정렬을 하려고 사용하는 속성이다<br>

## justify-content
가로의 상태를 정할수 있는 속성이다
```css
justify-content: flex-start;
/* justify-content: flex-end; */
/* justify-content: center; */
/* justify-content: space-between; */
/* justify-content: space-around; */
/* justify-content: space-evenly; */
```
### **flex-start**<br>
justify-content의 기본값

### **flex-end**<br>
flex-start의 반대의 개념으로 끝으로 전부 모이게 한다

### **center**<br>
가장 많이 사용하는 걸로 가로의 중앙으로 정렬한다

### **space-between**<br>
안에 있는 요소들의 사이를 일정한 간격으로 띄워주는 역할을 한다

### **space-around**<br>
안에 있는 요소들의 좌우로 일정한 간격으로 띠워주는 역할을 한다

### **space-evenly**<br>
안에 있는 요소들을 전부 일정한 간격으로 띄운다<br>
space-between과 다른 점은 양끝에 있는 간격도 같아진다는 특징이 있다

## **align-items**
세로의 상태를 정하는 속성이다
```css
align-items: stretch;
/* align-items: flex-start; */
/* align-items: flex-end; */
/* align-items: center; */
```
### **stretch**
align-items의 기본값

### **flex-start**
컨테이너안의 요소들을 시작지점으로 졍렬한다

### **flex-end**
컨테이너안의 요소들을 끝지점으로 정렬한다

### **center**
justify-content와 비슷하게 세로로 요소를 정렬하는 속성이다<br>
보통 가장 많이 사용된다

## **응용**
justify-content:center와 align-items:center를 같이 쓰면 정가운데로 정렬 가능하다

# 그외

## **direction**
```css
flex-direction: row;
/* flex-direction: column; */
/* flex-direction: row-reverse; */
/* flex-direction: column-reverse; */
```
정렬의 방향을 설정한다<br>
설정에 따라 justify-content와 align-items의 기준이 달라지니 유의 해야한다

### **row**
flex-direction의 기본값

### **column**
방향을 세로소 뒤집어 버린다

### **row-reverse**
오른쪽 위부터 시작

### **column-reverse**
아래부터 시작


## **wrap**
```css
flex-wrap: nowrap;
/* flex-wrap: wrap; */
/* flex-wrap: wrap-reverse; */
```
만약 요소를 담고 있는 컨테이너의 공간을 요소들이 많아서 다 안담길때 어떻게 할지 정하는 역할을 한다

### **nowrap**
flex-wrap의 기본값<br>
넘치면 그냥 삐져나온체로 있다

### **wrap**
공간을 벗어나는 요소를 한칸 밑으로 내려서 표현해준다

### **wrap-reverse**
마찬가지로 공간을 벗어나는 요소들을 한칸 위로 올려서 표현한다

***

대충 이정도만 알아도 웹퍼블리싱하는데에는 문제가 없다