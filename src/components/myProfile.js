import { useSelector } from "react-redux"


const Profile = () => {
    const Rockets = useSelector((state) => state.rockets.rockets)
    const reservedRockets = Rockets.filter((rocket) => rocket.reserved === true)

    return(
        <>
        <h3>My Rockets</h3>
        <ul>
                {
                    reservedRockets.map((rocket) => {
                        <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default Profile