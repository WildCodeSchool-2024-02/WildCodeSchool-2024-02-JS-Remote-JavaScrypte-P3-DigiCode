import PropTypes from 'prop-types';



export default function CategoriesList({category}) {


    return (
    
        
        <h1>  {category.name} </h1>
        
    )
}


CategoriesList.propTypes = {
    category: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })).isRequired
      }