import React from 'react'

function Piece({rank,tile,piece}) {
    console.log(rank, tile, piece)
    return (
    <div className={`piece ${piece} p-${rank}${tile}`}/>
  )
}

export default Piece;