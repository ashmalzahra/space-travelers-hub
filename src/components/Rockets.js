import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../Redux/RocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.rockets.ifSucceed);
  const isLoading = useSelector((store) => store.rockets.isLoading);
  const rockets = useSelector((store) => store.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [ifSucceed, dispatch]);

  let content;
  if (isLoading) {
    content = (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else if (ifSucceed) {
    content = rockets.map((item) => (
      <Rocket
        key={item.rocket_id}
        rocket={item}
      />
    ));
  } else {
    content = (
      <div>
        <p>Something went wrong...</p>
      </div>
    );
  }
  return (
    <div>{content}</div>
  );
};

export default Rockets;
