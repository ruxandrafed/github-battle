var React = require('react');

var ConfirmBattle = React.createClass({
  render: function() {
    return (this.props.isLoading === true)
      ? (<p> LOADING! </p>)
      : (<p> Confirm Battle </p>)
  }
});

module.exports = ConfirmBattle;