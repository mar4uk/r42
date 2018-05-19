const selectionsProvider = require('app/data-providers/selections');

module.exports = function(req, res, next) {
    const days = req.query.days;

    selectionsProvider.getSelections({
        days
    }).then(selections => {
        res.json({
            selections
        });
    });

    next();
}
