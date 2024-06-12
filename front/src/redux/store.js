import {configureStore} from '@reduxjs/toolkit'
import {users} from '../redux/reducers'

const store = configureStore({
    reducer: users.reducer,
        
    },

);
export default store
