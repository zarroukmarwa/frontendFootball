const express = require('express');

const app = express();

app.use(express.static('./dist/footbal'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/footbal/'}),
);

app.listen(process.env.PORT || 8080);