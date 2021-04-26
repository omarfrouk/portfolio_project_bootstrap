import React from 'react'; 
import "./OurTeam.css";

const OurTeam = (props) => {
    return (
        <div className="teamMember col-md-6 col-lg-4">
            <div className="memberImg">
                <img src={props.image} 
                     alt="member image" 
                />
            </div>
            <h4 className="mt-2">{props.name}</h4>
            <p>{props.position}</p> 
        </div>
    )
}

export default OurTeam;