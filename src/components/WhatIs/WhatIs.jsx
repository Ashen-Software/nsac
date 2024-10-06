import Carrusel from "../../components/Carrusel/Carrusel.jsx";
import Wat from "../../components/Wat/Wat.jsx";
import sand1 from "../../assets/Sand storm.png";
import "./whatis.css";
import Problematic from "../../components/Problematic/Problematic.jsx";

function WhatIs() {
  return (
    <div className="todo">
      <div className="imagen-con-gradiente">
        <img className="arena" src={sand1} alt="arena" />
      </div>

      <Carrusel>
        <Wat />
        <Problematic/>
      </Carrusel>

      <div className="imagen-con-gradiente rotado">
        <img className="arena" src={sand1} alt="arena" />
      </div>
    </div>
  );
}

export default WhatIs;
