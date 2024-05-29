import TurnType from "../entities/Appointment";
export enum Status{
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED"
}
interface AppointmentDto {
    userId: number,
    date: Date,
    time: string,
    type:TurnType
    
}
export default AppointmentDto;