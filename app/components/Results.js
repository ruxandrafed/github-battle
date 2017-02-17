import React, { PropTypes } from 'react';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import { Link } from 'react-router';
import MainContainer from './MainContainer';
import Loading from './Loading';

const StartOver = () => (
  <MainContainer>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-success">Start over</button>
    </Link>
  </MainContainer>
);

const Results = ({ isLoading, scores, playersInfo }) => {
  if (isLoading === true) {
    return <Loading text="One moment" speed={100}/>
  }
  if (scores[0] === scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
      )
  }
  let winningIndex = scores[0] > scores[1] ? 0 : 1;
  let losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={scores[winningIndex]} info={playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={scores[losingIndex]} info={playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

export default Results;