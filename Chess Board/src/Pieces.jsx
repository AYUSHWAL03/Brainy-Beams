import React from 'react';
import Piece from './Piece';
import './piece.css'
function Pieces() {
  const pos = new Array(8).fill('').map(x => new Array(8).fill(''));
//   pos[0][0] = 'wr'; // Set the piece at position 0,0
  for (let i = 0; i < 8; i++) {
    pos[1][i] = 'wp'
    pos[6][i] = 'bp'
  }
//   pos[0][0] = 'wp'; // Set the piece at position 0,0

  return (
    <div>
      {pos.map((r, rank) =>
        r.map((t, tile) => (

          <Piece
            key={rank + '-' + tile}
            rank={rank}
            tile={tile}
            piece={pos[rank][tile]}
          />
        ))
      )}
    </div>
  );
}

export default Pieces;
