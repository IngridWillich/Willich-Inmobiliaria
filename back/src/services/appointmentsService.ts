import IAppointment from "../interfaces/IAppointments";

let appointments: IAppointment[] = [];

export const getAllAppointments = (): IAppointment[] => {
    return appointments;
};
export const getAppointmentById=(id:number):IAppointment | undefined=>{
return appointments.find(appointment=> appointment.id===id);
}
let contador:number=0;
