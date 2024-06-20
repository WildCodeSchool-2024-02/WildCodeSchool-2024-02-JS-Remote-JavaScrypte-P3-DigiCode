import { useLoaderData } from "react-router-dom";

import Filter from '../../components/filter/Filter'
import CategoriesList from "../../components/catgorieslist/CategoriesList";


export default function CategoriesPage () {



const categoryData = useLoaderData();



const handleBack = () => {
 window.history.back();
};

  
  return (
 <>
 <button type="button" onClick={handleBack} className="backButton">Back</button>
 <Filter category={categoryData} />
 {categoryData.map((c) =>(
 <CategoriesList category={c} key={c.name}/> ))}
 </>
)

}