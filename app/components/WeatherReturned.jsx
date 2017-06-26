var React = require('react');

//
// var WeatherReturned = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//     return(
//       <div>It's {temp} in {location}</div>
//
//     )
//   }
// });


var WeatherReturned = ({temp, location}) => {
  return(
    <div className="text-center">It's {temp} in {location}</div>
  )
};

module.exports = WeatherReturned;
