const fs = require('fs');

const mustache = require('mustache');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function handleRender(req, res) {
    const dataContainer = res.locals.dataContainer();

    const Page = require('app/pages/' + dataContainer.page + '/index.jsx');
    const content = ReactDOMServer.renderToString(<Page />);
    const layout = fs.readFileSync('app/layouts/default.html').toString();

    res.send(mustache.render(layout, {
        content
    }));
}

module.exports = handleRender;
