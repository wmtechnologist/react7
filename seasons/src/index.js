import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadSpinner from './LoadSpinner';
import Clock from './Clock';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         lat: null,
    //         errorMessage: '',
    //     };
    // }

    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat : position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    // componentDidUpdate(){
    //     console.log("My component did rerender");
    // }

    // componentWillUnmount(){

    // }
    
    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if( !this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <LoadSpinner message="Please accept location request"/>;
    }
    

    render(){
        return(
            <div className="border red">
                <Clock />
                {this.renderContent()}
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));