 export function validateUser(user){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {};


    if(!user.email) {
        errors.email = "Email es requerido";
    } else {
       if(!emailRegex.test(user.email)){
        errors.email = "Email invalido";
       } 
    }
    
    if(!user.password) {
        errors.password = "Contraseña es requerida";
    }else{
        if(user.password.length<4){
            errors.password = "Contraseña debe tener al menos 4 caracteres";
        }
        if(user.password.length>10){
            errors.password = "Contraseña debe tener menos de 10 caracteres";
        }
    }

    return errors
        
    
}
console.log(
    validateUser({email: "lKuXQ@example.com", password: "123456"})
);
