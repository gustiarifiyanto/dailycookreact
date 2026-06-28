import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import IngredientCard from "../components/IngredientCard";

export default function RecipeDetails() {
  const [activeTab, setActiveTab] = useState("ingredients");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

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
        <button className="appearance-none">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
            <img
              src="/assets/images/icons/heart.svg"
              className="w-5 h-5 object-contain"
              alt="icon"
            />
          </div>
        </button>
      </nav>
      <header
        id="Gallery"
        className="relative w-full h-[520px] flex shrink-0 rounded-b-[40px] bg-black overflow-hidden"
      >
        <div className="swiper">
          <div className="swiper-wrapper">
            <Swiper
              className="W-full"
              direction="horizontal"
              slidesPerView="auto"
            >
              <SwiperSlide>
                <div className="relative w-full h-full flex shrink-0">
                  <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
                  <img
                    src="/assets/images/thumbnails/thumbnail-2.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full flex shrink-0">
                  <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
                  <img
                    src="/assets/images/thumbnails/thumbnail-1.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full flex shrink-0">
                  <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
                  <img
                    src="/assets/images/thumbnails/thumbnail-3.png"
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex flex-col gap-5 z-20">
          {/* If we need pagination */}
          <div className="swiper-pagination !-top-5 *:!bg-white" />
          <div className="flex justify-between p-5 pb-[23px] gap-3">
            <div className="flex flex-col gap-[6px]">
              <p className="font-semibold text-[#FF4C1C]">Top Bakery</p>
              <h1 className="font-bold text-[34px] leading-[46px] text-white">
                Burger Tebal Makin Hot
              </h1>
            </div>
            <div className="flex shrink-0 items-center w-fit h-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4"
                alt="star"
              />
              <span className="font-semibold text-xs leading-[18px] text-white">
                4.3
              </span>
            </div>
          </div>
        </div>
      </header>
      <section id="Description" className="flex flex-col gap-4 px-5 mt-[30px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">About</h2>
          <p className="leading-8">
            Burger tebal asal kota inkopad ini sangat membuat lapar dan sehat
            untuk tubuh kita terutama ketika sedang bulking pada masa otot
            terbaru setelah olahraga.
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
              <img
                src="/assets/images/photos/photo-1.png"
                className="w-full h-full object-cover"
                alt="avatar"
              />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold">Shayna</p>
              <p className="text-sm leading-[21px] text-[#848486]">Author</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-[18px] h-[18px]"
              alt="star"
            />
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-[18px] h-[18px]"
              alt="star"
            />
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-[18px] h-[18px]"
              alt="star"
            />
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-[18px] h-[18px]"
              alt="star"
            />
            <img
              src="/assets/images/icons/Star 1.svg"
              className="w-[18px] h-[18px]"
              alt="star"
            />
          </div>
        </div>
      </section>
      <section id="Details" className="mt-[30px]">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-bold">Details</h2>
        </div>
        <div className="swiper-tabs w-full overflow-hidden mt-3">
          <div
            className="swiper-wrapper"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
            data-tabs-active-classes="shadow-[0_10px_20px_0_#FF4C1C80] !bg-[#FF4C1C]"
            data-tabs-inactive-classes="!bg-black"
          >
            <Swiper
              className="W-full"
              direction="horizontal"
              spaceBetween={16}
              slidesPerView="auto"
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
            >
              <SwiperSlide className="!w-fit pb-[26px]">
                <button
                  className="flex items-center gap-[10px] py-3 px-4 rounded-full font-semibold !text-white bg-black transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:!bg-[#FF4C1C]"
                  id="ingredients-tab"
                  data-tabs-target="#ingredients"
                  type="button"
                  role="tab"
                  aria-controls="ingredients"
                  aria-selected="true"
                  onClick={() => handleTabClick("ingredients")}
                >
                  <img
                    src="/assets/images/icons/coffee-white.svg"
                    className="w-[22px] h-[22px]"
                    alt="icon"
                  />
                  <h3>Ingredients</h3>
                </button>
              </SwiperSlide>
              <SwiperSlide className="!w-fit pb-[26px]">
                <button
                  className="flex items-center gap-[10px] py-3 px-4 rounded-full font-semibold !text-white bg-black transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:!bg-[#FF4C1C]"
                  id="tutorials-tab"
                  data-tabs-target="#tutorials"
                  type="button"
                  role="tab"
                  aria-controls="tutorials"
                  aria-selected="false"
                  onClick={() => handleTabClick("tutorials")}
                >
                  <img
                    src="/assets/images/icons/note-favorite-white.svg"
                    className="w-[22px] h-[22px]"
                    alt="icon"
                  />
                  <h3>Tutorials</h3>
                </button>
              </SwiperSlide>
              <SwiperSlide className="!w-fit pb-[26px]">
                <button
                  className="flex items-center gap-[10px] py-3 px-4 rounded-full font-semibold !text-white bg-black transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:!bg-[#FF4C1C]"
                  id="reviews-tab"
                  data-tabs-target="#reviews"
                  type="button"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected="false"
                  onClick={() => handleTabClick("reviews")}
                >
                  <img
                    src="/assets/images/icons/star-white.svg"
                    className="w-[22px] h-[22px]"
                    alt="icon"
                  />
                  <h3>Reviews</h3>
                </button>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div id="default-tab-content">
          {activeTab === "ingredients" && (
            <div
              className="px-5"
              id="ingredients"
              role="tabpanel"
              aria-labelledby="ingredients-tab"
            >
              <div className="grid grid-cols-2 gap-5">
                <IngredientCard></IngredientCard>
              </div>
            </div>
          )}

          {activeTab === "tutorials" && (
            <div
              className="px-5"
              id="tutorials"
              role="tabpanel"
              aria-labelledby="tutorials-tab"
            >
              <iframe
                className="w-full aspect-video rounded-[20px] bg-[#D9D9D9]"
                src="https://www.youtube.com/embed/n1YeqIlbkxc"
              />
              <div className="list-items-container flex flex-col mt-[26px]">
                <div className="list flex gap-[14px]">
                  <div className="flex relative">
                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                      <span>1</span>
                    </div>
                    {/* the last .line will be hidden by CSS */}
                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]" />
                  </div>
                  <p className="leading-8 pb-[30px]">
                    Siapkan telur rebus dicampur dengan mentega rendah kalori
                  </p>
                </div>
                <div className="list flex gap-[14px]">
                  <div className="flex relative">
                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                      <span>2</span>
                    </div>
                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]" />
                  </div>
                  <p className="leading-8 pb-[30px]">
                    Panaskan minyak dengan api stabil agar tidak gosong nanti
                    dagingnya
                  </p>
                </div>
                <div className="list flex gap-[14px]">
                  <div className="flex relative">
                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                      <span>3</span>
                    </div>
                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]" />
                  </div>
                  <p className="leading-8 pb-[30px]">
                    Roti disajikan tanpa wijen agar rasanya tidak bertabrakan
                    salada
                  </p>
                </div>
                <div className="list flex gap-[14px]">
                  <div className="flex relative">
                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                      <span>4</span>
                    </div>
                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]" />
                  </div>
                  <p className="leading-8 pb-[30px]">
                    Grill daging sapi dengan keadaan frozen dan berikan sea
                    salts
                  </p>
                </div>
                <div className="list flex gap-[14px]">
                  <div className="flex relative">
                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                      <span>5</span>
                    </div>
                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]" />
                  </div>
                  <p className="leading-8 pb-[30px]">
                    Gabungkan satu per satu ketika masih panas jadi lebih
                    melekat
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div
              className="px-5"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div className="flex flex-col gap-5">
                <div className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                  <p className="leading-8">
                    Hemat uang jadinya gaperlu beli burger di luar, udah bisa
                    masak sendiri hehehe
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img
                          src="/assets/images/photos/photo-2.png"
                          className="w-full h-full object-cover"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <p className="font-semibold">Shayna</p>
                        <p className="text-sm leading-[21px] text-[#848486]">
                          12 Days Ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                    </div>
                  </div>
                </div>
                <div className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                  <p className="leading-8">
                    Recipe paling enak menurut gue karena anak gak pernah bosan
                    makan ini terus setiap harinya, thank you banget ya shay...
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img
                          src="/assets/images/photos/photo-3.png"
                          className="w-full h-full object-cover"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <p className="font-semibold">ShSarina Dwinaayna</p>
                        <p className="text-sm leading-[21px] text-[#848486]">
                          12 Days Ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star-grey.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                    </div>
                  </div>
                </div>
                <div className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                  <p className="leading-8">
                    Hemat uang jadinya gaperlu beli burger di luar, udah bisa
                    masak sendiri hehehe
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img
                          src="/assets/images/photos/photo-4.png"
                          className="w-full h-full object-cover"
                          alt="avatar"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <p className="font-semibold">Alqowy Putri</p>
                        <p className="text-sm leading-[21px] text-[#848486]">
                          12 Days Ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                      <img
                        src="/assets/images/icons/Star 1.svg"
                        className="w-[18px] h-[18px]"
                        alt="star"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div
        id="BottomNav"
        className="fixed z-50 bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E7E7E7] py-4 px-5 bg-white/70 backdrop-blur"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/icons/note-favorite-fill-black.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p>Offline-access is available now</p>
          </div>
          <button className="py-3 px-5 rounded-full font-semibold text-white text-nowrap transition-all duration-300 shadow-[0_10px_20px_0_#FF4C1C80] bg-[#FF4C1C]">
            Download Now
          </button>
        </div>
      </div>
    </>
  );
}
