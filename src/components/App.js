import React from 'react';
import Leaderboard from './LeaderBoard';
import './../styles/components/app.css';

const App = () => {
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

export default App;