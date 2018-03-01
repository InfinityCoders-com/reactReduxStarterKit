var url = require('url');
var _ = require('lodash');

exports.routes = function(req, res, io) {
    let urlString = req.url.toString();
    let routeLevel = urlString.split('/').length;
    const CASE = routeLevel == 2 && urlString.indexOf('?') > -1 ? 'index' : urlString.split('/')[1];

    console.log('URL', req.url, req.url.toString().length, CASE , '========= Routes')

    switch(CASE) {
        case 'index': {
            var q = url.parse(req.url, true).query;
            res.write('<h1>Hello World!</h1>');
            var txt = _.size(q) > 0 ? res.write(q.year + " " + q.month) : null;
            res.end();
            break;
        }
        case 'chat': {
            res.end();
            break;
        }
        default: {
            res.write('<center><h1>OOPS! Error 404.</h1><h2>Humse Na hopaega.</h2><h3> You might have landed on wrong url, It doesn\'t exist.</h3></center>');
        }
    }
}
