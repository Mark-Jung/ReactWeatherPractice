var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherReturned = require('WeatherReturned');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({isLoading: true});


    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false});
    });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;

      } else if (temp && location) {
        return <WeatherReturned temp={temp} location={location}/>;
      }
    }

    return(
      <div>
        <div>
          <h3>Weather Component</h3>
        </div>
        <div>
          <WeatherForm onSearch={this.handleSearch}/>
        </div>
        <div>
          {renderMessage()}
        </div>
      </div>
    )
  }
});

module.exports = Weather;
