const request = require('request');
const config = require('../config.js');


let getReposByUsername = (user) => {
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
  function callback (err, response, body) {
    if (err) {
      console.log(err);
    } else {
      //console.log(response.headers);
      console.log(JSON.parse(body));
    }
  };
  request(options, callback); 
}

module.exports.getReposByUsername = getReposByUsername; // need to access this in server.