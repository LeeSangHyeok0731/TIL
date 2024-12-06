# Angular.js

AngularJS는 Google에서 개발한 오픈소스 프런트엔드 JavaScript 프레임워크로, 동적인 웹 애플리케이션을 쉽게 구축할 수 있도록 설계되었습니다. AngularJS는 HTML을 확장하여 양방향 데이터 바인딩, 의존성 주입, 템플릿 시스템 등을 제공하며, 개발자들이 최소한의 코드로 복잡한 UI와 기능을 구현할 수 있도록 돕습니다.

특징으로 AngularJS는 2021년 12월 이후 공식 지원이 종료되었습니다. 최신 Angular(2 이상)는 TypeScript 기반으로 새롭게 개발되었다고 합니다

## 사용방법

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div ng-controller="myCtrl">{{ greeting }}</div>

    <script>
      const app = angular.module("myApp", []);
      app.controller("myCtrl", function ($scope) {
        $scope.greeting = "Hello, AngularJS!";
      });
    </script>
  </body>
</html>
```

Html파일에 간단하게 추가하여 사용할 수 있다

## 특징

- 장점

1. 양방향 데이터 바인딩<br>데이터와 UI가 자동으로 동기화되어 개발자가 DOM 조작을 직접 하지 않아도 됩니다.
2. 디렉티브<br>HTML을 확장하여 재사용 가능한 UI 구성 요소를 쉽게 만들 수 있습니다.
3. 의존성 주입(DI)<br>모듈화된 코드 작성과 테스트 용이성을 제공합니다.
4. SPA 지원<br>싱글 페이지 애플리케이션(SPA) 개발에 특화되어 있어, 페이지 리로드 없이 사용자 경험을 제공할 수 있습니다.
5. 풍부한 커뮤니티와 문서<br>초기에 많은 개발자들에게 사랑받아 관련 자료와 플러그인이 풍부합니다.

- 단점

1. 성능 문제<br>
   데이터가 많아지거나 DOM이 복잡해지면 성능이 저하될 수 있습니다.
2. 복잡성 증가<br>
   대규모 프로젝트에서 디렉티브와 스코프 관리가 복잡해질 수 있습니다.
3. 레거시 상태<br>
   공식 지원이 종료되었기 때문에 보안 및 최신 기술과의 호환성 문제가 발생할 수 있습니다.
4. 학습 곡선<br>
   AngularJS의 독특한 문법과 개념(MVW, $scope 등)은 초보자가 익히기 어렵습니다.
5. 최신 Angular와의 차이점<br>
   Angular(2 이상)와는 완전히 다른 프레임워크이므로 최신 기술을 사용할 계획이라면 AngularJS 대신 최신 Angular를 배우는 것이 좋습니다.
