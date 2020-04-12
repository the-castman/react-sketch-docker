const path = require('path');
const routes = require(path.resolve('.', 'proxy_server/routes'));

module.exports = function(app) {
    app.use('/api', routes);
};