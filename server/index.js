const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var grab = require('../helpers/github.js');
var db = require('../database/index.js');

app.use(bodyParser.json());
app.post('/repos', function (req, res) {
  var query = req.body[0];
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log(query);
  // db.save();
  grab.getReposByUsername(query, function(data) {
    // console.log(data);
    db.save(data);
  });
  res.end();
});

app.get('/grabrepos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // console.log("running----")
  callback = function (data) {
    data.sort(function(a,b) {
      return b.forks-a.forks;
    });
    var uniqData = [];
    var outputData = [];
    for (var i = 0; i < data.length; i++) {
      if (uniqData.indexOf(data[i].repoName) === -1) {
        uniqData.push(data[i].repoName);
        outputData.push(data[i]);
      }
    }
    res.send(outputData.slice(0,25));
  };
  db.grabData(callback);
  // res.end();
});


 
app.use(express.static(__dirname + '/../client/dist'));
let port = 1128;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

