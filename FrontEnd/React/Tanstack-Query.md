# Tanstack-Query

이번에 공부한 기술은 Tanstack-Query이다

원래 React에 최적화된 fetching 라이브러리였지만

**Vue, Solid, Svelte 등** 다양한 프레임워크까지 기능이 확장되어 **React-Query**라는 이름대신  
**tanstack**이라는 이름으로 다른 라이브러리와 함께 묶였다

---

### **사용방법**

```
//npm
npm install @tanstack

//yarn
yarn add @tanstack/react-query

//pnpm
pnpm add @tanstack/react-query
```

설치 후 최상위 컴포넌트를 provider로 감싼다

```
 <QueryClientProvider client={queryClient}>
       <App />
 </QueryClientProvider>
```

내가 이번에 공부하고 사용한 기능은 `useQuery와 use-mutation이다`

## useQuery

`useQuery`는 서버에서 데이터를 fetch 하는 데 사용된다

```
import { useQuery } from "@tanstack/react-query";

export default function useGetApi() {
  const fetchData = async () => {
    const response = await fetch("url");

    return response.json();
  };

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 0.5,
    gcTime: 1000 * 60 * 10,
  });

  return { data, isLoading, error, refetch };
}
```

1.  **queryKey**: 캐싱을 위한 키
2.  **queryFn**: 데이터를 가져오는 함수
3.  i**sLoading**: 로딩 여부
4.  **error**: 오류 발생 시 에러 객체
5.  **refetch**: 데이터를 다시 불러오는 함수

staleTime과 gcTime은 추후에 설명하겠다

#### **queryKey**

queryKey는 불러온 데이터를 캐싱할 때 필요한 key값이다

서버에서 불러온 데이터를 구분할 때 사용된다

queryKey가 다르면 새로운 데이터로 인식하고 추후설명한 stale관리에도 사용된다

#### **queryFn**

데이터를 불러오는 비동기 함수를 호출한다

비동기 함수는 fetch, axios상관없지만 꼭 async를 사용해야 한다

#### **isLoading**

말 그대로 로딩 여부를 판단한다

api를 가져오는 중이면 true,

가져오는 중이 아니면 false로 표시한다

```
if(isLoading) return <p>로딩중...</p>
```

#### **error**

불러오는 과정 중에 네트워크문제나 서버응답실패일 경우에

error객체에 저장한다

```
if(error) return <p>서버연결 실패</p>
```

#### **refetch**

데이터를 새로 불러오는 함수다

주로 사용자가 임의로 불러올 수 있게 된다(이벤트등)

### **staleTime, gcTime(cacheTime)**

staleTime은 상태가 stale 한 지 정하는 역할을 수행한다

staleTime을 1분으로 설정하고 \['data'\] 데이터를 불러오면

\['data'\]를 key로 가지고 있는 정보들은 1분 동안은 신선한(unstale) 상태이다

1분동안 서버에 다시 요청을 하지 않고 캐시에 저장된 데이터를 사용한다

1분이 지나면 해당 key를 가지고 있는 데이터는 stale 한 상태가 다시 서버에 요청을 보낼 수 있다

gcTime은 사용되지 않는(stale) 데이터가 캐시에서 삭제되기까지의 시간을 정한다

staleTime을 위와 똑같이 설정하고 gcTime을 10분으로 설정하면

1분 뒤 데이터는 stale해지지만 캐시에는 아직 남아있다

그리고 9분이 지나 gcTime이 만족되었을 때 stale 한 데이터는 캐시에서 삭제된다

위에 두 작업을 통해 데이터를 최적화할 수 있다\]

### **use-mutation**

useMutation은 데이터를 수정할 때 사용한다

```
const queryClient = useQueryClient();

const fetchData = async ({
    title,
    body,
    userId,
  }: {
    title: string;
    body: string;
    userId: number;
  }) => {
    const response = await fetch("url", {
      method: "POST",
      body: JSON.stringify({ title, body, userId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return response.json();
  };

const mutation = useMutation({
	mutationFn: fetchData,
	onSuccess: (data: { title: string; body: string; userId: number }) => {
  	  console.log("성공:", data);
      queryClient.invalidateQueries(["myData"]);
    },
    onError: (error) => {
      console.error("오류:", error);
    },
});

return (
	<button
          onClick={() =>
            mutation.mutate({
              title: Title,
              body: Body,
              userId: UserId,
            })
          }
        >use-mutation</button>
)
```

1.  **mutationFn**: 데이터를 변경하는 함수
2.  **mutate**: 변경 요청 실행
3.  **onSuccess**: 성공 시 실행되는 process
4.  **onError**: 에러발생 시 실행되는 process
5.  **queryClient.invalidateQueries(\["key값"\])**: 데이터가 변경되었을 때 **자동으로 다시 가져오도록** 설정

## **결론**

우선 배우면서 굉장히 즐거웠다

api통신할 때는 fetch, axios를 사용했는데

앞으로는 tanstack-query를 사용해서 조금 더 효율적으로 코드를 작성하는 방법을 알게 되어

정말 좋고 재미있었다
