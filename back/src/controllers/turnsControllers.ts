import { Request, Response } from "express";
import  IAppointment from "../interfaces/IAppointments";

let appointments: IAppointment[] = [];

export const getAppointments = async (req: Request, res: Response) => {
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
export const scheduleAppointment = async (req: Request, res: Response) => {

};

export const cancelAppointment = async (req: Request, res: Response) => {

};