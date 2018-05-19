const initialState = {
    selections: []
};

const {LOAD_SELECTIONS} = require('app/actions/selections');

module.exports = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SELECTIONS: {
            return Object.assign({}, state, {
                selections: action.payload.selections
            });

            break;
        }

        default:
            return state;
    }
}
