const selectionsProvider = require('app/data-providers/selections');

module.exports = function(req, res, next) {
    const {days} = req.query;

    selectionsProvider.getSelections({
        days
    }).then(selections => {
        res.json({
            selections
        });
    });

    next();
}
