import React from 'react'
import { useState } from 'react'

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [pname, setPname] = useState(initialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    // (isEditing) ? setButtonName("Save") : setButtonName("Edit");

    if (isEditing) {
      onChangeName(symbol, pname);
    }
  }

  function handleChange(event) {
    setPname(event.target.value);
  }

  let buttonCaption = "Edit";
  let playerName = <span className="player-name">{pname}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={pname} onChange={handleChange}></input>;
    buttonCaption = "Save";
  }



  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  )
}

export default Player
