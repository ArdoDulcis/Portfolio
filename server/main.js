const express = require('express');
const app = express();

let port = 3000;

app.use('/', express.static(__dirname + '/../public/'));

app.listen(port, ()=> {
    console.log(`Start Server Port${port}.`)
});