# G's expansion React講座　第二回

## 実現したこと
- 本のサムネを表示(undefinedの場合の処理はオプショナルチェーンを使用してみた)
> `<img src={x.volumeInfo.imageLinks?.smallThumbnail} />`
- 著者の表示
- 著者をクリックでコンソールにその著者が書いた本のデータを表示

## 実現できていないこと
- 著者クリックで著者が書いた本の一覧が同じように表示できるようにする