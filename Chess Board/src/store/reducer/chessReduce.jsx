

const initialState = {
    pieceColors: new Array(8).fill('').map(() => new Array(8).fill('')),
  };
  
  const chessReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_PIECE_COLOR':
        const { rank, tile, color } = action.payload;
        const updatedPieceColors = [...state.pieceColors];
        updatedPieceColors[rank][tile] = color;
        return { ...state, pieceColors: updatedPieceColors };
  
      default:
        return state;
    }
  };
  export default chessReducer;