
// import { useState, useEffect } from "react";
// import {validate} from "../../helpers/validateRegister";
// import styles from "./Register.module.css";
// const Register = () => {
//     const [formDta, setFormularioDta] = useState({
//         name: "",
//         email: "",
//         birthdate: "",
//         dni: "",
//         username: "",
//         password: "",
//         confirmPassword: ""
//     });

//     const [errors, setErrors] = useState({});

//     useEffect(() => {
//         // Valida el formulario cuando formDta cambie
//         setErrors(validate(formDta));
//     }, [formDta]);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormularioDta({
//             ...formDta,
//             [name]: value
//         });
//     };

//     const handleOnSubmit = (event) => {
//         event.preventDefault();
//         alert(`username: ${formDta.username} email: ${formDta.email} password: ${formDta.password} confirmPassword: ${formDta.confirmPassword}`);
       

//     };

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>Registrate!</h2>
//             <form onSubmit={handleOnSubmit}>
//                 <div className={styles.inputContainer}>
//                     <label className={styles.label}>Nombre:</label>
//                     <input type="text" name="name" value={formDta.name} onChange={handleInputChange} placeholder="Name" />
//                     {errors.name && <p className={styles.error}>{errors.name}</p>}
//                 </div>
//                 <div className={styles.inputContainer} >
//                     <label className={styles.label}>Email:</label>
//                     <input type="text" name="email" value={formDta.email} onChange={handleInputChange} placeholder="usuario@gmail.com" />
//                     {errors.email && <p className={styles.error}>{errors.email}</p>}
//                 </div>
//                 <div className={styles.inputContainer} >
//                     <label className={styles.label}>Fecha de nacimiento:</label>
//                     <input type="text" name="birthdate" value={formDta.birthdate} onChange={handleInputChange} placeholder="DD/MM/AAAA" />
//                     {errors.email && <p className={styles.error}>{errors.birthdate}</p>}
//                 </div>
//                 <div className={styles.inputContainer} >
//                     <label className={styles.label}>DNI:</label>
//                     <input type="text" name="dni" value={formDta.dni} onChange={handleInputChange} placeholder="********" />
//                     {errors.email && <p className={styles.error}>{errors.dni}</p>}
//                 </div>
//                 <div className={styles.inputContainer}>
//                     <label className={styles.label}>Usuario:</label>
//                     <input type="text" name="username" value={formDta.username} onChange={handleInputChange} placeholder="usuario" />
//                     {errors.username && <p className={styles.error}>{errors.username}</p>}
//                 </div>
//                 <div className={styles.inputContainer}>
//                     <label className={styles.label}>Contraseña:</label>
//                     <input type="text" name="password" value={formDta.password} onChange={handleInputChange} placeholder="********" />
//                     {errors.password && <p className={styles.error}>{errors.password}</p>}
//                 </div>
//                 <div className={styles.inputContainer}>
//                     <label className={styles.label}>Confirmar contraseña:</label>
//                     <input type="text" name="confirmPassword" value={formDta.confirmPassword} onChange={handleInputChange} placeholder="********" />
//                     {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
//                 </div>
//                 <button type="submit" disabled={Object.keys(formDta).some(e=> !formDta[e])} className={styles.button}>Registrar</button>
                
//             </form>
//         </div>
//     );
// };

// export default Register;
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/reducers";
import { validate } from "../../helpers/validateRegister";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formDta, setFormularioDta] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        setErrors(validate(formDta));
    }, [formDta]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormularioDta({
            ...formDta,
            [name]: value
        });
    };

    // const handleOnSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:3000/users/register", formDta);
    //         dispatch(setUserData(response.data.user));
    //         alert("Usuario registrado con éxito");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = { ...formDta, birthDate: formDta.birthdate };
        delete formDataToSend.birthdate;
        try {
            const response = await axios.post("http://localhost:3000/users/register", formDataToSend);
            dispatch(setUserData(response.data.user));
            alert("Usuario registrado con éxito");
            navigate("/Login"); // Redirigir a la ruta correspondiente cuando el usuario se registre correctamenteavigate("/Login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Registrate!</h2>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Nombre:</label>
                    <input type="text" name="name" value={formDta.name} onChange={handleInputChange} placeholder="Name" />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className={styles.inputContainer} >
                    <label className={styles.label}>Email:</label>
                    <input type="text" name="email" value={formDta.email} onChange={handleInputChange} placeholder="usuario@gmail.com" />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={styles.inputContainer} >
                    <label className={styles.label}>Fecha de nacimiento:</label>
                    <input type="text" name="birthdate" value={formDta.birthdate} onChange={handleInputChange} placeholder="DD/MM/AAAA" />
                    {errors.email && <p className={styles.error}>{errors.birthdate}</p>}
                </div>
                <div className={styles.inputContainer} >
                    <label className={styles.label}>DNI:</label>
                    <input type="text" name="dni" value={formDta.dni} onChange={handleInputChange} placeholder="********" />
                    {errors.email && <p className={styles.error}>{errors.dni}</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Usuario:</label>
                    <input type="text" name="username" value={formDta.username} onChange={handleInputChange} placeholder="usuario" />
                    {errors.username && <p className={styles.error}>{errors.username}</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Contraseña:</label>
                    <input type="text" name="password" value={formDta.password} onChange={handleInputChange} placeholder="********" />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Confirmar contraseña:</label>
                    <input type="text" name="confirmPassword" value={formDta.confirmPassword} onChange={handleInputChange} placeholder="********" />
                    {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
                </div>
                <button type="submit" disabled={Object.keys(formDta).some(e=> !formDta[e])} className={styles.button}>Registrar</button>
            </form>
        </div>
    );
};

export default Register;