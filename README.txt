【デモ】

実行デモがこちらにあります
　→ http://thaga.github.io/IOTA/

左上のボタンでTHETA画像選択(複数選択可)あるいはドラッグ＆ドロップ(複数ドロップ可)すると
ビューアとして使えます。
複数画像を見ている場合は、左右カーソルキー[←][→]で、画像を切り替えられます。
一応動画にも対応していますが、読み込み再生するまでにめっちゃ時間掛かります。

自分のwebページでTHETA画像を公開する例はこちら
　→ http://thaga.github.io/IOTA/multi-sample.html

自分のwebページでTHETA動画を公開する例はこちら(現在ファイルが無いのでソースを参照のこと)
　→ http://thaga.github.io/IOTA/video-sample.html



iota.jsx.jsは、ページ内に"iota-canvas"というidのcanvas要素があるかどうかで動作が変わります。
存在する場合はブラウザ画面の中で一杯に広がってビューアになります。

iota-canvas"が存在しない場合は、ページ内に存在しdata-theta-img属性またはdata-theta-video属性を
持つcanvas要素を探し出し、それぞれにTHETA画像か動画を表示します。
このとき、data-iota-heading, data-iota-pitching, data-iota-fov属性があると、初期の視線方向と
画角を設定することができます。
headingは右回りの角度(単位は度)、pitchingは上方向の角度(単位は度)、fovは縦横狭い方の画角(単位は度)
です。http://thaga.github.io/IOTA/multi-sample.htmlのソースを参考にしてください。


どちらのモードでも、ダブルクリックすると全画面モードになります。
Fキーを押すと投影方法が 通常⇔魚眼 と変わります。
Rキーを押すと、THETAから取り出した生データを表示するモードになります。(rawモード)
動画の再生中にPキーを押すと、一時停止、再生になります。


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
　サイズとは、まぁ、適当に、変更してください。



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
