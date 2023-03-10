import { useSelector } from "react-redux"
import Joined from "./display"


const Profile = () => {
    const Rockets = useSelector((state) => state.rockets.rockets)
    const reservedRockets = Rockets.filter((rocket) => rocket.reserved === true)

    return(
        <>
        <Joined myRockets= {reservedRockets} />
        </>
    )
}

export default Profile