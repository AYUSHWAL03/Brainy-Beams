import { configureStore } from '@reduxjs/toolkit';
import chessReduce from './reducer/chessReduce'

const store = configureStore({
    reducer: {
      chess: chessReduce,
    },
  });
  
export default store;