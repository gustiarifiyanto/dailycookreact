import { useParams } from "react-router-dom";
import CategoryFeaturedRecipesWrapper from "../wrappers/CategoryFeaturedRecipesWrapper";
import type { Category } from "../types/type";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoryDetails() {
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

  const baseURL = "http://127.0.0.1:8000/storage";
  return (
    <>
      <nav className="absolute top-0 flex w-full max-w-[640px] items-center justify-between px-5 mt-[30px] z-20">
        <a href="index.html">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
            <img
              src="/assets/images/icons/arrow-left.svg"
              className="w-5 h-5 object-contain"
              alt="icon"
            />
          </div>
        </a>
        <h1 className="font-semibold text-white">Category</h1>
        <button className="appearance-none">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
            <img
              src="/assets/images/icons/more.svg"
              className="w-5 h-5 object-contain"
              alt="icon"
            />
          </div>
        </button>
      </nav>
      <header className="relative w-full h-fit flex flex-col shrink-0 rounded-b-[40px]">
        <div className="relative flex shrink-0 w-full h-[260px] rounded-b-[40px] bg-black overflow-hidden -mb-[45px]">
          <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180.17deg,rgba(0,0,0,0)42.98%,rgba(0,0,0,0.76)79.32%)] z-10 rotate-180" />
          <img
            src="/assets/images/thumbnails/category-background.png"
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="relative px-5 z-10">
          <div className="flex items-center justify-between w-full rounded-[20px] p-[10px_20px] gap-4 bg-white shadow-[0_12px_30px_0_#D6D6D640]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[70px] h-[70px] overflow-hidden">
                <img
                  src={`${baseURL}/${Category.icon}`}
                  className="w-full h-full object-cover"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[27px]">
                  {Category.name}
                </p>
                <p className="text-sm leading-[21px] text-[#848486]">
                  {Category.recipes_count} Recipes
                </p>
              </div>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white overflow-hidden shadow-[0_10px_20px_0_#D6D6D6AB]">
              <img src="/assets/images/icons/heart-black.svg" alt="icon" />
            </button>
          </div>
        </div>
      </header>
      <div className="mt-[30px]"></div>
      <CategoryFeaturedRecipesWrapper></CategoryFeaturedRecipesWrapper>
      <section id="LatestRecipes" className="px-5 mt-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Latest Recipes</h2>
        </div>
        <div className="flex flex-col gap-[18px] mt-[18px]">
          <a href="details.html" className="card">
            <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
              <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src="/assets/images/thumbnails/thumbnail-3.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg leading-[24px]">
                    Burger Tebal Makin Hot
                  </h3>
                  <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                    <img
                      src="/assets/images/icons/Star 1.svg"
                      className="w-4 h-4"
                      alt="star"
                    />
                    <span className="font-semibold text-xs leading-[18px] text-white">
                      4.8
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-[21px] text-[#848486]">
                  by Shayna Alqowy
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="card">
            <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
              <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src="/assets/images/thumbnails/thumbnail-2.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg leading-[24px]">
                    Burger Tebal Makin Hot
                  </h3>
                  <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                    <img
                      src="/assets/images/icons/Star 1.svg"
                      className="w-4 h-4"
                      alt="star"
                    />
                    <span className="font-semibold text-xs leading-[18px] text-white">
                      4.8
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-[21px] text-[#848486]">
                  by Shayna Alqowy
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="card">
            <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
              <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src="/assets/images/thumbnails/thumbnail-1.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg leading-[24px]">
                    Burger Tebal Makin Hot
                  </h3>
                  <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                    <img
                      src="/assets/images/icons/Star 1.svg"
                      className="w-4 h-4"
                      alt="star"
                    />
                    <span className="font-semibold text-xs leading-[18px] text-white">
                      4.8
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-[21px] text-[#848486]">
                  by Shayna Alqowy
                </p>
              </div>
            </div>
          </a>
          <a href="details.html" className="card">
            <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
              <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src="/assets/images/thumbnails/thumbnail-2.png"
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg leading-[24px]">
                    Burger Tebal Makin Hot
                  </h3>
                  <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                    <img
                      src="/assets/images/icons/Star 1.svg"
                      className="w-4 h-4"
                      alt="star"
                    />
                    <span className="font-semibold text-xs leading-[18px] text-white">
                      4.8
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-[21px] text-[#848486]">
                  by Shayna Alqowy
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
