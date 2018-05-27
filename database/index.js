const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  owner: String,
  forks: Number,  
});

let Repo = mongoose.model('Repo', repoSchema);
 
let save = (data) => {
 //Repo.collection.drop();
  for (var i = 0; i < data.length; i++) {
    var user = new Repo({ 'repoName': data[i].name, 'owner': data[i].owner.login, 'forks': data[i].forks_count});
    user.save(function(err, result){
      // console.log(result);
      if (err) {
        console.log(err);
      }
    });
  }
}
let grabData = (callback) => {
  Repo.find(function (err, result) {
    if (err) {
      console.log(err);
    }
    // result = result.sort(function(a,b) {
    //   return b.forks_count - a.forks_count;
    // });
    // console.log(result);
    callback(result);
  });
}
// console.log(grabData());
module.exports.save = save;
module.exports.grabData = grabData;