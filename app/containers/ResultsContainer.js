import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';


var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
//    we pass state in handleInitiateBattle
//    console.log(this.props.location.state.playersInfo);
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render: function() {
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