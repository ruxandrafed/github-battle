import axios from 'axios';

//If we hit API limit, we want these
const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const param = `?client_id=${id}&client_secret=${sec}`;

// returns a promise
function getUserInfo(username = 'ruxandrafed') {
  return axios.get(`https://api.github.com/users/${username + param}`);
}

function getRepos(username) {
  // fetch username repos
  return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);
}

function getTotalStars(repos) {
  // calculate all the stars that the user has
  return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => (
      {
        followers: player.followers,
        totalStars,
        repoCount: player.public_repos
      }
    ));
}

function calculateTotalScores(players) {
  // return an array after doing some fancy algorithms to determine a winner
  return [
    players[0].repoCount * 5 + players[0].followers * 3 + players[0].totalStars,
    players[1].repoCount * 5 + players[1].followers * 3 + players[1].totalStars,
  ]
}

export function getPlayersInfo (players) {
//    axios.all takes an array of promises
//    for each username in our players array, we get back a promise
  return axios.all(players.map((username) => getUserInfo(username)))
    .then((info) => info.map((user) => user.data))
    .catch((err) => { console.warn('Error in getPlayersinfo', err);});
}

export function battle (playersInfo) {
  const playerOneData = getPlayersData(playersInfo[0]);
  const playerTwoData = getPlayersData(playersInfo[1]);
  return axios.all([playerOneData, playerTwoData])
    .then(calculateTotalScores)
    .catch(function(err) {
      console.warn('Error in getPlayersInfo: ', err);
  });
}