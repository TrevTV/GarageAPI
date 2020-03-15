var express = require('express');
var router = express.Router();
var fs = require('fs');

var routes = function ()
{
    router.route('/')  
        .post(function (req, res) {
            let status = JSON.parse(fs.readFileSync('views/status.json'));
            console.log(req.query["url"]);
            if (req.query["url"] == null) {
                res.json({'Error': 'No url received'});
                return;
            }
            let data = JSON.stringify({'garageStatus': status["garageStatus"], 'url': req.query["url"]});
            fs.writeFileSync('views/status.json', data);
            res.json({'status': 'received'});
        });
    return router;  
};
module.exports = routes;