import React, { Component } from 'react'

export class Accordion extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive : false,
        }

    }
    render() {
        
        var t1 = new Date(this.props.item.sunrise)
        var sunriseTime = t1.getHours()+":"+t1.getMinutes()+":"+t1.getSeconds();
        var t2 = new Date(this.props.item.sunset)
        var sunsetTime = t2.getHours()+":"+t2.getMinutes()+":"+t2.getSeconds();
    
        return (
            
            <React.Fragment>

                {(typeof this.props.item.dt != "undefined") ? (
                <div key={this.props.index}>
                        <div className="accordion-title "  onClick={()=> this.setState({isActive:!this.state.isActive})} >  
                        
                            <div >
                                <strong>{this.props.item.date},</strong>
                                <img src={"http://openweathermap.org/img/w/"+this.props.item.weather[0].icon+".png" } alt="icon"/>
                                {this.props.item.weather[0].description}
                            </div>
                            <div>{this.state.isActive ? '-' : '+'}</div>
                        
                        </div>   
                    
                        {this.state.isActive &&
                        <div className="accordion-content ">
                            {this.props.inDegrees ? (<div className="first-line">
                                <img src={"http://openweathermap.org/img/w/"+this.props.item.weather[0].icon+".png"} alt="icon"/>
                                <p> {Math.round(this.props.item.temp.day-275)}°C</p>  
                                <p> {this.props.item.weather[0].main},{this.props.item.weather[0].description}</p>
                                
                            </div>):(<div className="first-line">
                                <img src={"http://openweathermap.org/img/w/"+this.props.item.weather[0].icon+".png"} alt="icon"/>
                                <p>{Math.round(this.props.item.temp.day)}°F</p>  
                                <p> {this.props.item.weather[0].main},{this.props.item.weather[0].description}</p>
                            </div>)}

                            {this.props.inDegrees ? (
                            <div className="first-line-second">  
                                <p>The high will be {Math.round(this.props.item.temp.max-275)}°C, the low will be {Math.round(this.props.item.temp.min-275)}°C.</p>

                            </div>
                            ) : (
                                <div className="first-line-second">    
                                <p>The high will be {Math.round(this.props.item.temp.max)}°F, the low will be {Math.round(this.props.item.temp.min)}°F.</p>
                            </div>
                            )}
                            <div className="second-line">
                                <p> Humidity : {this.props.item.humidity}% </p>
                                <p> Pressure : {this.props.item.pressure}pa</p>
                            </div>

                            {this.props.inDegrees ? (    
                            <div className="third-line"> 
                                <table className="table ">
                                    <thead>
                                        <tr className="table">
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
                                            <td >{Math.round(this.props.item.temp.morn-275)}°C</td>
                                            <td>{Math.round(this.props.item.temp.day-275)}°C</td>
                                            <td>{Math.round(this.props.item.temp.eve-275)}°C</td>
                                            <td>{Math.round(this.props.item.temp.night-275)}°C</td>
                                        </tr>
                                        <tr>
                                            <td>Feels Like</td>
                                            <td >{Math.round(this.props.item.feels_like.morn-275)}°C</td>
                                            <td>{Math.round(this.props.item.feels_like.day-275)}°C</td>
                                            <td>{Math.round(this.props.item.feels_like.eve-275)}°C</td>
                                            <td>{Math.round(this.props.item.feels_like.night-275)}°C</td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>):(
                                <div className="third-line"> 
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
                                            <td >{Math.round(this.props.item.temp.morn)}°F</td>
                                            <td>{Math.round(this.props.item.temp.day)}°F</td>
                                            <td>{Math.round(this.props.item.temp.eve)}°F</td>
                                            <td>{Math.round(this.props.item.temp.night)}°F</td>
                                        </tr>
                                        <tr>
                                            <td>Feels Like</td>
                                            <td >{Math.round(this.props.item.feels_like.morn)}°F</td>
                                            <td>{Math.round(this.props.item.feels_like.day)}°F</td>
                                            <td>{Math.round(this.props.item.feels_like.eve)}°F</td>
                                            <td>{Math.round(this.props.item.feels_like.night)}°F</td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                                
                            )}
                            
                            <div className="fourth-line">
                                <p>Sunrise: { sunriseTime}</p>
                                <p>Sunset: { sunsetTime }</p> 
                            </div>
                        </div>
                    }
                </div>) : ("")}
            </React.Fragment>
        )
    }
}

export default Accordion
