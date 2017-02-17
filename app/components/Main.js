import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../main.css'); // with webpack

class Main extends Component {
  render () {
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
};

export default Main;

/*this.props.children needs a key so we attach a key prop by using cloneElement*/
