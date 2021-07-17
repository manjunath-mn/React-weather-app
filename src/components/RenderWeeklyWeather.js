import React from 'react';
import Accordion from './Accordion'


class RenderWeeklyWeather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inDegrees : true
        }
    }
    
    render(){
      
        return (
            <React.Fragment >
                {(typeof this.props.value.city != "undefined") ? (
                <div className="panel">
                
                    <div className="accordion">
                        <div className="change-value">
                            <button  onClick={() => this.setState({inDegrees : !this.state.inDegrees})}>{this.state.inDegrees ?"Click for Fahrenheit conversion":"Click for Degrees conversion"}</button>
                        </div>

                        {this.props.value.list.map((a,index) => (
                             <Accordion item = {a} index = {index} inDegrees = {this.state.inDegrees}>

                             </Accordion>
                            
                        ))}

                    </div>

                </div> ) : ("")}
            </React.Fragment>    
            
          
        );
    }
}





export default RenderWeeklyWeather;
