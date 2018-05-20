const LOAD_SELECTIONS = 'LOAD_SELECTIONS';

module.exports = {
    LOAD_SELECTIONS,

    loadSelections: function (selection) {
        return {
            type: LOAD_SELECTIONS,
            payload: {
                selection
            }
        }
    }
}
