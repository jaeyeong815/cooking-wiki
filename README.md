# 👩🏻‍🍳 요리위키 (Cooking-Wiki)

[1. 🗒️ 프로젝트 설명](#description) <br>
[2. 🌎 프로젝트 소개](#about-project) <br>
[3. 🔫 트러블 슈팅](#trouble-shotting) : [서버를 분리한 이유](#서버를구축하게된이유) / [배포 트러블 슈팅](#서버배포) / [TS 관련 트러블 슈팅](#typescript) <br>
[4. 🖥️ 구현 화면](#results)

## Description

AI가 알려주는 추천 요리와 요리 레시피 🍳 <br>
냉장고에 있는 요리 재료를 입력하면 입력한 재료들로 만들 수 있는 요리를 **chatGPT**가 추천해줍니다. <br>
추천 받은 요리를 선택하면 요리 레시피까지 알려줍니다.

> 2023.02.21 ~ 2023.03.03 (10일) <br>
> 개인 프로젝트

### 배포 링크

[요리위키 바로가기](https://cooking-wiki.vercel.app/)

```
현재 ssl 인증서 문제로 서버 배포를 중지해두었으며,
Mock 데이터를 연결한 클라이언트 배포만 유지해두었습니다.
테스트는 정상적으로 가능합니다 =)
(추천 요리목록, 요리 레시피가 고정되어있는 점 양해 부탁드립니다.)
```

## About Project

### 사용한 기술

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white">
<img src="https://img.shields.io/badge/Redux&nbsp;Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=OpenAI&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind&nbsp;CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=black">

### 구현한 기능

- 입력받은 재료로 만들 수 있는 요리 추천하기 / 사용자가 고른 요리 레시피 안내하기
  - **redux-toolkit**을 사용하여 사용자가 입력한 재료, 추천 요리 리스트, 사용자가 선택한 요리, 요리 레시피를 저장 및 관리하였습니다.<br>
  - openai에서 **응답받은 데이터를 가공**하여 데이터가 원하는 형식으로 나타나도록 하였습니다.
  - **중복 사용되는 함수를 분리**하여 필요한 곳에서 재사용하기 쉽도록 하였습니다.
- AWS EC2로 server 배포, Vercel로 client 배포
  - openai에서 응답받기 위해서는 Authorization header에 API Key를 보내야 하는데,<br>
    배포를 할 때마다 key가 노출되어 자동으로 변경돼 통신이 계속 실패하는 문제가 발생하여<br>
    서버를 구축하여 **서버에서 openai와 통신**하도록 하였습니다.

## Trouble Shotting

### 서버를 구축하게 된 이유

#### 시행착오 1. Vercel로 배포하기 - 504 Error

클라이언트 코드만 작성했기 때문에 Vercel로 간단하게 배포하고자 하였고, 생각처럼 쉽게 페이지가 배포되었다. <br>
하지만 요리를 추천해주는 단계까진 실행이 되지만, 레시피를 검색하는 단계에서는 아래와 같은 오류를 반환하며 중단되었다.

```tsx
{code: '504', message: 'An error occurred with your deployment'}
```

관련 오류를 찾다가 [next.js 깃헙](https://github.com/vercel/next.js/discussions/31966)에서 동일한 문제를 다룬 이슈를 확인했다.<br>
응답 시간이 너무 오래걸려서 [실행 시간 초과](https://vercel.com/docs/concepts/functions/serverless-functions#execution-timeout)로 인해 뱉은 오류라고 한다.<br>
[문서](https://vercel.com/docs/concepts/limits/overview#serverless-function-execution-timeout)를 확인해보니 기본 설정되어있는 시간은 10초로, <br>
**10초 이상 응답을 받지 못하면 504에러를 반환**한다고 한다.

만약 시간을 늘리고싶다면 _Team 유료 결제_ 를 해야하는 상황이었다.


#### 시행착오 2. gh-pages로 배포하기 - API Key Rotate Error

개인 프로젝트에 팀 요금제를 결제하기에는 조금 아닌 것 같아 gh-pages로 배포해보기로 했다.<br>
openAI와 통신하기 위해서는 `header Authorization`에 고유 API Key를 보내야 하는데,<br>
배포를 할 때마다 이 **key가 노출되어 자동으로 변경**돼 통신이 계속 실패하는 문제가 발생했다.<br>

api 주소로 통신하지 않고 `new Configuration()`으로 [configuration을 생성](https://github.com/openai/openai-node#usage)하여 opeinAI와 통신할 수 있지만,<br>
로컬에선 문제 없이 실행되나 배포하면 `내 레포 주소/api/food`로 요청하게 되어서 [405 에러가 발생](https://learn.microsoft.com/ko-kr/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications#what-causes-http-405-errors)한다.


#### 시행착오 3. 위 문제들을 해결하기 위해 고민했던 방법

1. `getServerSideProps`
   내가 하려는 통신은 사용자의 입력을 받고 그 결과를 api 요청하여 답을 받아내려는 것이기 때문에,<br>
   렌더링 전 미리 서버와 통신하여 props를 받아 전달해주는 역할인 이 함수를 사용하는 것은 맞지 않다.

2. 서버에서 openAI에 api 요청을 하여 응답받은 결과를 클라이언트에 전달 -> 이거로 결정


### 서버배포

예전 프로젝트를 하면서 `node.js + express.js`를 사용했던 경험이 있어서 `node.js + express.js`로 서버를 구축하였다.<br>
배포는 **AWS EC2**로 진행하였으며 배포하면서 새로 알게된 점은 다음과 같다.

1. 배포 후 퍼블릭ip로 접속이 안되는 문제

   <img width="800" alt="222" src="https://user-images.githubusercontent.com/85178602/226832641-b4cb2c76-61a5-4ee3-aaad-035bf79cd1c7.png"> <br>
   인바운드 규칙을 설정해야 설정한 포트에서만 접속이 가능하기 때문에 추가하여 해결하였다.

2. 주소 뒤에 3000번 포트를 붙여야 접속되는 문제

   <img width="600" alt="222" src="https://user-images.githubusercontent.com/85178602/226832727-f5a3e07f-5bfc-42f1-bd4d-691910a9e385.png">

   AWS EC2 인스턴스에서 Express.js 앱을 실행하는 경우, `기본적으로 포트 3000이 사용`되어 Express.js 앱에 접근하려면 <br>
   `IP 주소 뒤에 ":3000"을 추가`해야 한다고 한다. (내 설정도 port번호가 3000으로 고정되어있었다.)

   [RFC (Request for Comments) 문서](https://www.rfc-editor.org/rfc/rfc2616)를 참고해보니, <br>
   **포트80은 HTTP 트래픽을 위한 표준 포트**여서 브라우저에서 포트 번호를 지정하지 않아도 앱에 접근할 수 있기 때문에 <br>
   포트를 80으로 변경하면 된다고 한다.

   <img width="500" alt="222" src="https://user-images.githubusercontent.com/85178602/226833024-5e17f66d-1f9d-4fb2-a81e-be875c54ca72.png"><br>
   (위 이미지는 RFC 문서 중 일부)

   ssh에 접속하여 포트를 바꿨는데 `listen EACCES: permission denied 0.0.0.0:80`오류가 발생했다. <br>
   RFC 문서에서 봤듯이 HTTP 프로토콜을 위한 표준 포트라는 것이 원인이다.

   그래서 sudo 명령어를 사용해서 실행하니 주소 뒤에 포트 번호를 쓰지 않아도 브라우저가 잘 실행되었다. <br>
   명령어: `sudo node index.js` <br>

   <img width="500" alt="222" src="https://user-images.githubusercontent.com/85178602/226834101-dca3a751-f879-4860-8b1a-63442e3050b4.png"><br>

### TypeScript

#### 1. 입력받은 요리 재료를 상태에 추가하기 위한 과정

`useState()`로 입력받은 재료들의 배열인 `ingredientList`를 상태 관리 해주었고 interface를 생성하여 type으로 넘겨주고 있었다.

```tsx
interface Ingredients {
  ingredients: string[];
}

const Home = () => {
	const [ingredientList, setIngredientList] = useState<Ingredients>();
  const [ingredient, setIngredient] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value);
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setIngredientList(ingredientList?.concat(ingredient))
    setIngredient('')
  };
...
}
```

작동해보면 다음과 같은 오류가 발생하였다.

<img width="440" alt="111" src="https://user-images.githubusercontent.com/85178602/226830872-65f4adf9-fba2-4174-8deb-aae1b0e67fd7.png">

지난 프로젝트에서 **performance time 테스트**를 통해 Spread 문법을 이용하는 것보다 <br>
**concat을 사용하는 것이 속도면에서 좋다는 것**을 알게되어 이번에도 사용했는데,이와 같은 에러가 발생했다.

고민끝에 정의한 interface에 concat 메서드를 추가하는 방법을 적용해야겠다는 생각을 하고 적용 방법을 찾아보려는 찰나에,<br>
_‘굳이 type을 interface로 정의해야할까?’_ 라는 생각이 스쳐지나갔다.<br>
그래서 다음과 같이 type 지정을 간단하게 해보았고, 정상 작동하였다.

```tsx
const Home = () => {
	const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value);
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setIngredientList(ingredientList?.concat(ingredient))
    setIngredient('')
  };
...
}
```

예전에 원티드 타입스크립트 세션을 들으면서 최대한 **type이 자동 추론**을 하도록 하고, <br>
**간단하게 타입을 구성**해보라고 했던 말이 떠올랐고, 이번 프로젝트를 하면서 이를 실제로 경험할 수 있었다. <br>
_불필요하게 interface를 만드는 것_ 보단 **useState의 제네릭에 타입을 넘겨주며** 발생하지 않아도 될 에러를 해결하였다.


#### 2. ReturnType

Redux-toolkit을 사용하면서 알게된 타입 유틸리티가 있는데, 바로 `**ReturnType**`이다. <br>
`**ReturnType**`은 함수 타입에서 반환하는 타입을 추출하는 데 사용된다.

```tsx
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>; // number
```

```tsx
const person = {
  name: 'Alice',
  age: 30,
};

function getPerson() {
  return person;
}

type PersonType = ReturnType<typeof getPerson>; // { name: string; age: number; }
```

**함수 반환 타입을 추출**하여 더 **안전한 코드 작성**을 도와준다

## Results

https://user-images.githubusercontent.com/85178602/226836153-b4775c49-45bd-4918-8dee-76cefe12f52c.mov
