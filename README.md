## 📌 Company Intranet Project
4조 파이널 프로젝트 사내 인트라넷 사이트를 기획/제작한 웹 사이트입니다.   
조장 정진수, 이광준,  김동주, 손명수 가 참가하였습니다.

<br>

[결과물 바로가기](#결과물)
<br>


<a href="https://www.youtube.com/watch?v=-0LDqazFLAE">시연영상 보러가기</a>

<br>


<br>

## 📌 프로젝트 기간
* 프로젝트 기간 : 2022년 10월 26일 ~  2022년 12월 8일

![프로젝트 일정관리](https://user-images.githubusercontent.com/104358180/207742966-070b88b6-fabb-416a-8474-60b38e060329.png)



## 📌기획의도
사내 업무를 보다 편하게 이용하기 위한 사내 인트라넷



## 📌 개발환경
    Development Language :  JAVA 11 , HTML5, CSS3, JavaScript
    Framework : MyBatis 3.3.0, Spring 5.3.13
    Build Tool : Maven 
    Template Engine : thymeleaf
    Library : jQuery
    Server : Apache Tomcat 8.5
    Database : Oracle 18c
    Development Tool :  SpringBoot Tool Suite  4.11.1
    Shape management : Github 
    Open API : 다음 우편검색, FullCalender
    Design tool : Bootstrap5
    
    
## 📌 주요기능
[회원]
- 회원 가입, 로그인, 로그아웃, 회원 정보 수정

[캘린더]
- Full calendar API를 활용한 회의실 예약/조회


[전자문서 결재 기능]
- 전자문서 작성, 조회기능
- 결재선 지정, 결재기능
- 전자문서 검색기능


[게시판]
- 공지사항 게시판,자유 게시판,
- 게시글 조회/작성/수정/삭제
- 댓글 작성/수정/삭제
- 좋아요 기능
- 검색


[주소록] 
- 개인 주소록에서 그룹등록 및 개인연락처 등록,수정.
- 공용 주소록 검색 가능


[회의실 예약]
- 해당월, 해당주, 당일에 대한 회의실 예약기능
- 색깔별로 예약불가일과 가능일을 구분
- 내 예약 조회가 가능


[관리자 페이지]

- 사내 부서및 사원의 정보를 관리


[채팅]
- 사내 채팅방 페이지
- 부서별 채팅방 사용가능


## 📌 역할 분배
!(https://user-images.githubusercontent.com/104358180/209536990-13fcc3ee-754a-447e-a13d-8f12f7b15893.PNG)
!(https://user-images.githubusercontent.com/104358180/209536997-37915c67-df09-4d97-bb45-27fd2f8347d4.PNG)


## 📌 폴더 구조

<details>
<summary>Project Folder</summary>
  <div markdown="1">
  
```
🗃 Project Folder  
📁src/main/java 
├── 📁config      
├── 📁address
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁admin
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁approval
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁board
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁chat
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁emp
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁main
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
├── 📁reservation
│   ├── 📁controller
│   ├── 📁service
│   └── 📁vo
└──......

 
📁src/main/resources 
├── 📁mappers
│   ├── 📁address-mapper
│   ├── 📁admin-mapper
│   ├── 📁approval-mapper
│   ├── 📁board-mapper
│   ├── 📁chat-mapper
│   ├── 📁emp-mapper    
│   ├── 📁main-mapper  
│   └── 📁reservation-mapper
│      
├── 📁static
│   ├── 📁css
│   │    └──......  
│   ├── 📁imgs
│   │    └──......  
│   └── 📁js
│        └──...... 
│     
├── 📁template
│   ├── 📁fragment
│   ├── 📁layout
│   ├── 📁main  
│   └── 📁pages
│        ├── 📁address
│        ├── 📁admin
│        ├── 📁approval
│        ├── 📁board
│        ├── 📁chat
│        ├── 📁emp   
│        ├── 📁main 
│        └── 📁reservation
│     
└──......
```
</div>
</details>

## 📌 DB 설계

![테이블 관계도](https://user-images.githubusercontent.com/104358180/206993936-36e43b15-ba85-4c1d-88d5-917afd5912c6.PNG)


##  결과물 

### 로그인 


![로그인](https://user-images.githubusercontent.com/116548340/206611100-d1f6971a-80c1-4c00-966d-4bf5eb0a1ad6.png)

### 회원가입 
![회원가입](https://user-images.githubusercontent.com/104358180/206955610-60b90f32-a3d5-4ad1-9170-02c3b15bfa00.png)

### 메인 

![메인페이지](https://user-images.githubusercontent.com/116548340/206363392-46e11251-3e4d-473c-96e0-d507b6cc5c78.png)

### 관리자 


![관리자 페이지](https://user-images.githubusercontent.com/104358180/206954392-b00aefcb-7a62-4ec5-851f-cbeae1625806.png)

### 주소록 


![주소록 페이지](https://user-images.githubusercontent.com/116548340/206364100-c0226fb9-25c7-4c18-bf0d-e260de3d9811.png)


### 채팅 

![채팅방](https://user-images.githubusercontent.com/116548340/206594026-31b88eaa-a8c6-4ed8-b14b-5622719aa259.png)


###  전자결재 조회

![전자 결제조회](https://user-images.githubusercontent.com/116548340/206594228-f4ea5089-94ea-46e4-aca9-9dbdcb79b30f.png)



### 서류작성

![서류작성](https://user-images.githubusercontent.com/104358180/206954690-565c0f31-3024-4f20-964d-c70d96effacd.png)


### 결재문서함

![결재 문서함](https://user-images.githubusercontent.com/116548340/206597225-962c1984-9af1-4892-8383-53a535ff2d37.png)



### 사내 게시판 페이지

![사내 게시판 조회](https://user-images.githubusercontent.com/116548340/206595687-c93654c8-0276-413a-9cf0-eeba6d20544f.png)


### 게시글 상세 페이지

![상세게시글](https://user-images.githubusercontent.com/116548340/206342008-9b02219d-ff3c-41e5-9aff-1b5d77725ccd.png)

### 회의실 예약 

![회의실 예약](https://user-images.githubusercontent.com/116548340/206596000-222e9b23-16e4-480a-ba63-9b13f017ac7c.png)


### 회의실 예약 조회 

![회의실 예약 조회](https://user-images.githubusercontent.com/116548340/206596111-fd9d883b-aff2-49ef-8621-8ea34a8dc8b2.png)

<br><br>
***
<br><br>




### 특징
- MVC 패턴에 기반한 웹 어플리케이션 개발 
- Transaction 처리로 데이터의 무결성 보장
- AOP를 이용한 로그처리
- Spring Security를 이용한 페이지 접근 권한 설정
- Bcrypt를 이용한 비밀번호 암호화 처리
- DI (Dependency Injection) 패턴을 적용하여 불필요한 의존관계 해소 
- annotation 사용으로 설정 파일을 간결화
