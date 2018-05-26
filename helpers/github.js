const request = require('request');
const config = require('../config.js');


let getReposByUsername = (user, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/aliu730/repos',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
    }
  };
  
  request(options, function  (err, response, body) {
    if (err) {
      console.log(err);
    } else {
      callback(JSON.parse(body));
      //console.log(response.headers);
      // console.log(JSON.parse(body));
      // return JSON.parse(body);
    }
  }); 
}

module.exports.getReposByUsername = getReposByUsername; // need to access this in server.