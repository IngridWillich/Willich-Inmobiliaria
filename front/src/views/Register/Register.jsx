import { useState } from "react"

const Register = () => {
    const [formDta,setFormularioDta]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    
    
    const [errors,setErrors]=useState({
        username:"username is required",
        email:"email is required",
        password:"password is required",
        confirmPassword:"confirmPassword is required"
    });
    
    const handleInputChange=(event)=>{
        const {name,value}=event.target
        setFormularioDta({
            ...formDta,
            [name]:value
        })
        
    }
    //setErrors(validate(formDta));

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        alert(`username: ${formDta.username} email: ${formDta.email} password: ${formDta.password} confirmPassword: ${formDta.confirmPassword}`)
    }


    return(
        <div>
            <h2>Registrate!</h2>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Usuario:</label>
                    <input type="text" name="username" value={formDta.username} onChange={handleInputChange} placeholder="Ingrid Willich"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={formDta.email} onChange={handleInputChange} placeholder="example@gmail.com"/>
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="text" name="password" value={formDta.password} onChange={handleInputChange} placeholder="********"/>
                </div>
                <div>
                    <label>Confirmar contraseña:</label>
                    <input type="text" name="confirmPassword" value={formDta.confirmPassword} onChange={handleInputChange} placeholder="********"/>
                </div>

                <button type="submit">Registrar</button>
            </form>
        </div>

    )
}
export default Register;