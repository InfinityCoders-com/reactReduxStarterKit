var url = require('url');
var _ = require('lodash');

exports.routes = function(req, res) {
    console.log('URL', req.url, req.url.toString().length, '========= Routes')

    let urlString = req.url.toString();
    let routeLevel = urlString.split('/').length;
    const CASE = routeLevel == 2 ? 'index' : urlString.split('/')[1];
    switch(CASE) {
        case 'index': {
            var q = url.parse(req.url, true).query;
            const kitty = new Auth({
                name: 'Abhishek',
                username: {
                    type: 'abhi',
                    required: true,
                    unique: true
                },
                password: {
                    type: '123456',
                    required: true
                },
                admin: true,
                location: 'Delhi',
                meta: {
                  age: 25,
                  website: '-'
                },
                created_at: Date,
                updated_at: Date
            });
            res.write('<h1>Hello World!</h1>');
            var txt = _.size(q) > 0 ? res.write(q.year + " " + q.month) : null;
            res.end();
            break;
        }
        case 'form': {

        }
        default: {
            res.write('<center><h1>OOPS! Error 404.</h1><h3> You might have landed on wrong url, It doesn\'t exist.</h3></center>');
        }
    }
}
