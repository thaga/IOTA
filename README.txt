【iota.jsxから、iota.jsx.jsを生成する】
> jsx --disable-type-check --executable web --output iota.jsx.js iota.jsx

--disable-type-checkが必要です。


【自分のwebページにIOTAを組み込む】
1. IOTAを追加
　head要素の中かどこか、適当な所に
　　<script src="http://thaga.github.io/IOTA/iota.jsx.js"></script>
　を置く。
　
　github上のjsはいつどう変化するか分からないので、手元に置いておいて、src="..."の部分も
　変更しておく事をオススメ致します。

2. THETA画像を見るためのcanvas要素を追加
　THETAの画像を置きたい場所に、
　　<canvas data-theta-img="??????.jpg" width="384" height="256"></canvas>
　を置く。
　THETA画像のURLを、data-theta-img属性で指定してください。
　
　IOTAのスクリプトは、ページ内に存在しdata-theta-img属性を持つcanvas要素を探し出し、
　それぞれにTHETA画像を表示します。


【ライセンス？】
このディレクトリ内のソースは全てNYSL( http://www.kmonos.net/nysl/ )です。
煮るなり焼くなり好きにしてください。


以上
