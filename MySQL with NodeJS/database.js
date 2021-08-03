//npm install mysql
//keep database file in project root directory
const mysql = require('mysql');

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "redhat@123", //pswd can be any
    database : "databaseName"
});

con.connect((error) => {
    if(error) 
        throw error;
    else
        con.query("select * from users", (err,data) => {
            if(err)
                throw err;
            else 
                console.warn("all results are here",data);  //data[0].name
        })
})