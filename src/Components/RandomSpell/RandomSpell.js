import './RandomSpell.css';
import scroll from './scroll.png'

const RandomSpell = ({randomSpell}) => {

  return (
    <>
    <div className="random-spell-flex">
      <div className="spell-info-container" >
        <p className="spell-name">{randomSpell?.name}</p>
        <p className="incantation-header">Incantation:</p>
          <p className="incantation">{randomSpell?.incantation ? randomSpell.incantation : "This spell is non verbal"}</p>
        <p className="incantation-header">Spell Effect:</p>
         <p className="incantation">{randomSpell?.effect}</p>
      </div>
    </div>
    </>
  )
}

export default RandomSpell