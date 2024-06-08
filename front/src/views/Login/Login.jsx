import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import {validateUser} from "../../helpers/validateLogin";

 const Login = () => {
    const [formDta, setFormularioDta] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Valida el formulario cuando formDta cambie
        setErrors(validateUser(formDta));
    }, [formDta]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormularioDta(
            validateUser({
            ...formDta,
            [name]: value
        })
    );
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert(`email: ${formDta.email} password: ${formDta.password}`);
    };



    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Iniciar Sesión</h2>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email:</label>
                    <input type="text" name="email" value={formDta.email} onChange={handleInputChange} placeholder="Email" />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.inputContainer} >
                    <label className={styles.label}>Contraseña:</label>
                    <input type="text" name="password" value={formDta.password} onChange={handleInputChange} placeholder="********" />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                <div className={styles.inputContainer}>
                    <button className={styles.button}>Iniciar Sesion</button>
                </div>
            </form>
        </div>
    )
}
export default Login;