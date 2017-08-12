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

        this.allTimePoints = this.allTimePoints.bind(this);
        this.recentPoints = this.recentPoints.bind(this);
    }

    componentDidMount() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(response => {
                this.setState({
                    data: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    allTimePoints() {
        const allTimeArr = Array.from(this.state.data);
        allTimeArr.sort((a, b) => a.alltime - b.alltime).reverse();
        
        this.allTimeBtn.classList.add('active');
        this.recentBtn.classList.remove('active');
        
        this.setState({
            data: allTimeArr
        });
    }
    
    recentPoints() {
        const recentArr = Array.from(this.state.data);
        recentArr.sort((a, b) => a.recent - b.recent).reverse();
        
        this.recentBtn.classList.add('active');
        this.allTimeBtn.classList.remove('active');

        this.setState({
            data: recentArr
        });
    }

    render() {
        return (
            <main className="container">
                <header className="leaderboard-header">
                    <p>Name</p>
                    <p onClick={this.recentPoints} ref={ref => this.recentBtn = ref} className="active">Past 30 days points</p>
                    <p onClick={this.allTimePoints} ref={ref => this.allTimeBtn = ref}>All time points</p>
                </header>

                <ul>
                    {
                        this.state.data.map((camper, index) => {
                            return <CamperProfile key={index} camper={camper} />
                        })
                    }
                </ul>
            </main>
        );
    }
}

export default LeaderBoard;