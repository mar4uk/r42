const moment = require('moment');

const {
    generateSelection,
    initSelections
} = require('./helpers');

const {CHART_VISIBLE_PERIOD_DAYS} = require('app/constants');

const selections = initSelections(CHART_VISIBLE_PERIOD_DAYS);

let listener;

function genereteSelections() {
    let date = moment();

    setInterval(() => {
        const selection = generateSelection(date);

        if (listener) {
            listener.emit('selection_added', {
                selection
            });
        }

        selections.push(selection);
        date = moment(date).add(1, 'day');
    }, 2000);
}

genereteSelections();

function getSelections(options = {}) {
    const {io} = options;
    listener = io;

    return Promise.resolve(selections.slice(-Number(CHART_VISIBLE_PERIOD_DAYS)));
}

module.exports = {
    getSelections
};
