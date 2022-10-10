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

