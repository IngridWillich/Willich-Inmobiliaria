
export const validate = (input) => {
    const emailRegExp = /\S+@\S+\.\S+/;
    const birthdayRegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const DNIRegExp =/^[0-9]{8}$/;
    const usernameRegExp = /^[a-zA-Z0-9]+$/;
    const nameRegExp = /^[^\s]{2,30}$/;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const errors = {};

    if (!input.name) errors.name = "Nombre es requerido"
    else {
        if (!nameRegExp.test(input.name)) errors.name = "El nombre debe tener entre 2 y 30 caracteres"
    }
    if (!input.email) errors.email = "Correo es requerido"
    else {
        if (!emailRegExp.test(input.email)) errors.email = "No es un correo valido"
    }
    if (!input.birthdate) errors.birthdate = "Fecha de nacimiento es requerida"
    else {
        if (!birthdayRegExp.test(input.birthdate)) errors.birthdate = "Debe ingresar una fecha valida"
    }

    if (!input.dni) errors.dni = "DNI es requerido"
    else {
        if (!DNIRegExp.test(input.dni)) errors.dni = " El DNI debe tener 8 digitos"
    }

    if (!input.username) errors.username = "Usuario es requerido"
    else {
        if (!usernameRegExp.test(input.username)) errors.username = " El usuario solo puede contener letras y numeros"
    }

    if (!input.password) errors.password = "Contraseña es requerida"
    else {
        if (!passwordRegExp.test(input.password)) errors.password = "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero"
    }if(input.confirmPassword !== input.password) errors.confirmPassword = "Las contraseñas no coinciden"

    return errors;

}
