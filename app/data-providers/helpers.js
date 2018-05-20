const moment = require('moment');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const helpers = {
    generateSelection: (date) => {
        return {
            key: {
                segmentNumber: Math.round(random(0, 10000000)),
                timestamp: date.valueOf()
            },
            totalCallsAdded: Math.round(random(1, 100)),
            totalCallsRemoved: -Math.round(random(1, 100)),
            segmentSize: Math.round(random(1, 100))
        }
    },

    initSelections: (days) => {
        let date = moment().subtract(days, 'days');
        const selections = [];

        for (let i = 0; i < days; i++) {
            selections.push(helpers.generateSelection(date));
            date = moment(date).add(1, 'day');
        }

        return selections;
    }
}

module.exports = helpers;
