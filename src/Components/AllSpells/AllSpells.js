import React from 'react';
import './AllSpells.css'
import RandomSpell from '../RandomSpell/RandomSpell';

const AllSpells = ({allSpells, user}) => {

  return (
    <>
    <div className={`spell-page-container${user.house ? "-" + user.house : ""}`}>
      <h1 className='all-spells-title'>All Spells</h1>
      <div className='all-spells-container'>
      {allSpells?.map(spell => (
          <div className="spell-container">
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