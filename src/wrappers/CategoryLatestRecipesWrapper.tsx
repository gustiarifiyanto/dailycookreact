import { useParams } from "react-router-dom";
import RecipeCardResult from "../components/RecipeCardResult";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Category } from "../types/type";

export default function CategoryLatestRecipesWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const [Category, setCategory] = useState<Category | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/category/${slug}`)
      .then((response) => {
        setCategory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error Loading: {error}</p>;
  }

  if (!Category) {
    return <p>Category not found</p>;
  }

  return (
    <section id="LatestRecipes" className="px-5 mt-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">Latest Recipes</h2>
      </div>
      <div className="flex flex-col gap-[18px] mt-[18px]">
        {Category.recipes.length > 0 ? (
          Category.recipes.map((recipes) => (
            <RecipeCardResult
              key={recipes.id}
              recipe={recipes}
            ></RecipeCardResult>
          ))
        ) : (
          <p>Belum ada data terkait</p>
        )}
      </div>
    </section>
  );
}
