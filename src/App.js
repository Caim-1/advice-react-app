import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice: '' };

    // This executes exactly at the render of the component.
    componentDidMount() {
        console.log('Component did mount.');
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;

                this.setState({
                    advice // If value is called the same as property, don't need to write 'advice: advice'.
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { advice } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;