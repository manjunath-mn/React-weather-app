import React from 'react';
import '../styles/weather.css'
import { Component } from 'react';
import TodayWeather from './today-weather';
import { weeklyReport } from '../resources/weeklyReport';
import { monthlyReport } from '../resources/monthlyReport';
import WeeklyWeather from './weekly-weather';
import MonthlyWeather from './monthly-weather';

const api = {
    base : 'https://api.openweathermap.org/data/2.5/weather/',
    key : '98c00572adfe574882fa2fca70302d90'
  }

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption : 'Today',
            selectedCityName : '',
            report : {}
        }
    }

    handleDropDown = (e) => {
        this.setState({selectedOption : e.target.value, report : {}});
    }
    handleInputChange = (e) => {
        this.setState({selectedCityName : e.target.value});
    }
    getWeatherData = async () => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ title: 'React PUT Request Example' })
          };
          
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        if(this.state.selectedOption === "Today"){
            await fetch(`${proxy}${api.base}?q=${this.state.selectedCityName}&APPID=${api.key}`,requestOptions)
                    .then(response =>response.json()) 
                    .then(data => { 
                    this.setState({report : data})

                    })
        }
        else if(this.state.selectedOption === "Weekly") {
            
            this.setState({report : weeklyReport})
        }    
        
        else {

            this.setState({report : monthlyReport})
        }
    }

    render() {

        return(
            <div className="App">  
                <div className="header">
                    <h1 >Simple weather Request</h1>
                </div>  
                
                <div className = "input-drop-down-div">
                    <label htmlFor="menu" className="label-text">Choose the type of weather data required : </label>
                    <select 
                        id="menu"
                        className="form-select" 
                        defaultValue="Today"
                        onChange={this.handleDropDown}
                    >   
                        <option value="Today">Today </option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </div> 

                <div className="input-city-div">    
                    <input 
                        id="city-name" 
                        className="city-name"
                        type="text"  
                        placeholder="   Enter City Name   " 
                        onChange = {this.handleInputChange}
                    />
                
                    <button 
                        className = "submit-button "
                        type="Submit"
                        onClick={this.getWeatherData} 
                    >Submit</button>    
                </div>
                    
                
                {this.state.selectedOption === "Today" ? (<TodayWeather value={this.state.report }></TodayWeather>)
                    : this.state.selectedOption === "Weekly" ?(<WeeklyWeather value={this.state.report }></WeeklyWeather>)
                    : <MonthlyWeather value={this.state.report}> </MonthlyWeather> 
                } 
            </div>

            
        );
    }

    
}

export default Weather;