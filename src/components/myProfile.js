import React from "react";
import MissionsProfile from "./MissionsProfile";
import { useSelector } from "react-redux"
import Joined from "./display"


const Profile = () => {
    const Rockets = useSelector((state) => state.rockets.rockets)
    const reservedRockets = Rockets.filter((rocket) => rocket.reserved === true)

    return(
        <div className="profile-container">
            <Joined myRockets= {reservedRockets} />
        <MissionsProfile />
        </div>
    )
}

export default Profile;