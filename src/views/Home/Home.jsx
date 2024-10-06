import './home.css';
import Explanation from '../../components/Explanation/Explanation';
import Address from '../../components/Address/Address';


function Home(){
    return(
        <>
        <div className='home'>
            <Explanation/>
            <Address/>
        </div>
</>
    )
}

export default Home;