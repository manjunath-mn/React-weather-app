import React from 'react';
import Accordion from './Accordion';
import Card from './card';

class RenderWeeklyWeather extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            inDegrees : true
        }
    
    }
    
    render(){
      
        return (
                <div className="panel">
                    {(typeof this.props.value.city != "undefined") ? (
                        <div className="accordion">   
                            <div className="change-value">
                                <button  onClick={() => this.setState({inDegrees : !this.state.inDegrees})}>{this.state.inDegrees ?"Click for Fahrenheit conversion":"Click for Degrees conversion"}</button>
                            </div>
                            {this.props.value.list.map((a,index) => (
                                <Accordion item = {a} index ={index} inDegrees={this.state.inDegrees}>

                                </Accordion> 

                                // <Card item = {a} index ={index}>

                                // </Card> 
                            ))}
                        </div>) : ("")  
                    }
                 
                </div>
                
        );
    }
}





export default RenderWeeklyWeather;
