import IAppointment, { Status } from "../interfaces/IAppointments";

let appointments: IAppointment[] = [];

export const getAllAppointments = (): IAppointment[] => {
    return appointments;
};
export const getAppointmentById=(id:number):IAppointment | undefined=>{
return appointments.find(appointment=> appointment.id===id);
}
let contador:number=0;
export const createAppointment = (userId: number, date: Date, time: string,status:Status): IAppointment | undefined => {
    if (!userId) {
        return undefined; 
    }
    const appointmentId: number = ++contador;

    const newAppointment: IAppointment = {
        id: appointmentId,
        date,
        time,
        userId,
        status:Status.ACTIVE,
        

    };
    appointments.push(newAppointment);
    return newAppointment;

};
export const cancelAppointment = (id: number): string => {
    const appointmentIndex = appointments.findIndex(appointment => appointment.id === id);
    if (appointmentIndex === -1) {
        return "Appointment not found"; 
    }//es decir, el turno no existe por lo que no se puede cancelar

    appointments[appointmentIndex].status = Status.CANCELLED;
    return "Cancelled";
} //si lo encuentra, lo cancela