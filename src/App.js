import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/myProfile';
import Layout from './components/Layout';
import MissionsContainer from './components/MissionContaier';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Rockets />} />
      <Route path="missions" element={<MissionsContainer />} />
      <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
