import { useLoaderData, NavLink } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import Filter from "../../components/filter/Filter";
import CategoriesList from "../../components/categorieslist/CategoriesList";
import "./CategoriesPage.css";

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
      <div className="categories-container">
        <SearchBar />
        <Filter category={categoriesData} />
        {categoriesData.map((c) => (
          <>
            <h1>
              <NavLink to={`/categories/${c.name.replaceAll(" ", "-")}`}>
                {`${c.name.charAt(0).toUpperCase()}${c.name.slice(1)}`}
              </NavLink>
            </h1>
            <CategoriesList category={c} key={c.id} />
          </>
        ))}
      </div>
    </>
  );
}
