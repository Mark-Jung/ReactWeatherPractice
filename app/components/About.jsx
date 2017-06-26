var React = require('react');
var EmailForm = require('EmailForm');

var About = React.createClass({
  getInitialState: function () {
    return {
      didSearch: false,
      sender: '',
      message: ''
    };
  },

  handleNewData: function (update) {
    this.setState(update);
  },

  render: function(props){
    var that = this;
    function confirming () {
      if(that.state.didSearch){
        return <div>So {that.state.sender} wants to send {that.state.message} as an email, correct?</div>
      }
    }

    return(
      <div>
        <h1 className="page-title text-center">Email</h1>
        <p>Welcome to the Email page!</p>
        <div>
          {confirming()}
        </div>
        <div>
          <EmailForm onNewData={this.handleNewData}/>
        </div>
      </div>
    )
  }

});

module.exports = About;
