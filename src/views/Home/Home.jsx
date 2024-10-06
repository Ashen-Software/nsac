import './home.css';
import Explanation from '../../components/Explanation/Explanation';
import Address from '../../components/Address/Address';
import About from "../../components/About/About";
import logo from "../../assets/NSAC logo.png";


function Home(){
    return(
        <>
        <p className='namazu'>NAMAZU</p>
        <div className='seccion'>
            <div className='izq'>
                <img className="logo" src={logo} alt='space apps logo'/>
                <About/>
            </div>
            <div className='home'>
                <Explanation/>
                <Address/>
            </div>
        </div>
</>
    )
}

export default Home;