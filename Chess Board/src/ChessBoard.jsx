import React from 'react'
import './chessboard.css'
import Pieces from './Pieces'
function ChessBoard() {
    const ranks = Array(8).fill().map((x,i)=>8-i)
    const tiles = Array(8).fill().map((x,i)=>String.fromCharCode(i+97))

    const getClassName = (i,j)=>{
        let c = ''
        c+= (i+j)%2 === 0 ? 'tile--light' : 'tile--dark'
        return c;
    }
  return (
    <div className='bg-black flex justify-center items-center text-white text-center h-dvh w-dvh'>
        <div className="tiles">

        {ranks.map((rank,i)=>
            tiles.map((tile,j)=>{
                {console.log(rank,tile)} 
                return(
                    <div key={tile+'-'+rank} className={getClassName(9-i,j)}>
                        {rank}{tile}
                    </div>
                )
            })
        )}
        </div>
        <Pieces />
    </div>
  )

}

export default ChessBoard