//トークンを複合して、合っているかどうか

const jwt = require("jsonwebtoken");
const config = require("./config");

function auth(req, res, next) {
  //ランダムな文字列を複合して合っているか
  try {
    //承認用のトークン設定（Postmanで設定）
    const token = req.headers.token;

    //tokenと秘密鍵を合わせてデコードできるか確認
    const decoded = jwt.verify(token, config.jwt.secret);
    console.log(decoded);
    next();
  } catch (err) {
    return res.send(401).json({
      msg: "認証できません",
    });
  }
}

module.exports = auth;
