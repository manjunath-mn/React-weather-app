import React, { Component } from 'react'
import '../styles/accordion.css'


export class Accordion extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive : false,
        }
    }

    updateState = () => {
        this.setState({isActive : !this.state.isActive})
    }

    displayAccordionTitle() {
        const item = this.props.item;
        const active = this.state.isActive;
        return(
            <div className="accordion-title "  onClick={this.updateState} >                          
                <div >
                    <strong>{item.date},</strong>
                    <img src={"http://openweathermap.org/img/w/"+item.weather[0].icon+".png" } alt="icon"/>
                    {item.weather[0].description}
                </div>
                <div>{active ? '-' : '+'}</div>
            </div>
        )
    }

    displayWeatherDescription() {
        const {weather,temp} = this.props.item;
        const degree = this.props.inDegrees;
        return(
            <React.Fragment>
                {degree ? (<div className="first-line">
                    <img src={"http://openweathermap.org/img/w/"+weather[0].icon+".png"} alt="icon"/>
                    <p> {Math.round(temp.day-275)}°C</p>  
                    <p> {weather[0].main},{weather[0].description}</p>
                    
                    </div>):(<div className="first-line">
                        <img src={"http://openweathermap.org/img/w/"+weather[0].icon+".png"} alt="icon"/>
                        <p>{Math.round(temp.day)}°F</p>  
                        <p> {weather[0].main},{weather[0].description}</p>
                    </div>)}

                    {degree ? (
                    <div className="first-line-second">  
                        <p>The high will be {Math.round(temp.max-275)}°C, the low will be {Math.round(temp.min-275)}°C.</p>

                    </div>
                    ) : (
                        <div className="first-line-second">    
                        <p>The high will be {Math.round(temp.max)}°F, the low will be {Math.round(temp.min)}°F.</p>
                    </div>
                )}
            </React.Fragment>
        )
    }
    displayTimeAndHumidity(){

        const {humidity,pressure,sunrise,sunset} = this.props.item;
        var t1 = new Date(sunrise)
        var sunriseTime = t1.getHours()+":"+t1.getMinutes()+":"+t1.getSeconds();
        var t2 = new Date(sunset)
        var sunsetTime = t2.getHours()+":"+t2.getMinutes()+":"+t2.getSeconds();

        return(
            <React.Fragment>
                <div className="second-line">
                    <p> Humidity : {humidity}% </p>
                    <p> Pressure : {pressure}pa</p>
                </div>
                <div className="fourth-line">
                    <p>Sunrise: { sunriseTime}</p>
                    <p>Sunset: { sunsetTime }</p> 
                </div>
            </React.Fragment>
        )
    }

    displayTemperatureTable(){
        const {temp, feels_like} = this.props.item;
        const degree = this.props.inDegrees;
        return(

            <div className="third-line"> 
                {degree ? 
                    <table className="table ">
                        <thead>
                            <tr>
                                <th ></th>
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Evening</th>
                                <th>Night</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td >{Math.round(temp.morn-275)}°C</td>
                                <td>{Math.round(temp.day-275)}°C</td>
                                <td>{Math.round(temp.eve-275)}°C</td>
                                <td>{Math.round(temp.night-275)}°C</td>
                            </tr>
                            <tr>
                                <td>Feels Like</td>
                                <td >{Math.round(feels_like.morn-275)}°C</td>
                                <td>{Math.round(feels_like.day-275)}°C</td>
                                <td>{Math.round(feels_like.eve-275)}°C</td>
                                <td>{Math.round(feels_like.night-275)}°C</td>
                            </tr>
                        </tbody>                                    
                    </table>:(
                                 
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Morning</th>
                                <th>Afternoon</th>
                                <th>Evening</th>
                                <th>Night</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td >{Math.round(temp.morn)}°F</td>
                                <td>{Math.round(temp.day)}°F</td>
                                <td>{Math.round(temp.eve)}°F</td>
                                <td>{Math.round(temp.night)}°F</td>
                            </tr>
                            <tr>
                                <td>Feels Like</td>
                                <td >{Math.round(feels_like.morn)}°F</td>
                                <td>{Math.round(feels_like.day)}°F</td>
                                <td>{Math.round(feels_like.eve)}°F</td>
                                <td>{Math.round(feels_like.night)}°F</td>
                            </tr>
                        </tbody>     
                    </table>
                )}
            </div>
        )
    }
    
    render() {
        
        const {weather} = this.props.item;
        const {index} = this.props;
        return (
            
            <React.Fragment>

                {(typeof weather != "undefined") ? (
                <div key={index}>
                        {this.displayAccordionTitle()}

                        {this.state.isActive &&
                            <div className="accordion-content ">
                                {this.displayWeatherDescription()}
                                
                                {this.displayTemperatureTable()}
                                
                                {this.displayTimeAndHumidity()}
                            </div>
                        }   
                </div>) : (null)}
            </React.Fragment>
        )
    }
}

export default Accordion
