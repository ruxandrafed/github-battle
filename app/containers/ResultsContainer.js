import React from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers';


const ResultsContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount () {
//    we pass state in handleInitiateBattle
//    console.log(this.props.location.state.playersInfo);
    battle(this.props.location.state.playersInfo)
      .then((scores) => {
        this.setState({
          scores: scores,
          isLoading: false
        })
      });
  },
  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    )
  }
});

export default ResultsContainer;