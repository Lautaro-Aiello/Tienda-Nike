import "./Home.scss"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div>
            <div className="designHome">
                <div>
                    <Link to="/productos">
                        <img src="/assets/home2.jpg" className="imagenHome" alt="nike2"/>
                        <button className="buttonProduct">Ver Productos</button>
                    </Link>
                    
                </div>
                
                <div>
                    <Link to="/productos">
                        <img src="/assets/home1.jpg" className="imagenHomeLarge" alt="nike1"/>
                        <button className="buttonProduct2">Ver Productos</button>
                    </Link>
                </div>

                <div>
                    <Link to="/productos">
                        <img src="/assets/home3.jpg" className="imagenHome" alt="nike3"/>
                        <button className="buttonProduct3">Ver Productos</button>
                    </Link>
                </div>

                <div>
                    <h2 className="homeWelcome">¡Bienvenido a nuestra Tienda!</h2>
                </div>
                
            </div>
        </div>
    )
}

export default Home