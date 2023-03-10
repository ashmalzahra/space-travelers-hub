import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import MissionsContainer from './components/MissionsContainer';
import Profile from './components/myProfile';
import Header from './components/Header';
import './Myprofile.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
      <Route path="/" element={<Rockets />} />
      <Route path="rockets" element={<Rockets />} />
      <Route path="missions" element={<MissionsContainer />} />
      <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
