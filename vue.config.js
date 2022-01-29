module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/touch_wood/" // test20200915 為 repo 名稱
      : "/",
};
