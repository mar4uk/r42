const selections = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const INTERVAL = 2000;

function genereteSelections() {
    let start = Date.now();

    setInterval(() => {
        start += 86400000;
        selections.push({
            key: {
                segmentNumber: Math.round(random(0, 10000000)),
                timestamp: start
            },
            totalCallsAdded: Math.round(random(1, 100)),
            totalCallsRemoved: -Math.round(random(1, 100)),
            segmentSize: Math.round(random(1, 100))
        });
    }, INTERVAL);
}

genereteSelections();

function getSelections() {
    return Promise.resolve(selections);
}

module.exports = {
    getSelections
};
