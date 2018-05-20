const fs = require('fs');

const mustache = require('mustache');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {createStore, applyMiddleware} = require('redux');
const {Provider} = require('react-redux');
const chartApp = require('../reducers');
const thunk = require('redux-thunk').default;

function handleRender(req, res) {
    if (req.xhr) {
        return;
    }

    const dataContainer = res.locals.dataContainer();

    if (!dataContainer.page)  {
        return;
    }

    const Page = require('app/pages/' + dataContainer.page + '/index.jsx');
    const store = createStore(chartApp, applyMiddleware(thunk));

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <Page />
        </Provider>
    );
    const layout = fs.readFileSync('app/layouts/default.html').toString();
    const initialState = store.getState();

    res.send(mustache.render(layout, {
        content,
        state: escape(JSON.stringify(Object.assign({}, initialState, {
            selections: dataContainer.selections
        })))
    }));
}

module.exports = handleRender;
