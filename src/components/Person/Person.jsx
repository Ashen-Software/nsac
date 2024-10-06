import './person.css';
import PropTypes from 'prop-types';

function Person({ number , rol}) {
    return (
      <div className="persona">
        <div className="imagen">
          img
        </div>
        <div className="iz">
          <p className="nombre">Person {number}</p>
          <p className="rol">{rol}</p>
        </div>
      </div>
    );
  }
  
  Person.propTypes = {
    number: PropTypes.number.isRequired,
    rol: PropTypes.string.isRequired,
   
  };


  
export default Person;