import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Media from '@material-ui/core/CardMedia';
import img1 from '../../static/image/tgs2018.jpg';

const PaperStyle = {
    paddingTop : 24 + "px",
    paddingRight : 12 + "px",
    paddingLeft : 12 + "px",
    paddingBottom : 24 + "px"
};

const imgStyle = {
    height: 150,
    marginTop : 12 + "px",
    marginBottom : 12 + "px"
};

const ParagraphStyle = {
  paddingTop : 16 + "px"
};

const JS = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography component="h1">
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image={img1}
                component="image"
            />
            <Typography component="p">
                Area JS
            </Typography>
        </Paper>
    )
};
const HTML = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography component="h1">
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image={img1}
            />
            <Typography component="p">
                Area JS
            </Typography>
        </Paper>
    )
};
const CSS = () => {
    return(

        <Paper elevation={4} style={PaperStyle}>
            <Typography component="h1">
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image={img1}
            />
            <Typography component="p">
                Area JS
            </Typography>
        </Paper>
    )
};
const FW = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography component="h1">
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image={img1}
            />
            <Typography component="p">
                Area JS
            </Typography>
        </Paper>

    )
};
const Algorithm = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography component="h1">
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image={img1}
            />
            <Typography component="p">
                Area JS
            </Typography>
        </Paper>
    )
};
const FE = () => {
    return(
        <Paper elevation={4} style={PaperStyle}>
            <Typography component="h1">
                TEST FORM 1
            </Typography>
            <Media
                style={imgStyle}
                image={img1}
            />
            <Typography component="p" style={ParagraphStyle}>
                Area JS
            </Typography>
        </Paper>
    )
};

export { JS, HTML, CSS, FW, Algorithm, FE };