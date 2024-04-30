module.exports = {
  jwt: {
    //この秘密鍵で複合する
    secret: "SECRET-KEY",
    //使う暗号化方式を宣言する
    options: {
      algorithm: "HS256",
      expiresIn: "1d",
    },
  },
};
