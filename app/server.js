const fs = require('fs');
const express = require('express');

const app = express();
const ReactDOMServer = require('react-dom/server');
const mustache = require('mustache');

const App = require('./components/app');
const PORT = process.env.PORT || 3000;

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
    const content = ReactDOMServer.renderToString(App);
    const layout = fs.readFileSync('app/layouts/default.html').toString();

    res.send(mustache.render(layout, {
        content
    }));
});

app.listen(PORT, () => {
    console.log(`Application was started on http://localhost:${PORT}`);
});
