import { Request, Response } from "express";
import  IAppointment, { Status } from "../interfaces/IAppointments";
import { createAppointment, getAllAppointments } from "../services/appointmentsService";

let appointments: IAppointment[] = [];

export const getAppointments = async (req: Request, res: Response):Promise<void> => {
    console.log("hasta aca va")
    const appointments=await getAllAppointments()
    res.status(200).json(appointments);
};

export const getAppointmentById = async (req: Request, res: Response) => {
    const appointmentId: number = parseInt(req.params.id);
    const appointment = appointments.find(appointment => appointment.id === appointmentId);
    if (appointment) {
        res.status(200).json(appointment);
    } else {
        res.status(404).json({ message: "Appointment not found" });
    }
};
//CRONOGRAMA
export const scheduleAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { date, time,type,status, userId } = req.body;
        const newAppointment = await createAppointment({ date, time, type,status}, parseInt(userId)); //parseInt(userId); 
        if (newAppointment) {
            res.status(201).json(newAppointment);
        } else {
            res.status(400).json({ message: "Error creating appointment" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentId: number = parseInt(req.params.id);
        const appointmentIndex = appointments.findIndex(appointment => appointment.id === appointmentId);
        if (appointmentIndex !== -1) {
            appointments[appointmentIndex].status = Status.CANCELLED;
            res.status(200).json({ message: "Appointment cancelled successfully" });
        } else {
            res.status(404).json({ message: "Appointment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

