var sql = require("mssql");  
var connect = function()  
{  
    var conn = new sql.ConnectionPool({  
        user: 'u210021154_admin',  
        password: 'admin',  
        server: 'auth-db166.hostinger.com:3306',  
        database: 'u210021154_garageapi'  
    });  
  
    return conn;  
};  
  
module.exports = connect;  