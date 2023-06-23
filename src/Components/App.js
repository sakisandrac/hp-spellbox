import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
