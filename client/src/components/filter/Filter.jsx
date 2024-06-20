import PropTypes from 'prop-types';
import './Filter.css';


export default function Filter({category}) {

 return (
 <>
    <h1>categories</h1>
    <div className='filterContainer'>
    {category.map((c) => (
        <button className='filterButton' type='button' key={c.name}>{c.name}</button>
    ))
    }
    </div>
 </>
 )
}


Filter.propTypes = {
      category: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })).isRequired
        }