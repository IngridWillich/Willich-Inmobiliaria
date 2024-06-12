import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div>
            <h1>Bienvenido</h1>
            <h2>¿Es tu primera vez en esta pagina?</h2>

            <Link to="/register">Registrarme</Link>
            <h2>Ya tienes una cuenta?</h2>
            <Link to="/login">Iniciar sesion</Link>
            </div>


    );
}
    export default Landing;