import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Media from '@material-ui/core/CardMedia';
import JSimg from '../../static/image/JS.jpeg';
import HTMLimg from '../../static/image/HTML.jpg';
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

const FontSize = {
  h1_fontsize : 12 + "pt",
  p_fontsize : 10 + "pt"
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
                variant="h5"
                color="textSecondary"
            >
                Area JS
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
                variant="h5"
                color="textSecondary"
            >
                HTML
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
                variant="h5"
                color="textSecondary"
            >
                Area JS
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
                variant="h5"
                color="textSecondary"
            >
                Area JS
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
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image=""
            />
            <Typography
                component="p"
                variant="h5"
                color="textSecondary"
            >
                Area JS
            </Typography>
        </Paper>
    )
};
const FE = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography
                component="h1"
                variant="h4"
                align="left"
            >
                Front - End - Skill
            </Typography>
            <Media
                style={imgStyle}
                image=""
            />
            <Typography
                component="p"
                variant="h5"
                color="textSecondary"
            >
                Area JS
            </Typography>
        </Paper>
    )
};

export { JS, HTML, CSS, FW, Algorithm, FE };