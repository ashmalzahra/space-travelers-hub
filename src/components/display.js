const Joined = (props) => {
    const { myRockets } = props;
    return (
      <>
        <h3>My Rockets</h3>
        <ul>
          {myRockets.map((rocket) => (
            <li key={rocket.rocket_id}>
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </>
    );
  };

  export default Joined;