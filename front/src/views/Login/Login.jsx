import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import styles from "./Login.module.css";
import {validateUser} from "../../helpers/validateLogin";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/reducers";
 const Login = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [formDta,setFormDta] = useState({
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
        formDta[name]=value;
        console.log(JSON.stringify(formDta))
        const newFormDta={...formDta};
        setFormDta(newFormDta);
        
        
    };
    
    // const handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     let validacion = validateUser(formDta);
    //     if(Object.keys(validacion).length > 0){
    //        setErrors(validacion);    
    //        return                                                   
    //     }
    //     // console.log(JSON.stringify(validacion))
    //     console.log("Datos enviados al backend:", formDta); // Agrega este console.log
    //     const formData={
    //         email:formDta.email,
    //         password:formDta.password
    //     };
    //     axios.post("http://localhost:3000/users/login", formData)
    //     .then(({ data }) => {
    //     dispatch(setUserData(data));
    //     alert("Usuario Logueado");
    //     // setUser(initialState);
    //     // Navigate("/Inicio");
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    // };

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateUser(formDta);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3000/users/login", formDta);
                dispatch(setUserData(response.data.user));
                alert("Usuario Logueado");
                Navigate("/Citas");
            } catch (error) {
                console.log(error);
            }
        }
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