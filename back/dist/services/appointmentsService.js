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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = __importDefault(require("../entities/Appointment"));
let appointments = [];
let id = 1;
const getAllAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield data_source_1.AppointmentModel.find();
    return allAppointments;
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (appointmentId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield data_source_1.AppointmentModel.findOne({
        where: { id: appointmentId }
    });
    if (!foundAppointment) {
        throw new Error('Appointment not found');
    }
    return foundAppointment;
});
exports.getAppointmentById = getAppointmentById;
const isValidTurnType = (turnType) => {
    return Object.values(Appointment_1.default).includes(turnType);
};
const createAppointment = (appointment, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { time, date, type } = appointment;
    const user = yield data_source_1.UserModel.findOne({ where: { id: userId } });
    if (!isValidTurnType(type)) {
        throw new Error("invalid shift type");
    }
    try {
        if (!user) {
            throw new Error("User not found");
        }
        else {
            const newAppointment = data_source_1.AppointmentModel.create({
                date: date,
                time: time,
                type: type,
                user: user
            });
            yield data_source_1.AppointmentModel.save(newAppointment);
            return newAppointment;
        }
    }
    catch (error) {
        // Manejo de errores
        throw new Error("Error creating appointment");
    }
});
exports.createAppointment = createAppointment;
const cancelAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield (0, exports.getAppointmentById)(id);
    if (appointment) {
        appointment.status = "cancelled"; //si existe lo cancela
        yield data_source_1.AppointmentModel.save(appointment);
        return appointment;
    }
});
exports.cancelAppointment = cancelAppointment;
