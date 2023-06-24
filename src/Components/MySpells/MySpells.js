import React from 'react'

export const MySpells = ({user, setUser}) => {

  const deleteSpell = (id) => {
    const filteredSpells = user.savedSpells.filter(spell => spell.id != id);
    setUser(prev => {
      return {
        ...prev,
        savedSpells: filteredSpells
      }
    })
  }

  return (
    <div className={`spell-page-container${user.house ? "-" + user.house : ""}`}>
      <h1 className='all-spells-title'>My Saved Spells</h1>
      <div className='all-spells-container'>
      {user.savedSpells.length > 0 ? user.savedSpells.map(spell => (
      <div key={spell.id} className="spell-container">
        <p className="spell-name">{spell.name}</p>
        <p className="incantation-header">Incantation:</p>
        <p className="incantation">{spell.incantation ? spell.incantation : "This spell is non verbal"}</p>
        <p className="incantation-header">Spell Effect:</p>
        <p className="incantation">{spell.effect}</p>
        <button className={`save-btn${user.house ? "-" + user.house : ""}`} onClick={() => {deleteSpell(spell.id)}} >Delete</button>
      </div>
      )) : "No Saved Spells Yet!"}
      </div>
    </div>
  )
}
