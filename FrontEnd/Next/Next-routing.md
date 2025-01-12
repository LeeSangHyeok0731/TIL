# Next.js에서의 라우팅

Next.js에서의 라우팅은 파일의 구조와 이름으로 이루어지는 독특한 방식을 사용한다. Next.js는 **파일 기반 라우팅(File-based Routing)** 시스템을 도입하여, 개발자가 디렉터리와 파일을 생성하는 것만으로도 라우트를 쉽게 정의할 수 있도록 한다.

## Pages 디렉토리 기반 라우팅

`pages` 폴더 안에 있는 파일이 자동으로 라우트로 매핑된다.

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/post.js` → `/blog/post`

## 동적 라우팅(Dynamic Routing)

대괄호(`[]`)를 사용하여 동적인 URL을 처리할 수 있다.

`pages/post/[id].js` → `/post/1`, `/post/2`

```javascript
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post ID: {id}</p>;
};

export default Post;
```

## 중첩 라우팅(Nested Routing)

폴더를 이용해 라우트를 계층적으로 구성할 수 있다.

```
pages/blog/index.js → /blog
pages/blog/[slug].js → /blog/my-post
```

## App Router (app 디렉토리 기반 라우팅)

Next.js 13부터 도입된 새로운 라우팅 방식으로, app 디렉토리를 활용해 더 유연하고 강력한 라우팅이 가능하다.

파일 대신 폴더와 page.js 파일을 사용한다.
서버 컴포넌트와 클라이언트 컴포넌트를 구분해서 사용할 수 있다.
레이아웃(layout.js), 로딩(loading.js), 에러(error.js) 등을 활용해 페이지 상태를 관리한다.

```bash
app/
 ├── layout.js      → 모든 페이지에 적용될 레이아웃
 ├── page.js        → 루트 페이지(/)
 ├── about/
 │    └── page.js   → /about
 └── blog/
      ├── layout.js → /blog 전용 레이아웃
      └── [id]/
           └── page.js → /blog/1, /blog/2
```
