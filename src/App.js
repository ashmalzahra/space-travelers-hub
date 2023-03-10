import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import MissionsContainer from './components/MissionsContainer';
import Profile from './components/myProfile';
import './Myprofile.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route index element={<Rockets />} />
      <Route path="/missions" element={<MissionsContainer />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </div>
  );
}

export default App;
