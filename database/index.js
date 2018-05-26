const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  owner: String,
  description: String  
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  for (var i = 0; i < data.length; i++) {
    var user = new Repo({ 'repoName': data[i].name, 'owner': data[i].owner.login, 'description': data[i].description});
    user.save(function(err, result){
      console.log(result);
      if (err) {
        console.log(err);
      }
    });
  }
}

module.exports.save = save;