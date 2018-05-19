const React = require('react');
const ReactDOM = require('react-dom');
const {createStore, applyMiddleware} = require('redux');
const {Provider} = require('react-redux');
const Page = require('../pages/main');
const chartApp = require('../reducers');
const thunk = require('redux-thunk').default;

const initialState = JSON.parse(unescape(window.__INITIAL_STATE__));
delete window.__INITIAL_STATE__;

const store = createStore(chartApp, initialState, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <Page />
    </Provider>
, document.getElementById('app-container'));
