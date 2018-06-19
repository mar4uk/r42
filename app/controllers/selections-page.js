const selectionsProvider = require('app/data-providers/selections');

module.exports = function (io) {
    return function(req, res, next) {
        selectionsProvider.getSelections({
            io
        }).then(selections => {
            res.locals.dataContainer({
                page: 'main',
                selections
            });

            next();
        });
    }
}
