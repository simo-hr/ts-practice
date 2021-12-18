const path = require("path");
module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    bundle: "./src/index.ts",
  },
  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
  output: {
    path: path.join(__dirname, "dist"),
    // bundleで指定したものが[name]と紐づく
    filename: "[name].js",
  },
  resolve: {
    // import文でファイル拡張子を書かずに名前解決するための設定
    // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        loader: "ts-loader",
        // testで対象にするファイルを設定する
        // .tsで終わる全てのファイル
        test: /\.ts$/,
      },
    ],
  },
};
