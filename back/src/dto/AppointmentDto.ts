import TurnType from "../entities/Appointment";

interface AppointmentDto {
    date: Date,
    time: string,
    status:"active" | "cancelled",//agregue esto
    type:TurnType
    
}
export default AppointmentDto;