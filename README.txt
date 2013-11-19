【デモ】

実行デモがこちらにあります→ http://thaga.github.io/IOTA/

左上のボタンでTHETA画像選択(複数選択可)あるいはドラッグ＆ドロップ(複数ドロップ可)すると
ビューアとして使えます。



【自分のwebページにIOTAを組み込む】

1. IOTAを追加
　
　head要素の中かどこか、適当な所に
　　<script src="http://thaga.github.io/IOTA/iota.jsx.js"></script>
　を置く。
　
　github上のiota.jsx.jsはいつどう変化するか分からないので、自分の手元にコピーしておいて、
　src="..."の部分もそちらを参照するよう変更しておく事をオススメ致します。

2. THETA画像を見るためのcanvas要素を追加
　
　THETAの画像を置きたい場所に、
　　<canvas data-theta-img="??????.jpg" width="384" height="256"></canvas>
　を置く。
　
　THETA画像のURLを、data-theta-img属性で指定してください。

IOTAのスクリプトは、ページ内に存在しdata-theta-img属性を持つcanvas要素を探し出し、
それぞれにTHETA画像を表示します。



【iota.jsxからiota.jsx.jsを生成する】(iota.jsxを自分でいじくる人向け)

コンパイルにはJSX( http://jsx.github.io/ )が必要です。

JSXをインストール後、
　> jsx --disable-type-check --executable web --output iota.jsx.js iota.jsx
でコンパイルできます。

--disable-type-checkが必要です。



【ライセンス？】

このディレクトリ内のソースは全てNYSL( http://www.kmonos.net/nysl/ )です。
煮るなり焼くなり好きにしてください。



以上
