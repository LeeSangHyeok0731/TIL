# react-markdown

리엑트 마크다운은 react에서 마크다운 문법을 렌더링 할 수 있게 해주는 React 라이브러리 입니다

## 사용방법

`<ReactMarkdown>`으로 text를 감싸주면 된다

```jsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Markdown 입력창 */}
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "50%",
          height: "400px",
        }}
        placeholder="Enter your Markdown here..."
      />

      {/* Markdown 렌더링 */}
      <div
        style={{
          width: "50%",
          height: "400px",
          background: "#f9f9f9",
        }}
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
```

그런데 이상한 라이브러리가 하나 더 껴있다

## rehype-raw

원래 React Markdown은 `<br>`이나 `<cetner>`, `<li>`등을 인식하지 못한다.

그 이유는 기본적으로

HTML을 안전하게 렌더링 하기 위해 HTML 스타일 태그를 무시하거나 비활성화하도록 설정되어 있다고 한다

그래서 위에 말했던 rehype-raw가 필요하다

```jsx
 rehypePlugins={[rehypeRaw]}
```

이걸 import해온 ReactMarkdown에 넣으면 된다
