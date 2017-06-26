var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherReturned = require('WeatherReturned');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      // alert(errorMessage);
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 classname="text-center">Fetching Weather...</h3>;

      } else if (temp && location) {
        return <WeatherReturned temp={temp} location={location}/>;
      }
    }
    function renderError () {
      if(typeof errorMessage === 'string'){
        return (
          <ErrorModal/>
        )
      }
    }

    return(
      <div>
        <div>
          <h1 className="text-center page-title">Get Weather</h1>
        </div>
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
        </div>
        <div>
          {renderMessage()}
          {renderError()}
        </div>
      </div>
    )
  }
});

module.exports = Weather;
