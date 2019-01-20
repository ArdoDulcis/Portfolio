import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Media from '@material-ui/core/CardMedia';
import JSimg from '../../static/image/JS.jpeg';
import HTMLimg from '../../static/image/HTML.jpg';
import Algorithmimg from '../../static/image/Algorithm.jpg';
import CSS3img from '../../static/image/CSS3.jpg';
import FWimg from '../../static/image/Framework.jpg'

const PaperStyle = {
    paddingTop : 24 + "px",
    paddingRight : 12 + "px",
    paddingLeft : 12 + "px",
    paddingBottom : 24 + "px"
};

const imgStyle = {
    height: 250,
    marginTop : 12 + "px",
    marginBottom : 12 + "px"
};

const JS = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography
                component="h1"
                variant="h4"
                align="left"
            >
                JavaScript
            </Typography>
            <Media
                style={imgStyle}
                image={JSimg}
            />
            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
            >
                JSが好きな理由は他の言語とは違いかなり柔軟に設計されているところです。
                OOP基盤言語でありながらクラス概念がないのはかなりショックでしたが、prototypeによる相続が可能なところやClosureという概念を用いてプライベート変数を作れるなどすごく興味深いところで魅力を感じ好きになりました。
            </Typography>
        </Paper>
    )
};
const HTML = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography
                component="h1"
                variant="h4"
                align="left"
            >
                HTML
            </Typography>
            <Media
                style={imgStyle}
                image={HTMLimg}
            />
            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
            >
                HTMLは最初に学ぶ時はすごく簡単そうに見えました。
                しかし、DOCTYPEやセマンティックHTML、DOM、BOM、クロスブラウザイシューなどに触れることになってからは
                考えを改めました。その考えを改めてからHTML学習の深さに感心し、好きになりました。特にHTMLのレンダリング
                がブラウザでどう行われていくのかを理解できてからはFOUCイシューなどに対応できるようになりました。
            </Typography>
        </Paper>
    )
};
const CSS = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography
                component="h1"
                variant="h4"
                align="left"
            >
                CSS
            </Typography>
            <Media
                style={imgStyle}
                image={CSS3img}
            />
            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
            >
                CSSはアプリケーションを使うユーザーに使って楽しいアプリケーション、使い心地の良いアプリケーションを提供できるからです。アプリケーションがCSSによって華麗にそして面白く動作しているもの見ると面白いです。
            </Typography>
        </Paper>
    )
};
const FW = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography
                component="h1"
                variant="h4"
                align="left"
            >
                New FrameWork
            </Typography>
            <Media
                style={imgStyle}
                image={FWimg}
            />
            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
            >
                フレームワークはJSのフレームワークが好きです。スマートフォンの普及によりWebが激しく変化をしつつJSのフレームワークにもかなりの変化が来ており、新しいフレームワークが続々と出ています。新しいフレームワークを学んでいくことが飽き性の私のとっては遊び場のようなものになっています。
            </Typography>
        </Paper>
    )
};
const Algorithm = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography
                component="h1"
                variant="h4"
                align="left"
            >
                Algorithm
            </Typography>
            <Media
                style={imgStyle}
                image={Algorithmimg}
            />
            <Typography
                component="p"
                variant="body2"
                color="textSecondary"
            >
                アルゴリズムが好きな理由は問題解決に至るまでどんな手順のプログラムを組めばいいかを考えさせてくれるからです。
                そして問題を解決した時のその快感はやってやったぞ！と自信を持てるようになり、プログラミングのスキルが成長したような感覚をもらうからです。
            </Typography>
        </Paper>
    )
};

export { JS, HTML, CSS, FW, Algorithm };