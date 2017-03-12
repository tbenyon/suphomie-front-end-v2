const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

const port = process.env.PORT || 3001;

const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Suphomie V2 front end app listening at: http://%s:%s', host, port);
});
