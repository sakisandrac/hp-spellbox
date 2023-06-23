import React, { useState } from 'react'
import './Homepage.css'

const Homepage = () => {
  const [user, setUser] = useState({name: "Wizard", house:""})

  const selectHouse = (e) => {
    const {name, value} = e.target;

    setUser(prev => {
      return {...prev, [name]: value}
    })

  }

  return (
    <div className={`main-container ${user.house ? user.house : ""}`}>
      <div>
        <h1>{`Hello ${user.name}`}</h1>
        <select
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
      </div>
    </div>
  )
}

export default Homepage