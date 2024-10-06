import './person.css';
import PropTypes from 'prop-types';

function Person({ number , rol, im }) {
    return (
      <div className="persona">
        <div className="imagen">
          <img src={im} alt="imagen" />
        </div>
        <div className="iz">
          <p className="nombre"> {number}</p>
          <p className="rol">{rol}</p>
        </div>
      </div>
    );
  }
  
  Person.propTypes = {
    number: PropTypes.string.isRequired,
    rol: PropTypes.string.isRequired,
   
  };


  
export default Person;