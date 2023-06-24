import React, { useState } from 'react';
import './AllSpells.css'

const AllSpells = ({allSpells, user}) => {

  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e) => {
    const {value} = e.target
    setSearchTerm(value)
  };

  const searchSpells = () => {
    const searchedName = searchTerm.toLowerCase();

    const searchedspells = allSpells.filter((spell) => {
      return spell.name.toLowerCase().includes(searchedName);
    });

    return searchedspells;
  }

  return (
    <>
    <div className={`spell-page-container${user.house ? "-" + user.house : ""}`}>
      <h1 className='all-spells-title'>All Spells</h1>
      <div className='search-container'>
        <label htmlFor='search'>Search Spells</label>
        <input onChange={handleChange} className='search-input' type="text" name="search" />
      </div>
      <div className='all-spells-container'>
      {searchSpells().map(spell => (
          <div key={spell.id} className="spell-container">
            <p className="spell-name">{spell.name}</p>
            <p className="incantation-header">Incantation:</p>
            <p className="incantation">{spell.incantation ? spell.incantation : "This spell is non verbal"}</p>
            <p className="incantation-header">Spell Effect:</p>
            <p className="incantation">{spell.effect}</p>
          </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default AllSpells