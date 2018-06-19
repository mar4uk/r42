const update = require('immutability-helper');
const {CHART_VISIBLE_PERIOD_DAYS} = require('app/constants');

const initialState = {
    selections: []
};

const {LOAD_SELECTIONS} = require('app/actions/selections');

module.exports = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case LOAD_SELECTIONS: {
            const selections = state.selections.concat(payload.selections).slice(-CHART_VISIBLE_PERIOD_DAYS);

            return update(state, {
                selections: {$set: selections}
            });

            break;
        }

        default:
            return state;
    }
}
