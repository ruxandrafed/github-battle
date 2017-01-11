var axios = require('axios');

//If we hit API limit, we want these
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

// returns a promise
function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
//    axios.all takes an array of promises
//    for each username in our players array, we get back a promise
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersinfo', err);
    });
  }
};

module.exports = helpers;