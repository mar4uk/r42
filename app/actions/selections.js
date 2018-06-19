const LOAD_SELECTIONS = 'LOAD_SELECTIONS';

const actions = {
    LOAD_SELECTIONS,

    loadSelections: (selections) => {
        return {
            type: LOAD_SELECTIONS,
            payload: {
                selections
            }
        }
    },

    fetchSelections: () => {
        return (dispatch) => {
            fetch('/selections')
                .then(res => res.json())
                .then(({selections}) => {
                    return dispatch(actions.loadSelections(selections))
                });
        }
    }
}

module.exports = actions;
