import "./header.css";
import logo from "../../assets/NSAC logo.png"

function Header(){

    return(<div className="header">

        <img src={logo} alt = "" className="logo"/>
        <div className="tabs">
            <p className="tab">Mars</p>
            <p className="tab">Problematic</p>
            <p className="tab">About us</p>
        </div>
    </div>)
}


export default Header;