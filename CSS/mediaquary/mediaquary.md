# 미디어 쿼리

미디어 쿼리는 CSS3에 추가된 기능으로 주로 반응형 웹에 쓰입니다

 

css의 if문으로 이해하면 쉽습니다
```css
@media (조건){
    /*조건이 참일때*/
}
```
## 1. 너비와 높이
* width / height: 뷰포트(Viewport)의 너비 또는 높이를 기준으로 조건을 설정합니다.<br>
* min-width / min-height: 최소 너비 또는 높이를 설정합니다.<br>
* max-width / max-height: 최대 너비 또는 높이를 설정합니다.<br>
## 2. 기기화면
* device-width / device-height: 기기의 화면 전체의 너비나 높이를 기준으로 조건을 설정합니다.<br>

## 3. 가로세로
orientation: 화면의 방향을 기준으로 조건을 설정합니다.<br>
* portrait - 세로 방향일 때 스타일 적용<br>
* landscape - 가로 방향일 때 스타일 적용<br>
## 4. 화면 비율
* aspect-ratio: 화면의 가로 대 세로 비율을 기준으로 조건을 설정합니다.<br>
* min-aspect-ratio: 16/9 - 화면 비율이 16:9 이상일 때 스타일 적용<br>
* max-aspect-ratio: 4/3 - 화면 비율이 4:3 이하일 때 스타일 적용<br>
## 5. 색상비트
* color: 화면이 표현할 수 있는 색상의 비트를 기준으로 조건을 설정합니다<br>
* color-index: 화면이 표현할 수 있는 색상의 수를 기준으로 조건을 설정합니다.<br>
## 6. 기기의 특징
* hover: 사용자가 커서를 기기에 올렸을 때 반응이 있는지 여부를 설정합니다.<br>
    * @media (hover: hover) - 커서를 올렸을 때 반응이 있을 때 스타일 적용 (예: 데스크톱)<br>
    * @media (hover: none) - 커서를 올렸을 때 반응이 없을 때 스타일 적용 (예: 터치스크린)<br>
* pointer: 포인터 장치의 정확도를 기준으로 조건을 설정합니다.<br>
    * @media (pointer: coarse) - 포인터가 비교적 정밀하지 않을 때 스타일 적용 (예: 터치스크린)<br>
    * @media (pointer: fine) - 포인터가 정밀할 때 스타일 적용 (예: 마우스)<br>
* display-mode: 웹 페이지의 표시 모드를 기준으로 조건을 설정합니다.
    * @media (display-mode: fullscreen) - 전체 화면 모드에서 스타일 적용
## 7. 논리연산자
* and<br>
@media (조건) and (조건) - 둘다 참일때
* or<br>
@media (조건), (조건) - or은 특이하게 or그대로 작성하거나 쉼표로 대체할수 있다. or의 뜻대로 둘중 하나라도 참 일때
* not<br>
@media not (조건) - 말그대로 조건이 거짓일때 실행 된다