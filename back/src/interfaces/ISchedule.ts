import TurnType from "../entities/Appointment";

interface IscheduleAppointmentDto{
    date:string,
    time:string,
    userId:number,
    type:TurnType
}
export default IscheduleAppointmentDto;