const LOAD_SELECTIONS = 'LOAD_SELECTIONS';

module.exports = {
    LOAD_SELECTIONS,

    loadSelections: function () {
        return (dispatch) => {
            return fetch('/selections', {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then(res => (
                res.json()
            )).then(({selections}) => (
                dispatch({
                    type: LOAD_SELECTIONS,
                    payload: {
                        selections
                    }
                })
            ));
        }
    }
}
