import PropTypes from 'prop-types';
import './Filter.css';
import { Link } from 'react-router-dom';


export default function Filter({category}) {


 return (
 <>
    <h1>categories</h1>
    <div className='filterContainer'>
    {category.map((c) => (
        <Link to={`/categories/${c.name.replaceAll(" ", "-")}`} className='filterButton' type='button' key={c.name}>{c.name}</Link>
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