import { useLoaderData } from "react-router-dom";

import Filter from "../../components/filter/Filter";
import CategoriesList from "../../components/categorieslist/CategoriesList";

export default function CategoriesPage() {
  const categoriesData = useLoaderData();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button type="button" onClick={handleBack} className="backButton">
        Back
      </button>
      <Filter category={categoriesData} />
      {categoriesData.map((c) => (
        <CategoriesList category={c} key={c.id} />
      ))}
    </>
  );
}
