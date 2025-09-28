const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // 필수 데이터
      trim: true, // 입력값 좌우 공백 제거
      minlength: 2,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      select: false, //이 스키마로 어떤 데이터를 조회할 때 select 쿼리에 포함되지 않게끔 설정
    },
    //동시에 로그인하는 것을 막기 위해 나중에 사용한다.
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    //보안 기법을 위해 나중에 사용한다.
    isActive: {
      type: Boolean,
      default: true,
    },
    //비밀번호 몇 번 틀렸는지 카운팅
    failedLoginAttempt: {
      type: Number,
      default: 0,
    },
    //마지막으로 로그인 시도한 날짜
    lastLoginAttepmt: {
      type: Date,
    },
    //보안을 위해 IP주소도 수집
    ipAddress: {
      type: String,
      trim: true,
    },
    // 계정이 만들어진 시간
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    //타임스탬프 : 자동으로 시간 데이터가 만들어지도록
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
