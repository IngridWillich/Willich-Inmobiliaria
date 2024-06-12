import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addAppointment } from '../../slices/appointmentSlice';

const CrearTurno = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector((state) => state.user.userId);

    if (!userId) {
        navigate('/login');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppointment = {
            date,
            time,
            type,
            userId
        };
        axios.post('http://localhost:3001/appointments', newAppointment)
            .then((response) => {
                dispatch(addAppointment(response.data));
                alert('Turno creado correctamente');
                navigate('/MisTurnos');
            })
            .catch((error) => {
                console.error('Error al crear el turno:', error);
                alert('Error al crear el turno');
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Fecha:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Hora:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <div>
                <label>Tipo:</label>
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
            </div>
            <button type="submit">Crear Turno</button>
        </form>
    );
};

export default CrearTurno;
