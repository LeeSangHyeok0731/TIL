# Next Js

Next.js는 React기반의 웹 프레임 워크입니다<br>

## 특징

1. 서버 사이드 렌더링(SSR)

Next.js는 초기 요청 시 서버에서 HTML을 생성하여 클라이언트에 전달합니다.
검색 엔진 최적화(SEO)에 유리하며, 초기 로딩 속도가 빠릅니다.

2. 정적 사이트 생성(SSG)

빌드 시 HTML을 생성하고, 이후에는 정적 파일로 제공됩니다.
콘텐츠가 자주 변경되지 않는 페이지에 적합하며, 성능이 뛰어납니다.

3. 클라이언트 사이드 렌더링(CSR)

페이지 일부를 CSR로 구현할 수 있어, 유저 인터페이스의 동적 변경이 가능합니다.

4. 파일 기반 라우팅

/pages 디렉토리의 파일 이름이 URL 경로와 매핑됩니다.
동적 라우팅(Dynamic Routing)도 지원하여 유연한 URL 구조를 만들 수 있습니다.<br>
개인적으로 가장 흥미로운 기능이고 가장 사용해 보고 싶다다

5. API Routes

/pages/api 디렉토리에서 서버리스 함수(Serverless Functions)를 만들어 백엔드 API를 쉽게 구현할 수 있습니다.

6. 이미지 최적화(Image Optimization)

next/image 컴포넌트를 사용해 자동으로 이미지 크기 조정, Lazy Loading, WebP 변환 등을 처리합니다.

7. CSS 및 스타일링

CSS 모듈, styled-components, Emotion 등 다양한 스타일링 방식을 지원합니다.

8. 빠른 빌드 및 업데이트

Incremental Static Regeneration(ISR)을 통해, 정적으로 생성된 페이지를 실시간으로 업데이트할 수 있습니다.

9. TypeScript 및 ESLint 지원

기본적으로 TypeScript와 ESLint를 지원하여 개발 생산성을 높이고 코드 품질을 유지할 수 있습니다.

10. 플러그인 및 확장성

다양한 플러그인과 커스텀 설정을 통해 프로젝트를 쉽게 확장할 수 있습니다.

## 사용방법

```json
npx create-next-app@latest Next-App
```
