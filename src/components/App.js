import React, { Component } from 'react';
import Leaderboard from './LeaderBoard';
import './../styles/components/app.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>FreeCodeCamp Leaderboard</h1>

                <Leaderboard />
                
                <footer>
                    <h3>Made by Erd Vuca</h3>
                </footer>
            </div>
        );
    }
}

export default App;