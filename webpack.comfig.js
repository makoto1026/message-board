module.exports = {
  module: {
    rules: [
      // ここから
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
      // ここまで
    ]
  }
}
