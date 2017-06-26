var React = require('react');


var EmailForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var update = {};

    var message = this.refs.message.value;
    var sender = this.refs.sender.value;

    if(sender.length > 0 && message.length > 0){
      this.refs.sender.value = '';
      this.refs.message.value = '';
      update.sender = sender;
      update.message = message;
      update.didSearch = true;
    }

    this.props.onNewData(update);
  },
  render: function() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="sender"/>
        <textarea ref="message"/>
        <button>Next</button>
      </form>
    );
  }
});

module.exports = EmailForm;
