# node-app-init
node-app-init

npm test -> test모드로 시작
npm start -> pm2 모드로 시작

초기화 파일 목록
- github
- package.json
db 사용시 database 만든후 아래 파일 수정
- config/config.js
- .env

디렉토리 구조 설명

src 전체파일 목록
-api 
route,middleware,api 폴더
-config
db 정보 저장 폴더
-loaders 
app.js에서 처음에 로딩할 파일
-model
db 테이블 정보
-services
비즈니스 로직 파일
-public
index.css 를 포함한 이미지들
-views 
html 파일