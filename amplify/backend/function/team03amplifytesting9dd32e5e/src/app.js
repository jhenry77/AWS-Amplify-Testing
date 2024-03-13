/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



var mysql = require('mysql');
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/about', function(req, res) {
  // Add your code here

  // var con = mysql.createConnection({
  //   host: "team03-amplify-db.cobd8enwsupz.us-east-1.rds.amazonaws.com",
  //   user: "admin",
  //   password: "Spring2024Team03!",
  //   port: 3306,
  //   database: "team03testingDB"
  // });

  

  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "CREATE TABLE about (teamNumber VARCHAR(255), VersionNum VARCHAR(255), SprintDate VARCHAR(255), ProductName VARCHAR(255),ProductDescription VARCHAR(255)  )";
  //   con.query(sql, function (err, result) {
  //     if (err) res.json({failure: "The error was" + err});
  //     else console.log("Table created");
  //   });
  // });
  //con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  
  //   var sql = "INSERT INTO about (teamNumber, VersionNum, SprintDate, ProductName, ProductDescription) VALUES ('team03', 'Sprint3', '2/22/2024', 'TruckingCatalog','Delivering')";
  //   con.query(sql, function (err, result) {
  //     if (err) res.json({failure: "The error was" + err});
  //     else res.json("1 record inserted");
  //   });
  // });
  res.json({success: 'JASON!!!!'});

});

app.get('/about/*', function(req, res) {
  // Add your code here
  var con = mysql.createConnection({
    host: "team03-amplify-db.cobd8enwsupz.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Spring2024Team03!",
    port: 3306,
    database: "team03testingDB"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM about", function (err, result, fields) {
      if (err) res.json({failure: err});
      else res.json({success: result});
    });
  });

  
});

/****************************
* Example post method *
****************************/

app.post('/about', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/about/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/about', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/about/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/about', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/about/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
