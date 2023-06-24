import React, { useEffect, useState } from 'react';
import './Homepage.css';
import RandomSpell from '../RandomSpell/RandomSpell';

const Homepage = () => {

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

//FUNCTIONS
  const selectHouse = (e) => {
    const {name, value} = e.target;

    setUser(prev => {
      return {...prev, [name]: value}
    });
  }

  const getRandomIndex = (allSpells) => {
    return Math.floor(Math.random() * allSpells.length)
  }

  const saveSpell = () => {
    const saved = user.savedSpells.some(spell => {
      return spell.id === randomSpell.id
    })

    if (!saved) {
      setUser(prev => {
        return {
          ...prev,
          savedSpells: [...prev.savedSpells, randomSpell]
        }
      })
    }
    console.log(user)
  }

  const getRandomSpell = () => {
    setUser(prev => {
      return {...prev, clicks: prev.clicks + 1}
    })
  }

  return (
    <div className={`main-page-container${user.house ? "-" + user.house : ""}`}>
      <div className={`main-container ${user.house ? user.house : ""}`}>
        <main className="homepage-container" style={user.house? {color:"white"}: {color:"black"}}>
          <h1>{`Hello ${user.name}`}</h1>
          <label className="house-label" htmlFor="house">Choose Your House:</label>
          <select
            className="house-selector"
            id="house"
            value={user.house}
            onChange={selectHouse}
            name="house">
            <option value="">---</option>
            <option value="gryffindor">Gryffindor</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="slytherin">Slytherin</option>
          </select>
        </main>
      </div>
      <div className="random-spell-container">
        <RandomSpell randomSpell={randomSpell} />
      </div>
      <div className="btn-container">
        <button className={`save-btn${user.house ? "-" + user.house : ""}`} onClick={saveSpell}>Save Spell</button>
        <button className={`save-btn${user.house ? "-" + user.house : ""}`} onClick={getRandomSpell}>Get Random Spell</button>
      </div>
    </div>
  )
}

export default Homepage