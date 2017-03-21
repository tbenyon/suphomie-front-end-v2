const express = require('express');
const app = express();
const Config = require("./config.json");

app.set('view engine', 'pug');
app.set('views', __dirname + '/assets/views');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('dashboard.pug', {"app_key": Config.pusher.key});
});

const port = process.env.PORT || 3001;

const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Suphomie V2 front end app listening at: http://%s:%s', host, port);
});
