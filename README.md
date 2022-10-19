# chart-and-board

# 프로젝트 방향

- 로그인 되어있다고 간주되는 사용자는 해당 사이트의 관리자이다 (admin)
- 문의 게시판
- DB에서 데이터를 불러오고 저장하는것이아닌 sessionStorage에 저장 및 업데이트 관리

# 1. 프로젝트 개요

- 진행기간: 10/17 ~ 10/20
- 과제주관: 위닝아이
- 참여인원: 김슬기, 소재현, 최은비 (프론트엔드 3명)

DEMO : [DEMO](https://joyful-valkyrie-18838e.netlify.app)
<br/>
<br/>

# 2. 기술 스택

- JavaScript
- React.js
- styled-components
  <br/>
  <br/>

  # 3. 프로젝트 설치 및 실행 방법

```
$ npm install
$ npm start
```

<br/>

# 4. 역할 분담 및 구현 기능

> 메인 [index.html]: 김슬기<br>

- 그래프
- img → 현재 그래프의 내용을 이미지로 저장하기
- email → 현재 그래프의 내용을 보낼 수 있는 기능

---

> 게시판 [board.html]: 소재현<br>

- CRUD 기능 중 CR
- Create(생성)
  - 제목
  - 내용
  - 작성시간 (날짜 기준)
- Read(읽기)
- 세션스토리지에 데이터를 저장하여 사용
- 페이지네이션

---

> 게시판 [ board_detail.html]: 최은비 <br>

- CRUD 기능 중 UD
  - Update
    - 제목
    - 내용
    - 작성시간 (날짜 기준)
  - Delete

<br/>
<br/>

# 팀원소개

### ✅ 프론트엔드 최은비

- 깃허브 https://github.com/ebchoi
- 블로그

### ✅ 프론트엔드 김슬기

- 깃허브 https://github.com/sseul22
- 블로그 https://velog.io/@sseul22

### ✅ 프론트엔드 소재현

- 깃허브 https://github.com/socow
- 블로그 https://velog.io/@so960225
