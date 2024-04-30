const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const auth = require("./auth");

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, console.log("server running"));

//登録
app.post("/register", (req, res) => {
  //Postmanで値を設定
  const payload = {
    username: req.body.username,
    email: req.body.email,
  };

  //tokenを発行
  const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

  //コンソールに出力
  const body = {
    username: req.body.username,
    email: req.body.email,
    token: token,
  };

  //成功したらbodyを出力
  res.status(200).json(body);
});

//ログイン
//auth関数を入れることで、tokenが付けてるのか付けてないのか判断
app.get("/login", auth, (req, res) => {
  //これだけだとtokenが合っているかどうかの記述がない
  //認証できるかどうかのファイルをauth.jsファイルで実装する
  res.status(200).json({
    msg: "承認に成功しました",
  });
});
