const express = require('express');
const favicon = require('express-favicon');
// const unirest = require("unirest");
const path = require("path");
const port = 3000;
const htmlFilePrefix = "/../../templates/";

const app = express();
app.use(favicon(__dirname + "../../../static/img/favicon_deathStar.png"));

app.get("/", (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, htmlFilePrefix)
    });
});

app.listen(port, () => {
    console.log(`App is listening at localhost on port ${port}!`);
});