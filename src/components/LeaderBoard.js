import React, {Component} from 'react';
import './../styles/components/leaderboard.css';

class LeaderBoard extends Component {
    render() {
        return (
            <main className="container">
                <header className="leaderboard-header">
                    <p>Name</p>
                    <p>Past 30 days points</p>
                    <p>All time points</p>
                </header>
            </main>
        );
    }
}

export default LeaderBoard;