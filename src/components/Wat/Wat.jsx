import "./wat.css";
 

function Wat(){

    return( 
        <div className='explicacion' style={{ fontSize: '1.5rem' }}>

            <p className='titulo'>What is Namazu?</p>

            <div className='content'>
 
            <p className='contenidoo'><strong>Namazu</strong> is a web application designed to help users visualize seismic data from Mars. By processing real seismic data and filtering out noise, Namazu identifies critical areas for future construction and energy generation on the planet. Through clear data visualization, Namazu helps scientists and engineers make informed decisions about where to build infrastructure and harness seismic energy on Mars.</p>
           
            <p className="contenidoo"><span style={{ fontSize: '1.5rem' }}><strong>Data Used</strong></span> 
 <br/>Namazu processes seismic data collected from missions like NASA’s InSight and Apollo. The app applies advanced signal processing techniques to remove noise from the data, making it easier to identify meaningful seismic events. The data is presented in clean, noise-free visualizations, allowing users to quickly analyze the seismic activity on Mars and make well-informed decisions about future developments on the planet.</p>
        </div>

    </div>
 )
}

export default Wat;