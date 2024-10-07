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


      <div className='lk'><a href="https://colab.research.google.com/drive/1HR_AXWcHs-SpjC4-klTDPcBCw2qDsqC-?usp=sharing" className='link'>Collab Project</a></div>
    </div>)

}

export default Visualization;