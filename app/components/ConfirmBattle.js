import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { space } from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from './Loading';

const ConfirmBattle = ({ isLoading, playersInfo, onInitiateBattle }) =>
  (isLoading === true)
    ? (<Loading speed={800} text="Waiting"/>)
    : (<MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header="Player One">
            <UserDetails info={playersInfo[0]}/>
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails info={playersInfo[1]}/>
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={space}>
            <button type="button" className="btn btn-lg btn-success" onClick={onInitiateBattle}>
              INITIATE BATTLE
            </button>
          </div>
          <div className='col-sm-12' style={space}>
            <Link to="/playerOne">
              <button type="button" className="btn btn-lg btn-warning" onClick={onInitiateBattle}>
                RESELECT PLAYERS
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
  );

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
};

export default ConfirmBattle;