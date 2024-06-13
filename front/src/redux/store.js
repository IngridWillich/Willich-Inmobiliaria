// import {configureStore} from '@reduxjs/toolkit'
// import {userSlice, setUserData} from '../redux/reducers'
// import { useReducer } from 'react';

// const store = configureStore({
//     reducer:{
//         actualUser:useReducer,
//     }
        
//     });
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../redux/reducers';

const store = configureStore({
  reducer: {
    actualUser: userSlice.reducer, // Usa userSlice.reducer en lugar de useReducer
  }
});

export default store;
