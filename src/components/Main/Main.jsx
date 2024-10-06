import './main.css';
import mars from "../../assets/Mars 1.png"
import { Link } from 'react-router-dom';

function Main(){

    return (<div className='imagen-con-texto'>
        <img src={mars} alt="" />
        <Link to="/visualization" className="texto-centrado">NAMAZU</Link>
    </div>)
}


export default Main;
