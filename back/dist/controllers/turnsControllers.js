"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
let appointments = [];
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(appointments);
});
exports.getAppointments = getAppointments;
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id);
    const appointment = appointments.find(appointment => appointment.id === appointmentId);
    if (appointment) {
        res.status(200).json(appointment);
    }
    else {
        res.status(404).json({ message: "Appointment not found" });
    }
});
exports.getAppointmentById = getAppointmentById;
//CRONOGRAMA
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.cancelAppointment = cancelAppointment;
