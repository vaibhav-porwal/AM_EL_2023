const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./bloom.db');

// insert one row into the langs table
const bt1 = [
    "find",
    "identify",
    "label",
    "list",
    "locate",
    "match",
    "memorise",
    "name",
    "recall",
    "recite",
    "recognize",
    "relate",
    "reproduce",
    "select",
    "state",
    "tell",
    "write",
  ];
  const bt2 = [
    "convert",
    "demonstarte",
    "describe",
    "discuss",
    "distinguish",
    "explain",
    "find out more information about",
    "generalize",
    "interpret",
    "outline",
    "paraphrase",
    "predict",
    "put into your own words",
    "relate",
    "restate",
    "summarize",
    "translate",
    "visualize",
  ];
  const bt3 = [
    "apply",
    "calculate",
    "change",
    "choose",
    "complete",
    "construct",
    "examine",
    "illustrate",
    "interpret",
    "make",
    "manipulate",
    "modify",
    "produce",
    "put into practice",
    "put together",
    "solve",
    "show",
    "translate",
    "use",
  ];
  const bt4 = [
    "advertise",
    "analyse",
    "categoriase",
    "compare",
    "contrast",
    "deduce",
    "differenciate",
    "distinguish",
    "examine",
    "explain",
    "identify",
    "investigate",
    "seperate",
    "subdivide",
    "take apart",
  ];
  const bt5 = [
    "argue",
    "assess",
    "choose",
    "compose",
    "construct",
    "create",
    "criticise",
    "critique",
    "debate",
    "decide",
    "defend",
    "design",
    "determine",
    "device",
    "discuss",
    "estimate",
    "evaluate",
    "formulate",
    "imagine",
    "invent",
    "judge",
    "justify",
    "plan",
    "predict",
    "prioritise",
    "propose",
    "rate",
    "recommend",
    "select",
    "value",
  ];
  const bt6 = [
    "add to",
    "argue",
    "assess",
    "choose",
    "combine",
    "compose",
    "construct",
    "create",
    "debate",
    "decide",
    "design",
    "determine",
    "devise",
    "discuss",
    "forcast",
    "formulate",
    "hypothesise",
    "imagine",
    "invent",
    "judge",
    "justify",
    "originate",
    "plan",
    "predict",
    "priortise",
    "propose",
    "rate",
    "recommend",
    "select",
    "verify",
  ];
function myFunction(item){db.run(`INSERT INTO `+ 'bt1'+`(word) VALUES(?)`, [item], function(err) {
  if (err) {
    return console.log(err.message);
  }
  // get the last insert id
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});}

bt1.forEach(myFunction);

function funbt2(item){db.run(`INSERT INTO `+ 'bt2'+`(word) VALUES(?)`, [item], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });}
bt2.forEach(funbt2);

function funbt3(item){db.run(`INSERT INTO `+ 'bt3'+`(word) VALUES(?)`, [item], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });}
bt3.forEach(funbt3);
function funbt4(item){db.run(`INSERT INTO `+ 'bt4'+`(word) VALUES(?)`, [item], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });}
bt4.forEach(funbt4);
function funbt5(item){db.run(`INSERT INTO `+ 'bt5'+`(word) VALUES(?)`, [item], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });}
bt5.forEach(funbt5);
function funbt6(item){db.run(`INSERT INTO `+ 'bt6'+`(word) VALUES(?)`, [item], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });}
bt6.forEach(funbt6);

// close the database connection
db.close();