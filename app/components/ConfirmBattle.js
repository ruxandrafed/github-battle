var React = require('react');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var ConfirmBattle = React.createClass({
  render: function() {
    return (this.props.isLoading === true)
      ? (<p> LOADING! </p>)
      : (<p> Confirm Battle {puke(this.props)} </p>)
  }
});

module.exports = ConfirmBattle;