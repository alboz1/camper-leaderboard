import React from 'react';
import './../styles/components/camper-profile.css';

const CamperProfile = (props) => {
    return (
        <li className="profile">
            <div className="profile-info">
                <img src={props.avatar} alt="avatar" />
                <p className="name">{props.name}</p>
            </div>
            <p className="points" id="30-days-points">{props.recentPoints}</p>
            <p className="points" id="all-time-points">{props.allTimePoints}</p>
        </li>
    );
}

export default CamperProfile;