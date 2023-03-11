import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './components/Rockets';
import MissionsContainer from './components/MissionsContainer';
import Profile from './components/myProfile';
import './Myprofile.css';
import Navbar from './components/Navbar';

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="missions" element={<MissionsContainer />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
=======
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
>>>>>>> 9add45350724ad927b921ddfda852e38054be055
  );
}

export default App;
