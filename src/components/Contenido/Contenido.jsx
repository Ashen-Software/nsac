import './contenido.css';
import Person from "../Person/Person";

function Contenido(){


    return(<div className='contenido'>

        <div className='about'>

            <p className='title'>About Us</p>
            <p className='expl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque 
                nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam.</p>
        </div>

        
        <div className='der'>
            <p className='title'>Our Team</p>
            <div className='team'>    
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
                <Person number={1} rol="rol"/>
            </div>

        </div>
    </div>)
}


export default Contenido;