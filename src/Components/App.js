import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Navigation from './Navigation/Navigation';
import AllSpells from './AllSpells/AllSpells';
import { useState, useEffect } from 'react';
import { MySpells } from './MySpells/MySpells';

function App() {
  //STATE
  const [user, setUser] = useState({
    name: "Wizard",
    house:"",
    savedSpells: [],
    clicks: 0
  });
  const [allSpells, setAllSpells] = useState([]);
  const [randomSpell, setRandomSpell] = useState([]);

//USE EFFECT
  useEffect(() => {
    fetch('https://wizard-world-api.herokuapp.com/Spells')
    .then(res => res.json())
    .then(data => {
      setAllSpells(data)
      setRandomSpell(data[getRandomIndex(data)])
    })
  },[])

  useEffect(() => {
    setRandomSpell(allSpells[getRandomIndex(allSpells)])
  }, [user.clicks])

  const getRandomIndex = (allSpells) => {
    return Math.floor(Math.random() * allSpells.length)
  }

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Homepage user={user} setUser={setUser} randomSpell={randomSpell}/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/allSpells" element={<AllSpells user={user} allSpells={allSpells}/>}/>
      <Route path="/mySpells" element={<MySpells user={user} setUser={setUser}/>}/>
    </Routes>
    </>
  );
}

export default App;
