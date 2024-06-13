// import {createSlice} from '@reduxjs/toolkit';


// const initialState = {
//     userData:{
//         loggin:false,
//         user:{
//             id:false,
//         },
//     },
//     userAppointments:[]
// }


// export const userSlice=createSlice({
//     name:"actualUser",    
//     initialState,
//     reducers:{
//         setUserData:(state,action)=>{
//             state.userData=action.payload
//         },
//         setUserAppointments:(state,action)=>{
//             state.userAppointments=action.payload
//         },
//     //     addAppointment:(state,action)=>{
//     //     state.userAppointments.push(action.payload)
//     //      },
//     //     cancelAppointment: (state, action) => {
//     //      state.userAppointments = state.appointments.filter(appointment => appointment.id !== action.payload);
//     // },

//     }
// })

// export default userSlice.reducer;
// export const {setUserData,setUserAppointments}=userSlice.actions
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    logging: false,
    user: {
      id: false,
    },
  },
  userAppointments: []
};                    

export const userSlice = createSlice({
  name: "actualUser",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  }
});

export const { setUserData, setUserAppointments } = userSlice.actions;
export default userSlice.reducer;

