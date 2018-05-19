const moment = require('moment');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function generateSelection(date) {
    return {
        key: {
            segmentNumber: Math.round(random(0, 10000000)),
            timestamp: date.valueOf()
        },
        totalCallsAdded: Math.round(random(1, 100)),
        totalCallsRemoved: -Math.round(random(1, 100)),
        segmentSize: Math.round(random(1, 100))
    }
}

function initSelections() {
    let date = moment().subtract(1, 'month');
    const selections = [];

    for (let i = 0; i < 30; i++) {
        selections.push(generateSelection(date));
        date = moment(date).add(1, 'day');
    }

    return selections;
}

const selections = initSelections();

function genereteSelections() {
    let date = moment();
    setInterval(() => {
        selections.push(generateSelection(date));
        date = moment(date).add(1, 'day');
    }, 2000);
}

genereteSelections();

function getSelections(options = {}) {
    const {days} = options;

    return Promise.resolve(selections.slice(-Number(days)));
}

module.exports = {
    getSelections
};
