import "./header.css";
import logo from "../../assets/NSAC logo.png"
import {useNavigate} from "react-router-dom";
import { scroller } from 'react-scroll';

function Header(){

    const navigate = useNavigate();

    const handleNavigation = (target) => {
        if (window.location.pathname !== "/") {
            navigate("/", { replace: true });
            setTimeout(() => {
                scroller.scrollTo(target, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',

                });
            }, 100);  // Espera un poco para asegurarte de que la navegación se complete
        } else {
            scroller.scrollTo(target, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

    return(<div className="header">

        <img src={logo} alt = "" className="logo"/>
        <div className="tabs">
            <p className="tab" >Mars</p>
            <p className="tab" onClick={() => handleNavigation('carousel')}>Problematic</p>
            <p className="tab" onClick={() => handleNavigation('about')}>About us</p>
        </div>
    </div>)
}


export default Header;