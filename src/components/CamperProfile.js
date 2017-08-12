import React from 'react';
import './../styles/components/camper-profile.css';

const CamperProfile = (props) => {
    return (
        <li className="profile">
            <div className="profile-info">
                <img src={props.camper.img} alt="avatar" />
                <a href={`https://www.freecodecamp.com/${props.camper.username}`} target="_blank" className="name">{props.camper.username}</a>
            </div>
            <p className="points">{props.camper.recent}</p>
            <p className="points">{props.camper.alltime}</p>
        </li>
    );
}

export default CamperProfile;