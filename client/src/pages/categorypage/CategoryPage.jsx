import { useLoaderData } from "react-router-dom";

import Filter from "../../components/filter/Filter";


export default function CategoryPage () {

const categoryData = useLoaderData();

const handleBack = () => {
 window.history.back();
};

  
  return (
 <>
 <button type="button" onClick={handleBack} className="backButton">Back</button>
 <Filter category={categoryData}/>
 </>
)

}