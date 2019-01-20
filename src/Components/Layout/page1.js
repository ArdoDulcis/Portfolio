import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../../CSS/page1.css';
import ProfileImage from "../../static/image/profile.JPG";

export default class Page1 extends Component {
    render(){
        const PaperStyle = {
            paddingTop : 24 + "px",
            paddingRight : 12 + "px",
            paddingLeft : 12 + "px",
            paddingBottom : 24 + "px"
        };
        return(
            <section id="intro">
                <h1 className="page-h1">Who am I??</h1>
                <div className="line"></div>
                <div className="page1">
                    <Paper elevation={3} style={PaperStyle}>
                        <Typography
                            component="h1"
                            variant="h4"
                            align="right"
                        >
                            KIM MIN CHEOL
                        </Typography>
                        <Typography
                            component="p"
                            variant="h6"
                            align="left"
                        >
                            出身地：韓国・ソウル
                        </Typography>
                        <Typography
                            component="p"
                            variant="h6"
                            align="left"
                        >
                            職業：システムエンジニア
                        </Typography>
                        <Typography
                            component="p"
                            variant="h6"
                            align="left"
                        >
                            保有資格
                            <Typography
                                component="p"
                                variant="h6"
                                align="left"
                            >
                            JLPT　N1　170点
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                align="left"
                            >
                            BJT　J2　538点
                            </Typography>
                        </Typography>
                        <Typography
                            component="p"
                            variant="h6"
                            align="left"
                        >
                            モット
                            <Typography
                                component="p"
                                variant="h6"
                                align="left"
                            >
                                天才は努力する者に勝てなく、努力する者は楽しむ者には勝てない。
                            </Typography>
                        </Typography>
                        <Typography
                            component="p"
                            variant="h6"
                            align="left"
                        >
                            自己紹介
                            <Typography
                                component="p"
                                variant="h6"
                                align="left"
                            >
                                JavaScriptのコーディングが大好き。常に新しいものを求めてやってみようとするチャレンジャータイプ。人と話すことが好きで、チーム単位で活動することが好き。
                            </Typography>
                        </Typography>
                    </Paper>
                    <img src={ProfileImage}/>
                </div>
            </section>
        )
    };
}