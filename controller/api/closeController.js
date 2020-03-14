var express = require('express');
var router = express.Router();
var fs = require('fs');

var routes = function ()
{
    router.route('/')  
        .get(function (req, res) {
            let status = JSON.parse(fs.readFileSync('views/status.json'));
            if (JSON.stringify(status).includes("closed")) {
                res.json({'Error': 'The garage is already closed'});
                return;
            } else {
                let data = JSON.stringify({'garageStatus': 'closed'});
                fs.writeFileSync('views/status.json', data);

                res.json({'garageStatus': 'closed'});
                console.log("The garage is now closed.");
            }
        });
    return router;  
};
module.exports = routes;