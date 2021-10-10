const express = require('express');
const favicon = require('express-favicon');
const nunjucks = require("nunjucks");
// const unirest = require("unirest");
const path = require("path");
const port = 8000;
const htmlFilePrefix = "/templates/";

const app = express();
nunjucks.configure('./../../templates', {express: app});
app.set('views', __dirname + htmlFilePrefix);
app.use(favicon(__dirname + "/static/img/favicon_deathStar.png"));
app.use("/static", express.static(path.join(__dirname + "/static")));


app.get("/", (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, htmlFilePrefix)
    });
});

app.listen(port, () => {
    console.log(`App is listening at localhost on port ${port}!`);
    console.log(__dirname);
});