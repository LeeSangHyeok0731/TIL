# Tailwind

Tailwind CSS는 유틸리티 퍼스트(Utility-First) 스타일링 프레임워크이다<br>

## 특징

1. 빠른 개발 속도: 클래스 조합만으로 스타일을 적용할 수 있어서 CSS 작성 시간이 줄어듦<br>
2. 반응형 디자인: sm:, md:, lg: 같은 접두사를 붙여서 쉽게 반응형 스타일을 적용할 수 있음<br>
3. 다크 모드 지원: dark: 접두사로 간단하게 다크 모드를 설정할 수 있음<br>
4. 유지보수 편리: 별도의 CSS 파일을 관리할 필요 없이 JSX 안에서 스타일을 적용<br>

## 설치

npm

```
npm install -D tailwindcss postcss autoprefixer
```

pnpm

```
pnpm add -D tailwindcss postcss autoprefixer
```

yarn

```
yarn add -D tailwindcss postcss autoprefixer
```

설치후 설정파일 생성
npx tailwindcss init -p

## 사용

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 예시

```tsx
export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
    </div>
  );
}
```

원래 TIL에 사족을 붙이는 편이 아닌데<br>
Tailwind의 스타일 적용방식은 굉장히 특이하다고 볼 수 있다<br>
원래 css-in-js같은 경우에도 기본적인 css의 형태를 벗어나지 않은데, 여기는 그냥 자체적인 방법을 사용한다<br>
[Tailwind 공식 문서](https://tailwindcss.com/docs/installation/framework-guides)를 보고 익혀야한다
