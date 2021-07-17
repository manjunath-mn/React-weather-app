import React from 'react';

class RenderTodayWeather extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        inDegrees : true
      }
    }

    render(){
        
        return (
        
            <div className="panel">
            {(typeof this.props.value.main != "undefined") ? (
              <div className="accordion">
                <div className=" change-value">
                  <button  onClick={() => this.setState({inDegrees : !this.state.inDegrees})}>{this.state.inDegrees ?"Click for Fahrenheit conversion":"Click for Degrees conversion"}</button>
                </div>

                <div className="accordion-content" >
                  <div className="first-line">
                      <img src={"http://openweathermap.org/img/w/"+this.props.value.weather[0].icon+".png"} alt="icon" width="10%" height="10%"/>
                      <p> Weather : {this.props.value.weather[0].main},{this.props.value.weather[0].description}</p>
                  </div>
                  {this.state.inDegrees ? ( 
                    <div className="second-line">
                      <p>Temperature: {Math.round(this.props.value.main.temp-275)}°C</p>
                      <p> Feels like: {Math.round(this.props.value.main.feels_like-275)}°C</p>
                      <p> Min Temp : {Math.round(this.props.value.main.temp_min-275)}°C, Max Temp : {Math.round(this.props.value.main.temp_max-275)}°C</p>
                    </div>) : (
                    <div className="second-line">
                      <p>Temperature:{Math.round(this.props.value.main.temp)}°F</p>
                      <p>Feels like:{Math.round(this.props.value.main.feels_like)}°F</p>
                      <p>Min Temp : {Math.round(this.props.value.main.temp_min)}°F, Max Temp : {Math.round(this.props.value.main.temp_max)}°F</p>
                    </div>)
                    }
                  <div className="third-line">
                    <p> Humidity : {this.props.value.main.humidity}%</p>
                    <p> Pressure: {this.props.value.main.pressure}pa</p>
                  </div>
                </div>
            
                                        
            </div>): ("")}
            </div>
          
        );
    }
}





export default RenderTodayWeather;





















// const report = 
// {
//     "coord": {
//     "lon": -122.08,
//     "lat": 37.39
//     },
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 282.55,
//       "feels_like": 281.86,
//       "temp_min": 280.37,
//       "temp_max": 284.26,
//       "pressure": 1023,
//       "humidity": 100
//     },
//     "visibility": 16093,
//     "wind": {
//       "speed": 1.5,
//       "deg": 350
//     },
//     "clouds": {
//       "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//       "type": 1,
//       "id": 5122,
//       "message": 0.0139,
//       "country": "US",
//       "sunrise": 1560343627,
//       "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
//     }