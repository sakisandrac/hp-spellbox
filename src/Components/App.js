import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation';
import AllSpells from './AllSpells/AllSpells';

function App() {
  return (
    <>
    
    <Navigation/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/allSpells" element={<AllSpells/>}></Route>
    </Routes>
    </>
  );
}

export default App;
