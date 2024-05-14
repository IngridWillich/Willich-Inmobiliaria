import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import './carouselStyles.css';

const Home = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://paranahaciaelmundo.com/wp-content/uploads/2021/12/247158731-4802601939770379-4669027211575377754-n-1024x573.jpg" className="d-block w-100" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.inmobiliariamega.com.ar/img-usuario/20240209093011_01.jpeg" className="d-block w-100" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.bullano.com.ar/files/02-2024/ad10719/1707403124018.jpg" className="d-block w-100" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://static1.sosiva451.com/16433141/0c74f0d8-0286-4cba-b9a6-4c0238848e5f_u_large.jpg" className="d-block w-100" alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.bullano.com.ar/files/02-2024/ad10719/1707403124018.jpg" className="d-block w-100" alt="Sixth slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home;
