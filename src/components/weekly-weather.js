import React from 'react';
import Accordion from './accordion'


class WeeklyWeather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inDegrees : true
        }
    }

    updateState = () => {
        this.setState({inDegrees : !this.state.inDegrees})
    }

    render(){
        const {city,list} = this.props.value;

        return (
            <React.Fragment >
                <div className="panel">
                    {(typeof city != "undefined") ? (
                
                    <div className="accordion">
                        <div className="change-value">
                            <button  onClick={this.updateState}>{this.state.inDegrees ?"Click for Fahrenheit conversion":"Click for Degrees conversion"}</button>
                        </div>

                        {list.map((a,index) => (
                            <Accordion item = {a} index = {index} inDegrees = {this.state.inDegrees}>

                            </Accordion>
                            
                        ))}
                    </div> ) : (null)}
                </div>
            </React.Fragment>    
            
          
        );
    }
}





export default WeeklyWeather;
