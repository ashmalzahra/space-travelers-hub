import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/myProfile';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
      <Route path="/" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
