var express = require('express');
var router = express.Router();
var sql = require("mssql");

var routes = function ()
{
    router.route('/')  
        .get(function (req, res) {
            res.status(200).send("Welcome to the GarageAPI, you may leave now.");
        });
    return router;  
};
module.exports = routes;