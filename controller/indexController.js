var express = require('express');
var router = express.Router();

var routes = function ()
{
    router.route('/')  
        .get(function (req, res) {
            res.render("../views/index.html");
        });

    return router;  
};
module.exports = routes;