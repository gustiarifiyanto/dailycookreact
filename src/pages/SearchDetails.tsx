import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchDetails() {

    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = setState<string | null>(null);

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('query');
        if (query) {
            setSearchQuery(query);
            performSearch(query);
        }
    }, [location.search]);

    const performSearch = async (query: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('https://127.0.0.1:8000/api/recipes/search?query=${query}');
            setSearchResult(response.data.data);
        } catch (error) {
            setError('Error Searching for recipes');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        performSearch(query);
    }

  return (
    <>
      <nav className="flex items-center justify-between px-5 mt-[30px]">
        <a href="index.html" className="flex shrink-0">
          <img src="assets/images/logos/logo.svg" alt="logo" />
        </a>
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
        <form
          action=""
          className="flex items-center rounded-full p-[5px_14px] pr-[5px] gap-[10px] bg-white shadow-[0_12px_30px_0_#D6D6D652] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#FF4C1C]"
        >
          <img
            src="assets/images/icons/note-favorite.svg"
            className="w-6 h-6"
            alt="icon"
          />
          <input
            type="text"
            name="search"
            id="search"
            className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-black"
            placeholder="Find our best food recipes"
          />
          <button type="submit" className=" flex shrink-0 w-[42px] h-[42px]">
            <img src="assets/images/icons/search.svg" alt="icon" />
          </button>
        </form>
      </div>
      <section id="SearchResult" className="px-5 mt-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Search Results</h2>
        </div>
        <div className="flex flex-col gap-[18px] mt-[18px]">
          <a href="details.html" className="card">
            <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
              <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src="assets/images/thumbnails/thumbnail-3.png"
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
                      src="assets/images/icons/Star 1.svg"
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
                  src="assets/images/thumbnails/thumbnail-2.png"
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
                      src="assets/images/icons/Star 1.svg"
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
                  src="assets/images/thumbnails/thumbnail-1.png"
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
                      src="assets/images/icons/Star 1.svg"
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
                  src="assets/images/thumbnails/thumbnail-2.png"
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
                      src="assets/images/icons/Star 1.svg"
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
