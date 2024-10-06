import './home.css';
import Explanation from '../../components/Explanation/Explanation';
import Address from '../../components/Address/Address';
import About from "../../components/About/About";

function Home(){
    return(
        <>
        <p className='namazu'>NAMAZU</p>
        <div className='seccion'>
            <div className='izq'>
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