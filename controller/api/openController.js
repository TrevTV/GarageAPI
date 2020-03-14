var express = require('express');
var router = express.Router();
var fs = require('fs');

var routes = function ()
{
    router.route('/')  
        .get(function (req, res) {
            let status = JSON.parse(fs.readFileSync('views/status.json'));
            if (JSON.stringify(status).includes("open")) {
                res.json({'Error': 'The garage is already open'});
                return;
            } else {
                let data = JSON.stringify({'garageStatus': 'open'});
                fs.writeFileSync('views/status.json', data);

                res.json({'garageStatus': 'open'});
                console.log("The garage is now open.");
            }
        });
    return router;  
};
module.exports = routes;