module.exports = (req, res, next) => {
    const dataContainer = {};

    res.locals.dataContainer = function(...args) {
        if (!args.length) {
            return dataContainer;
        }

        const data = args[0];

        Object.keys(data).forEach(key => {
            dataContainer[key] = data[key];
        });
    };

    next();
}
