## 배포주소
------
https://reduxtodolist-sigma.vercel.app/

##폴더구조
```
src/
│
├─── Appjs   
├─── index.js  
│
├─── redux/  
│     ├─── config/
│     │      │
│     │      └── configStore.js //리덕스 store파일
│     │
│     └─── modules/
│           │
│           └── todos.js // 리덕스 전역스테이트, 리듀서저장소
│
└─── components/
        ├─── pages/
        │      └── Main.jsx //컴포넌트들을 조립한 메인페이지
        ├─── GlobalStyled/
        │      └── GlobalStyled.jsx //전역 공통 css 
        ├─── Form/
        │      └── InputForm.jsx // 투두리스트를 추가할수있는 인풋박스 컴포넌트
        ├─── List/
        │      └── List.jsx // 추가된 투두리스트들을 저장소에서 데이터를받아 출력해주는곳
        └─── Detail/
               └── Detail.jsx // 투두리스트 각각의 상세페이지

```

##구현된 기능

투두리스트 추가하기, 
투두리스트 삭제하기,
투두리스트 완료 / 취소 하기
투두리스트 상세페이지 이동하기

## 사용된 훅과 라이브러리
```
useState
useEffect
useParams
useDispatch
useSelector
BrowserRouter
styled-components
```
전역 스테이트관리 라이브러리인 redux를 사용해본 투두리스트입니다.
useSelector를 통해 스테이트값을 불러오며,
스테이트 변동사항은 useDispatch를 통해서 리듀서를 이용해 스테이트값을 변경하였습니다.
useParams 이용해 선택한 투두리스트의 고유 id값을 이용해 데이터를 불러와 상세페이지를 구현하였습니다.
BrowserRouter (react-router-dom)을 사용하여 메인페이지와 상세페이지의 이동을 구현하였습니다.
모든 CSS 는 styled-components 만을 사용하여 css 파일없이 만들었습니다.





