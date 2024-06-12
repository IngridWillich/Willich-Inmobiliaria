import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userData:[],
    appointments:[],
}


export const users=createSlice({
    name:"user",    
    initialState,
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload
        },
        setAppointments:(state,action)=>{
            state.appointments=action.payload
        }
        

    }
})

// const initialState = {
//     user:{
//         id:0,
//         name:"",
//         email:"",
//         birthdate:new Date(),
//         dni:0,
//         credentialId:0
//     },
//     appointments:[],
//     isLoggedIn: false,

// };
// export const appointmentSlice=createSlice({
//     name:"user",
//     initialState,
//     reducers:{
//         addAppointment:(state,action)=>{
//             state.appointments.push(action.payload)
//         },
//         cancelAppointment: (state, action) => {
//             state.appointments = state.appointments.filter(appointment => appointment.id !== action.payload);
//         },
//         loginSuccess:(state,action)=>{
//         state.isLoggedIn=true;
//         state.user=action.payload
//     },
//    logOut:(state)=>{
//     state.isLoggedIn=false
//     state.user={
//         id:0,
//         name:"",
//         email:"",
//         birthdate:new Date(),
//         dni:0,
//         credentialId:0

//     };
//     state.appointments=[]

//     }

//     }
// });
// export default appointmentSlice.reducer;

// export const {addAppointment,cancelAppointment,loginSuccess,logOut}=appointmentSlice.actions