import { Routes, Route } from 'react-router-dom';
import './App.css';
import Rockets from './routes/Rockets'
import Missions from './routes/Missions'
import Profile from './routes/MyProfile';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
