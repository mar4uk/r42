const {selections} = require('./selections.json');

function getSelections() {
    return Promise.resolve(selections);
}

module.exports = {
    getSelections
};
