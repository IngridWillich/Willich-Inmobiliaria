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
export const getAppointmentByIdService=async(appointmentId:number):Promise<Appointment>=>{///////
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
// export const createAppointmentService = async(appointment:AppointmentDto,userId:number):Promise<Appointment> => {
//     const {time,date,type}=appointment;

//     const user=await UserModel.findOne({where: {id:userId}});
    
//     if (!isValidTurnType(type)) {
//         throw new Error("invalid shift type");
//     } 
//     try {
//         if (!user) {
//             throw new Error("User not found");
//         } else {
//             const newAppointment = AppointmentModel.create({
//                 date: date,
//                 time: time,
//                 type: type,
//                 user: user
//             });
//             await AppointmentModel.save(newAppointment);
//             return newAppointment;
//         }
//     } catch (error) {
//         // Manejo de errores
//         throw new Error("Error creating appointment");
//     }
// };

// export const createAppointmentService=async(appointmentData:AppointmentDto)=>{
//     try {
//         const user=await UserModel.findOne({where: {id:Number(appointmentData.userId)}})
//         if(!user){
//             throw new Error("No se encontro el usuario");
//         } const app={
//             date: appointmentData.date,
//             time: appointmentData.time,
//             type: appointmentData.type,
//         }
//         console.log(app)
//         const newAppointment=await AppointmentModel.save({
//             ...app,
//             user
//         });
//         if(!newAppointment){
//             throw new Error("No se pudo crear el turno");
//         }
//         return newAppointment
//     } catch (error) {
//         throw new Error("Error al crear el turno" );
//     }
// }

/////////////////////////////////////////////////////////////
export const createAppointmentService = async (appointmentData: AppointmentDto) => {
    try {
        if (isNaN(appointmentData.userId) || !Number.isInteger(appointmentData.userId)) {
            throw new Error("El userId proporcionado no es un número válido");
        }

        const user = await UserModel.findOne({ where: { id: appointmentData.userId } });
        if (!user) {
            throw new Error("No se encontró el usuario");
        }

        const app = {
            date: appointmentData.date,
            time: appointmentData.time,
            type: appointmentData.type,
        };

        const newAppointment = await AppointmentModel.create({
            ...app,
            user: user,
        })

        ; // Guardar el nuevo turno en la base de datos

        if (!newAppointment.id) {
            throw new Error("El id del nuevo turno no se generó correctamente");
        }

        return newAppointment;
    } catch (error) {
        throw new Error("Error al crear el turno");
    }
};
///////////////////////////////////////////////////////////////////////////////////






// export const cancelAppointment = async(id: number) => {
//     const appointment = await getAppointmentByIdService(id);///////////
//     if (appointment) {
//         appointment="cancelled";//si existe lo cancela
//         await AppointmentModel.save(appointment)
//         return appointment;
//     }
//     } 
