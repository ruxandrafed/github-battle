import React from 'react';
import Prompt from '../components/Prompt';

const PromptContainer = React.createClass({
  // pass content (otherwise we'd have to pass router as a props)
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e) {
    e.preventDefault();
    const { username } = this.state;
    this.setState({
      username: ''
    });
    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        }
      });
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + username);
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
});

export default PromptContainer;