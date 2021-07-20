import React from 'react';

class TodayWeather extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        inDegrees : true
      }
      
    }
    updateState = () => {
      this.setState({inDegrees : !this.state.inDegrees})
    }

    displayWeatherDescription() {
      const {weather} = this.props.value;  
      return(
        <React.Fragment>
          <div className="first-line">
            <img src={"http://openweathermap.org/img/w/"+weather[0].icon+".png"} alt="icon" />
            <p> Weather : {weather[0].main},{weather[0].description}</p>
          </div>
        </React.Fragment>
      )
    }
    displayTemperatureHumidity() {
      const {main,wind} = this.props.value
      return(
        <React.Fragment>
          {this.state.inDegrees ? ( 
                <div className="second-line">
                  <p>Temperature: {Math.round(main.temp-275)}°C</p>
                  <p> Feels like: {Math.round(main.feels_like-275)}°C</p>
                  <p> Min Temp : {Math.round(main.temp_min-275)}°C, Max Temp : {Math.round(main.temp_max-275)}°C</p>
                </div>) : (
                <div className="second-line">
                  <p>Temperature:{Math.round(main.temp)}°F</p>
                  <p>Feels like:{Math.round(main.feels_like)}°F</p>
                  <p>Min Temp : {Math.round(main.temp_min)}°F, Max Temp : {Math.round(main.temp_max)}°F</p>
                </div>)
                }
              <div className="third-line">
                <p> Humidity : {main.humidity}%</p>
                <p> Pressure: {main.pressure}pa</p>
                <p> Wind speed: {wind.speed}km/h</p>

              </div>
        </React.Fragment>
      )
    }

    displayTime(){

      const {sunrise,sunset} = this.props.value.sys;
      var t1 = new Date(sunrise)
      var sunriseTime = t1.getHours()+":"+t1.getMinutes()+":"+t1.getSeconds();
      var t2 = new Date(sunset)
      var sunsetTime = t2.getHours()+":"+t2.getMinutes()+":"+t2.getSeconds();

      return(
          <div className="fourth-line">
              <p>Sunrise: { sunriseTime}</p>
              <p>Sunset: { sunsetTime }</p> 
          </div>
      )
    }

    render(){
      const id = this.props.value.id;
      const degree = this.state.inDegrees;
      return (
        
        <div className="panel">
        {(typeof id != "undefined") ? (
          <div className="accordion">
            
            <div className=" change-value">
              <button  onClick={this.updateState}>{degree ?"Click for Fahrenheit conversion":"Click for Degrees conversion"}</button>
            </div>

            <div className="accordion-content" >
              {this.displayWeatherDescription()}
              {this.displayTemperatureHumidity()}
              {this.displayTime()}
            </div> 

          </div>): (null)}
        </div>
          
      );
    }
}





export default TodayWeather;





















