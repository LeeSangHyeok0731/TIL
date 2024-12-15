# scss

scss전처리기는 sass의 확장 문법입니다

## 특징

1. 변수 설정 가능

```scss
$primary-color: #3498db;
$padding: 16px;

button {
  background-color: $primary-color;
  padding: $padding;
}
```

반복적으로 사용되는 값(예: 색상, 크기 등)을 변수로 저장해 재사용할 수 있습니다.

2. 중첩

```scss
nav {
  ul {
    margin: 0;
    li {
      display: inline-block;
      a {
        text-decoration: none;
      }
    }
  }
}
```

HTML 구조에 맞게 스타일을 계층적으로 작성할 수 있어 가독성이 향상됩니다.

3. 믹스인(Mixins)

```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include flex-center;
  height: 100px;
  width: 100px;
}
```

반복되는 스타일을 함수처럼 정의해 재사용할 수 있습니다.

4. 연산

```scss
$base-font-size: 16px;

body {
  font-size: $base-font-size;
}

h1 {
  font-size: $base-font-size * 2;
}
```

SCSS는 CSS 값에 대해 수학적 연산을 지원합니다.

5. 함수(Functions)

```scss
@function calculate-rem($size-px) {
  $base-size: 16px;
  @return $size-px / $base-size * 1rem;
}

p {
  font-size: calculate-rem(24px);
}
```

사용자 정의 함수로 복잡한 로직을 처리하거나 기본 제공 함수로 작업을 단순화할 수 있습니다.
