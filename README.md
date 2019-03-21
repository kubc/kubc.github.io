# kubc.github.io
[![CircleCI](https://circleci.com/gh/kubc/kubc.github.io/tree/develop.svg?style=svg)](https://circleci.com/gh/kubc/kubc.github.io/tree/develop)

KUBC (Kyoto University Contract Bridge Club)'s official website.

京都大学コントラクトブリッジクラブの公式ウェブサイトです。

## Description
このリポジトリの`master`ブランチの内容は、[GitHub Pages](https://pages.github.com/)の機能により https://kubc.github.io/ 以下で公開されています。

`develop`ブランチにプッシュすると[Circle CI](https://circleci.com/)上で`npm run build`が実行され`dist/`以下に出力されたものが`master`ブランチへプッシュされます。

## Set Up
```bash
$ npm install
```

## Usage
htmlファイルは`src/`以下で[EJS](http://ejs.co/)のソースを編集し、
[ejs-cli](https://github.com/fnobi/ejs-cli)でコンパイルして`dist/`以下に出力しています。

また、`static/`以下も`dist/`以下にコピーしています。

その後、timestamp.jsでhtmlファイル内の`<t xxx.css t>`のようなテンプレートを`xxx.css?0123456789`のように置換しています。

これらは、
```bash
$ npm run build
```
で行えます。

更にhttpサーバーを建ててブラウザテストするまでをまとめて
```bash
$ npm start
```
で行えます。

ブラウザテストだけする場合は
```bash
npm run serve
```
になります。

html以外のファイルはそのままルート直下に置いています。

## Contributing
1. fork
2. 編集
3. `$ git commit -am 'add something.'`
4. `$ git push`
5. pull requestを送る

編集したいけどここを読んでも方法が分からないKUBC部員は直接中の人辺りに聞いて下さい。
