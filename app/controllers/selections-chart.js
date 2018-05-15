const selectionsProvider = require('app/data-providers/selections');

module.exports = function(req, res, next) {
    selectionsProvider.getSelections().then(selections => {
        res.locals.dataContainer({
            page: 'main',
            selections
        });

        next();
    });
}
