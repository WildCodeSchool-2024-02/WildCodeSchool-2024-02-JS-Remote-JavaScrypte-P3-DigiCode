import { useLoaderData } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
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
      <SearchBar />
      <Filter category={categoriesData} />
      {categoriesData.map((c) => (
        <CategoriesList category={c} key={c.id} />
      ))}
    </>
  );
}
