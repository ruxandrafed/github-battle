var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
});

//var Main = (props) => (
//  <div className="main-container">
//    {props.children}
//  </div>
//);

module.exports = Main;