// src/actions/index.js
export const changeSquareColor = (id, color) => ({
    type: 'CHANGE_SQUARE_COLOR',
    payload: {
      id,
      color,
    },
  });
  