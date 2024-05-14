import { AppointmentModel, UserModel } from "../config/data-source";
import IAppointment from "../interfaces/IAppointments";
import AppointmentDto from "../dto/AppointmentDto";
import TurnType from "../entities/Appointment";
import { Appointment } from "../entities/Appointment";

let appointments: IAppointment[] = [];
let id=1;
export const getAllAppointments = async () : Promise <Appointment[]>=>{
    const allAppointments = await AppointmentModel.find();
    return allAppointments;
}
export const getAppointmentById=async(appointmentId:number):Promise<Appointment>=>{
    const foundAppointment = await AppointmentModel.findOne({
        where: { id: appointmentId }
    });

    if (!foundAppointment) {
        throw new Error('Appointment not found');
    }

    return foundAppointment;
    
}
const isValidTurnType = (turnType: TurnType): boolean => {
    return Object.values(TurnType).includes(turnType);
};
export const createAppointment = async(appointment:AppointmentDto,userId:number):Promise<Appointment> => {
    const {time,date,type}=appointment;

    const user=await UserModel.findOne({where: {id:userId}});
    
    if (!isValidTurnType(type)) {
        throw new Error("invalid shift type");
    } 
    try {
        if (!user) {
            throw new Error("User not found");
        } else {
            const newAppointment = AppointmentModel.create({
                date: date,
                time: time,
                type: type,
                user: user
            });
            await AppointmentModel.save(newAppointment);
            return newAppointment;
        }
    } catch (error) {
        // Manejo de errores
        throw new Error("Error creating appointment");
    }

};
export const cancelAppointment = async(id: number) => {
    const appointment = await getAppointmentById(id);
    if (appointment) {
        appointment.status="cancelled";//si existe lo cancela
        await AppointmentModel.save(appointment)
        return appointment;
    }
    } 