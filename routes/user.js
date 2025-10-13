const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // DB에서 중복된 유저 있는지 확인 로직
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: '이미 존재하는 사용자입니다.' });
    }

    // 패스워드 암호화
    const hashedPassword = await bcrypt.hash(password, 10); // 10진수로 해시화

    // 회원가입 모델 만들기: 유저네임, 비밀번호 외에는 디폴트 값으로 저장
    const user = new User({
      username: username,
      password: hashedPassword,
    });

    // 몽고 디비에 저장
    await user.save();
    res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    //유저 정보가 있는지 확인
    const user = await User.findOne({ username }).select('+password'); // 비밀번호까지 가져오는 쿼리문

    if (!user) {
      return res.status('401').json({ message: '사용자를 찾을 수 없습니다.' });
    }
  } catch (error) {}
});

module.exports = router;
