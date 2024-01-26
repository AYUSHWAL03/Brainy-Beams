export const changePieceColor = (rank, tile, color) => ({
    type: 'CHANGE_PIECE_COLOR',
    payload: { rank, tile, color },
  });
  