import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userData:{},
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
        },
        addAppointment:(state,action)=>{
        state.appointments.push(action.payload)
         },
        cancelAppointment: (state, action) => {
         state.appointments = state.appointments.filter(appointment => appointment.id !== action.payload);
    },

    }
})

export default users.reducer;
export const {setUserData,setAppointments}=users.actions
