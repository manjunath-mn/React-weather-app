import React, { Component } from 'react'

export class Card extends Component {

    constructor(props){
        super(props);
        this.state = {
            isActive : false
        }

    }
    render() {
        
        var t1 = new Date(this.props.item.sunrise)
        var sunriseTime = t1.getHours()+":"+t1.getMinutes()+":"+t1.getSeconds();
        var t2 = new Date(this.props.item.sunset)
        var sunsetTime = t2.getHours()+":"+t2.getMinutes()+":"+t2.getSeconds();
    
        return (
            
            <div>
                {(typeof this.props.item.dt != "undefined") ? (
                <div key={this.props.index}>
                        <div className="card"  style={{height: 8 + 'em'}}>
                            <div className="card-body">
                                <div className="card-title"><strong>{this.props.item.date},</strong></div>
                                <img src={"http://openweathermap.org/img/w/"+this.props.item.weather[0].icon+".png" } alt="icon"/>
                                <button className="btn btn-primary" onClick={()=> this.setState({isActive:!this.state.isActive})}>{this.state.isActive ? 'less' : 'more'}</button>
                            </div>
                        </div>   
                    
                        {this.state.isActive &&
                        <div className="card-body ">
                            <div className="first-line">
                                <img src={"http://openweathermap.org/img/w/"+this.props.item.weather[0].icon+".png"} alt="icon"/>
                                <p><strong> {Math.round(this.props.item.temp.day-275)}°C</strong></p>
                                <p> {this.props.item.weather[0].main},{this.props.item.weather[0].description}</p>
                            </div>
                            <div className="first-line-second">    
                                <p>The high will be {Math.round(this.props.item.temp.max-275)}°C, the low will be {Math.round(this.props.item.temp.min-275)}°C.</p>
                            </div>
                            <div className="second-line">
                                <p> <strong>Humidity : </strong>{this.props.item.humidity}% </p>
                                <p> <strong>Pressure</strong> : {this.props.item.pressure}pa</p>
                            </div>

                            <div className="third-line"> 
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Morning</th>
                                            <th scope="col">Afternoon</th>
                                            <th scope="col">Evening</th>
                                            <th scope="col">Night</th>
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
                            </div>
                            
                            <div className="fourth-line">
                                <strong>Sunrise:</strong>{ sunriseTime}
                                <strong>Sunset:</strong> { sunsetTime }
                            </div>
                        </div>
                    }
                </div>) : ("")}
            </div>
        )
    }
}

export default Card
