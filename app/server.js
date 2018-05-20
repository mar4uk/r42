const fs = require('fs');
const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

const handleRender = require('./lib/render');
const dataContainer = require('./lib/data-container');

app.use('/dist', express.static('dist', {
    fallthrough: false
}));

app.use(dataContainer);

app.get('/', require('./controllers/selections-chart')(io));

app.use(handleRender);

server.listen(PORT, () => {
    console.log(`Application was started on http://localhost:${PORT}`);
});
