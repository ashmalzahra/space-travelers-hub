import PropTypes from 'prop-types';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toogleReserve } from '../Redux/MissionsSlice';

const Mission = ({
  missionId, missionName, description, reserved,
}) => {
  const dispatch = useDispatch();
  const toogle = () => {
    dispatch(toogleReserve(missionId));
  };
  return (
    <>
      <tr key={missionId}>
        <td><b>{missionName}</b></td>
        <td>{description}</td>
        <td className="px-4 align-middle">
          {
                reserved ? (
                  <Badge className="bg-info">Active Member</Badge>
                ) : (
                  <Badge className="bg-secondary">NOT A MEMBER</Badge>
                )
            }

        </td>
        <td className="px-4 align-middle">
          {
                reserved ? (
                  <Button variant="outline-danger" onClick={toogle}>Leave&nbsp;Mission</Button>
                ) : (
                  <Button variant="outline-secondary" onClick={toogle}>Join&nbsp;Mission</Button>
                )
            }

        </td>
      </tr>
    </>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
