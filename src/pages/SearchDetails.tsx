import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RecipeCardResult from "../components/RecipeCardResult";
import type { Recipe } from "../types/type";

export default function SearchDetails() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = async (query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/recipes/search?query=${query}`,
      );
      setSearchResults(response.data.data);
    } catch (error) {
      setError("Error Searching for recipes");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-5 mt-[30px]">
        <Link to={"/"}>
          <a className="flex shrink-0">
            <img src="assets/images/logos/logo.svg" alt="logo" />
          </a>
        </Link>
        <a href="#">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_10px_20px_0_#D6D6D6AB] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
            <img
              src="assets/images/icons/notification.svg"
              className="w-5 h-5 object-contain"
              alt="icon"
            />
          </div>
        </a>
      </nav>
      <div className="px-5 mt-[30px]">
        {loading && <p>Loading.....</p>}
        {error && <p>{error}</p>}
        <div className="flex items-center rounded-full p-[5px_14px] pr-[5px] gap-[10px] bg-white shadow-[0_12px_30px_0_#D6D6D652] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#FF4C1C]">
          <img
            src="assets/images/icons/note-favorite.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            name="search"
            id="search"
            className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-black"
            placeholder="Find our best food recipes"
          />
          <button type="submit" className=" flex shrink-0 w-[42px] h-[42px]">
            <img src="assets/images/icons/search.svg" alt="icon" />
          </button>
        </div>
      </div>
      <section id="SearchResult" className="px-5 mt-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Search Results</h2>
        </div>
        <div className="flex flex-col gap-[18px] mt-[18px]">
          {searchResults.length > 0 ? (
            searchResults.map((recipe) => (
              <RecipeCardResult
                key={recipe.id}
                recipe={recipe}
              ></RecipeCardResult>
            ))
          ) : (
            <p>Belum ada recipe</p>
          )}
        </div>
      </section>
    </>
  );
}
