import React,{useState} from 'react'
import { connect } from 'react-redux';
import { changePieceColor } from './store/actions/colorChanger';

function Piece({rank,tile,piece}) {
  const [bgcolor,setBgColor] = useState('#f1ba8a')
  const handleClick = () => {
    setBgColor(bgcolor === '#f1ba8a' ? 'yellow' : '#f1ba8a')
    setBgColor(bgcolor === '#f1ba8a' ? 'yellow' : '#f1ba8a')
    const newColor = bgcolor === '#f1ba8a' ? 'yellow' : 'red';
    dispatch(changePieceColor(rank, tile, newColor));
  };

    console.log(rank, tile, piece)
    return (
    <div className={`piece ${piece} p-${rank}${tile} ${bgcolor}`} onClick={handleClick}/>
  )
}

export default connect()(Piece);