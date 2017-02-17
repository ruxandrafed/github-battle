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

async function getPlayersData(player) {
  try {
    const repos = await getRepos(player.login);
    const totalStars = await getTotalStars(repos);
    return {
      followers: player.followers,
      totalStars,
      repoCount: player.public_repos
    }
  } catch (e) {
    console.warn('Error in getPlayersData: ', error);
  }
}

function calculateTotalScores(players) {
  // return an array after doing some fancy algorithms to determine a winner
  return [
    players[0].repoCount * 5 + players[0].followers * 3 + players[0].totalStars,
    players[1].repoCount * 5 + players[1].followers * 3 + players[1].totalStars,
  ]
}

export async function getPlayersInfo (players) {
  try {
    const info = await Promise.all(players.map((username) => getUserInfo(username)));
    return info.map((user) => user.data);
  } catch (e) {
    console.warn('Error in getPlayersInfo: ', error);
  }
}

export async function battle (playersInfo) {
  try {
    const playerOneData = getPlayersData(playersInfo[0]);
    const playerTwoData = getPlayersData(playersInfo[1]);
    const data = await Promise.all([playerOneData, playerTwoData]);
    return await calculateTotalScores(data);
  } catch (e) {
    console.warn('Error in battle: ', error);
  }
}