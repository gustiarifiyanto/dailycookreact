import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedRecipeCard from "../components/FeaturedRecipeCard";
import type { Recipe } from "../types/type";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BrowseFeaturedRecipesWrapper() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/recipes")
      .then((response) => {
        setRecipes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error loading data {error}</p>;
  }

  return (
    <section id="MadeByDailyCook">
      <div className="flex items-center justify-between px-5">
        <h2 className="font-bold">Made by DailyCook</h2>
        <a
          href="#"
          className="font-semibold text-sm leading-[21px] text-[#FF4C1C]"
        >
          Explore All
        </a>
      </div>
      <div className="swiper w-full mt-3">
        <Swiper
          className="W-full mt-3"
          direction="horizontal"
          spaceBetween={16}
          slidesPerView="auto"
          slidesOffsetBefore={20}
          slidesOffsetAfter={20}
        >
          {recipes.map((recipes) => (
            <SwiperSlide key={recipes.id} className="!w-fit">
              <FeaturedRecipeCard recipe={recipes}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
