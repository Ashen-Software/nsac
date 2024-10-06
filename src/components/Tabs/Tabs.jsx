import { Link } from 'react-router-dom';
import './tabs.css'
import house from "../../assets/house.png"
import puzzle from "../../assets/puzzle.png"

function Tabs(){


    return(<div className='tab'>

        <Link to="/">
            <div className='hom'>
                <img className="house" src={house}  alt="house"/>
                <p className='texto'>Home</p>
            </div>
        </Link>

        <div className='puzzle'>
            <img className="puzzle" src={puzzle}  alt="puzzle"/>
            <p className='texto'>Our Solution</p>

        </div>

    </div>
        
    )
}

export default Tabs;