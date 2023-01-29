const sqlite3 = require('sqlite3').verbose();
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// open database in memory
let db = new sqlite3.Database('./bloom.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\r\n');

// Calling the readFiles function with file name
// let arr = readFileLines('abc.txt');

// Printing the response array
// console.log(arr);
const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors())
app.get('/level', (req, res) => {
  let sql = `SELECT DISTINCT * FROM `+req.query.id;
  let arr1=[]
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      arr1.push(row.word);
    });
    res.send(arr1)
  })
  
    
  })

  app.post('/insert', (req, res) => {
  console.log(req.query.level,req.query.word)
  let sql = `INSERT INTO bt1 (word) VALUES define`;
  let word1=req.query.word;
  let arr1=[];
  db.run(`INSERT INTO `+req.query.level+`(word) VALUES(?)`, [word1], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
  res.send("Success") ;
    
  })
  app.post('/del', (req, res) => {
    console.log(req.query.level,req.query.word)
    let word1=req.query.word;
    let arr1=[];
    db.run(`DELETE FROM `+req.query.level+` WHERE word = ? `, [word1], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been deleted with rowid ${this.lastID}`);
    });
    res.send("Success") ;
      
    })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 

