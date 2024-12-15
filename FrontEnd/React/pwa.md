# pwa

PWA란 프로그레시브 웹 앱(Progressive Web Apps)의 줄임말로, 모바일 기기에서 네이티브 앱(Native App)과 같은 사용자 경험을 제공하는 웹 앱입니다. 이는 기존의 전통적인 웹 앱과는 달리 네이티브 앱과 유사한 기능을 제공할 수 있다는 것이 가장 큰 특징입니다

즉 React-Native가 아니더라도 브라우저에서 다운로드 받아서 앱처럼 사용하는게 가능합니다

## 파일만들기

```
npx create-react-app {프로젝트 명} --template cra-template-pwa
```

위 코드는 React와 pwa를 같이 만든 프로젝트이다.<br>

## **manifest.json**

이 파일은 PWA에서 앱 이름, 아이콘, 시작 화면 등을 정의하는 역할을 합니다.<br>
원래 json에는 주석이 지원되지 않지만 설명에 용이함을 위해 주석을 추가 했습니다

```json
{
  "short_name": "CoolApp", // 홈 화면에 표시될 간단한 이름
  "name": "CoolApp: Your Awesome PWA", // 전체 이름, 설치 및 앱 목록에 표시됨
  "icons": [
    {
      "src": "/icons/icon-192x192.png", // 192x192 크기의 아이콘 이미지 경로
      "type": "image/png", // 아이콘의 파일 타입 (PNG)
      "sizes": "192x192" // 아이콘의 크기
    },
    {
      "src": "/icons/icon-512x512.png", // 512x512 크기의 아이콘 이미지 경로
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/index.html", // 앱이 시작될 때 열릴 기본 URL
  "display": "standalone", // 앱의 표시 방식: 전체 화면으로 동작하지만 브라우저 UI는 없음
  "background_color": "#ffffff", // 앱이 로딩될 때 사용되는 배경 색상
  "theme_color": "#007bff", // 브라우저 UI에 영향을 주는 테마 색상
  "description": "A simple progressive web app example" // 앱에 대한 간단한 설명
}
```

## 다운로드 방법

사용자가 pwa를 다운로드 받는 방법은 위에서 설명했듯이 브라우저에서 사용자가 직접 다운로드하는데 문제는 로컬 호스트에서는 작동하지 않는다<br>
필히 베포를 해야되는데 필자인 나는 Vercel을 선호해서 Vercel에서 배포했다
