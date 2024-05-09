import TurnType from "../entities/Appointment";

interface AppointmentDto {
    date: Date,
    time: string,
    type:TurnType
    
}
export default AppointmentDto;