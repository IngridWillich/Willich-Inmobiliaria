import { Request, Response } from "express";
import  IAppointment, { Status } from "../interfaces/IAppointments";
import {  createAppointmentService, getAllAppointments } from "../services/appointmentsService";
import {getAppointmentByIdService} from "../services/appointmentsService";
import { appointments } from "../bd/appointments";
import AppointmentDto from "../dto/AppointmentDto";


export const getAppointments = async (req: Request, res: Response):Promise<void> => {
    const appointments=await getAllAppointments()
    res.status(200).json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const {id}=req.params;
        const appointment =await getAppointmentByIdService(Number(id))
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
//CRONOGRAMA
export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        console.log("hasta aca va",req.body);
        const newAppointment : AppointmentDto=req.body;
        console.log("datos de la cita",newAppointment)
        const appointment =await createAppointmentService(newAppointment)
        res.status(201).json({message:"Turno creado existosamente", appointment});
        
    } catch (error) {
        console.log("error en el controlador de turnos",error)
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId: number = parseInt(req.params.id);
        const appointmentIndex = appointments.findIndex(appointment => appointment.id === appointmentId);
        if (appointmentIndex === -1) {
          res.status(404).json({ message: "Appointment not found" });
        } else {
          appointments.splice(appointmentIndex, 1);
          res.status(200).json({ message: "Appointment canceled successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

