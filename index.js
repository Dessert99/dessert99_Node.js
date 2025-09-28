require('dotenv').config(); // 환경변수
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;

app.use(express.json()); //Content-Type: application/json 요청의 본문을 파싱해서 req.body에 JS 객체로 넣어준다.
app.use(express.urlencoded()); //Content-Type: application/x-www-form-urlencoded(일반 HTML 폼 전송) 본문을 파싱해서 req.body에 넣어준다.

const userRoutes = require('./routes/user'); //유저 라우터 가져오기

app.use('/api/auth', userRoutes); // 라우팅

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB 연결 완료'))
  .catch((error) => console.log('MongoDB와 연결에 실패했습니다.', error));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} <- 클릭`);
});

app.get('/', (req, res) => {
  res.send('hello');
});
