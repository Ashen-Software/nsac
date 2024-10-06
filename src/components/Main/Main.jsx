import './main.css';
import mars from "../../assets/Mars 1.png"

function Main(){

    return (<div className='imagen-con-texto'>
        <img src={mars} alt="" />
        <div className="texto-centrado">NAMAZU</div>
    </div>)
}


export default Main;