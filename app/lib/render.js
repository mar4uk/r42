const fs = require('fs');

const mustache = require('mustache');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {createStore} = require('redux');
const {Provider} = require('react-redux');
const chartApp = require('../reducers');

function handleRender(req, res) {
    const dataContainer = res.locals.dataContainer();
    const Page = require('app/pages/' + dataContainer.page + '/index.jsx');

    const store = createStore(chartApp)

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <Page />
        </Provider>
    );
    const layout = fs.readFileSync('app/layouts/default.html').toString();

    const initialState = store.getState();

    res.send(mustache.render(layout, {
        content,
        state: escape(JSON.stringify(initialState))
    }));
}

module.exports = handleRender;
