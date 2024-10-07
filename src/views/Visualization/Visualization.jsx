import './visualization.css';
import Header from "../../components/Header/Header";
import Main2 from "../../components/Main2/Main2";
import sand1 from "../../assets/Sand storm.png";

function Visualization(){


    return (<div className='everything'>
        
        <Header/>
        <Main2/>
        <div className="imagen-con-gradiente">
        <img className="arena" src={sand1} alt="arena" />
      </div>
    </div>)

}

export default Visualization;