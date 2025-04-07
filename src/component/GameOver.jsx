import React from 'react'

function GameOver({winner, onHandleRestart}) {
  return (
    <div id ="game-over">
      <h2>Game Over!</h2>
      {!winner && <p>It's a draw!</p>}
      {winner && <p>{winner} won!</p>}
      <p><button onClick={onHandleRestart}>Rematch!</button></p>
    </div>
  )
}

export default GameOver
