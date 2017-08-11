import React, {Component} from 'react';
import CamperProfile from './CamperProfile';

import './../styles/components/leaderboard.css';

import axios from 'axios';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(response => {
                console.log(response.data);
                this.setState({
                    data: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <main className="container">
                <header className="leaderboard-header">
                    <p>Name</p>
                    <p>Past 30 days points</p>
                    <p>All time points</p>
                </header>

                <ul>
                    {
                        this.state.data.map((camper, index) => {
                            return <CamperProfile
                                        key={index}
                                        avatar={camper.img}
                                        name={camper.username}
                                        recentPoints={camper.recent}
                                        allTimePoints={camper.alltime}
                                    />
                        })
                    }
                </ul>
            </main>
        );
    }
}

export default LeaderBoard;