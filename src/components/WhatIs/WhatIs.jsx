import './whatis.css';
import sand1 from "../../assets/Sand storm.png";
import flecha from "../../assets/arrow-big-right-dash.png"

function WhatIs(){

    return(
        <div>

            <div className="imagen-con-gradiente">
                <img className="arena" src={sand1} alt = "arena"/>
            </div>

            <div className='explicacion'>

                <p className='titulo'>What is Namazu?</p>

                <div className='content'>
                    <img className="rotado" src={flecha} alt=""/>
                    <p className='contenido'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, 
                    eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                    <img src={flecha} alt=""/>
                </div>

            </div>

            <div className="imagen-con-gradiente rotado">
                <img className="arena" src={sand1} alt = "arena"/>
            </div>

        </div>
    )
}


export default WhatIs;