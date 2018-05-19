const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const handleRender = require('./lib/render');

app.use('/dist', express.static('dist', {
    fallthrough: false
}));

app.use('/favicon.ico', express.static('dist', {
    fallthrough: false
}));

app.use((req, res, next) => {
    const dataContainer = {};

    res.locals.dataContainer = function(...args) {
        switch (args.length) {
            case 0:
                return dataContainer;
                break;

            default:
                const data = args[0];
                Object.keys(data).forEach(function (key) {
                    dataContainer[key] = data[key];
                }, this);
        }
    };

    next();
});

app.get('/', require('./controllers/selections-chart'));
app.get('/selections', require('./controllers/selections'));

app.use(handleRender);

app.listen(PORT, () => {
    console.log(`Application was started on http://localhost:${PORT}`);
});
