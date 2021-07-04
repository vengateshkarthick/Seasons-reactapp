import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spiner';
import SeasonsDisplay from './SeasonDisplay';

class App extends Component {
    state = { lat:null ,errorMessage:null}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message}));
    }
    renderContent(){
        if(this.state.lat){
            return <SeasonsDisplay lat={this.state.lat}/>
        }
        if(this.state.errorMessage){
        return <div className="parent"><h3 className="content">Error : {this.state.errorMessage}</h3></div>
        }
        
        return <Spinner message="Please accept loaction request"/>
        
    }
   
    render() { 
        return this.renderContent();
        
    }
}
 
export default App;

ReactDOM.render(<App/>,document.getElementById("root"));