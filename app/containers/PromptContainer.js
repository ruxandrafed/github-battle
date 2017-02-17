import React, { Component } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends Component {
  constructor () {
    super();
    this.state = {
      username: ''
    }
  }
  handleUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  }
  handleSubmitUser (e) {
    e.preventDefault();
    const { username } = this.state;
    this.setState({
      username: ''
    });
    const { playerOne } = this.props.routeParams;
    if (playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: username,
        }
      });
    } else {
      // go to /playerTwo
      this.context.router.push(`/playerTwo/${username}`);
    }
  }
  render () {
    return (
      <Prompt
        onSubmitUser={() => this.handleSubmitUser()}
        onUpdateUser={() => this.handleUpdateUser()}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
};

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default PromptContainer;