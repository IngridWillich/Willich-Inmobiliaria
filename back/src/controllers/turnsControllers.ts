import { Request, Response } from "express";
import  IAppointment, { Status } from "../interfaces/IAppointments";
import {  createAppointmentService, getAllAppointments } from "../services/appointmentsService";
import {getAppointmentByIdService} from "../services/appointmentsService";
import { appointments } from "../bd/appointments";
import AppointmentDto from "../dto/AppointmentDto";


export const getAppointments = async (req: Request, res: Response):Promise<void> => {
   try {
     const appointments=await getAllAppointments()
    res.status(200).json(appointments);
   } catch (error) {
    res.status(404).json({ message: "El turno no existe" });
   }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const {id}=req.params;
        const appointment =await getAppointmentByIdService(Number(id))
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: "El turno no existe" });
    }
};
//CRONOGRAMA
export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        console.log("Solicitud recibida para programar una cita",req.body);
        const newAppointment : AppointmentDto=req.body;
        if (!newAppointment.userId || !newAppointment.date || !newAppointment.time || !newAppointment.type) {
            throw new Error("Datos de cita incompletos");
        }

        const appointment = await createAppointmentService(newAppointment);

        res.status(201).json({ message: "Turno creado exitosamente", appointment });
    } catch (error) {
        console.error("Error en el controlador de turnos");
        res.status(400).json({ message: "Error al crear el turno" });
    }
   
};


export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId: number = parseInt(req.params.id);
        const appointmentIndex = appointments.findIndex(appointment => appointment.id === appointmentId);
        if (appointmentIndex === -1) {
          res.status(404).json({ message: "El turno no existe" });
        } else {
          appointments.splice(appointmentIndex, 1);
          res.status(200).json({ message: "Turno cancelado correctamente" });
        }
    } catch (error) {
        res.status(404).json({ message: "Error" });
    }
};

