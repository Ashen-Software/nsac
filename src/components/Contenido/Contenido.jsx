import './contenido.css';
import Person from "../Person/Person";
import sara from "../../assets/Asunto.png"
import estrellas from "../../assets/FondoEstrellado.png";
import mary from "../../assets/mary.jpg";
import melany from "../../assets/melany.jpg";
 


function Contenido(){


    return(<div className='contenido'>

        <div className='about'>

            <p className='title'>About Us</p>
            <p className='expl' >We are a team of six passionate engineering students with diverse expertise, united by our curiosity for space exploration and our commitment to creating innovative solutions for humanity’s future on Mars.</p>

            <p className='expl'>Our multidisciplinary backgrounds allow us to tackle complex problems from multiple perspectives, combining technical skills, creativity, and a drive for excellence.</p>

            <p className='expl'> Together, we developed Namazu, an application designed to make seismic data on Mars more accessible and useful for future colonization efforts.</p>
        </div>

        
        <div className='der'>
            <p className='title'>Our Team</p>
            <div className='team'>    
                <Person number="Sara " rol="Civil Engineering" im= {sara}/>
                <Person number="Marycielo" rol="Software engineering " im= {mary}/>
                <Person number="Melany" rol="Software engineering" im={melany}/>
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
            </div>

        </div>
    </div>)
}


export default Contenido;