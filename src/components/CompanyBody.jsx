import { useEffect } from "react";

const CompanyBody = () => {
  const scrollHandler = (direction) => {
    const box = document.querySelector(".topBrand");

    if (direction == "left") {
      box.scrollLeft += -box.clientWidth;
    } else {
      box.scrollLeft += box.clientWidth + 1;
    }

    updateButtonVisibility();
  };

  const handleImg = (boxName) => {
    const box = document.querySelector(".topBrand");
    const firstImg = document.getElementById("first-img");
    const secondImg = document.getElementById("second-img");
    const thirdImg = document.getElementById("third-img");
    const allSmallImg = document.querySelectorAll(".small-img > div");

    if (boxName === "first") {
      box.scrollLeft = firstImg.offsetLeft;
      allSmallImg[0].classList.add("smallImgStyle");
      allSmallImg[1].classList.remove("smallImgStyle");
      allSmallImg[2].classList.remove("smallImgStyle");
    } else if (boxName === "second") {
      box.scrollLeft = secondImg.offsetLeft;
      allSmallImg[1].classList.add("smallImgStyle");
      allSmallImg[0].classList.remove("smallImgStyle");
      allSmallImg[2].classList.remove("smallImgStyle");
    } else if (boxName === "third") {
      box.scrollLeft = thirdImg.offsetLeft;
      allSmallImg[2].classList.add("smallImgStyle");
      allSmallImg[1].classList.remove("smallImgStyle");
      allSmallImg[0].classList.remove("smallImgStyle");
    }

    updateButtonVisibility();
  };

  const updateButtonVisibility = () => {
    const box = document.querySelector(".topBrand");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    if (box.scrollLeft === 0) {
      left.style.display = "none";
    } else {
      left.style.display = "flex";
    }

    if (box.scrollLeft + box.clientWidth >= box.scrollWidth) {
      right.style.display = "none";
    } else {
      right.style.display = "flex";
    }
  };

  useEffect(() => {
    const box = document.querySelector(".topBrand");
    box.addEventListener("scroll", updateButtonVisibility);

    // Initial update on mount
    updateButtonVisibility();

    // Cleanup
    return () => {
      box.removeEventListener("scroll", updateButtonVisibility);
    };
  }, []);

  return (
    <div className="flex md:justify-between md:flex-row flex-col gap-7 md:gap-0 pb-4 pt-4">
      <div>
        <div className="relative md:w-[61vw] lg:w-[726px] h-fit w-full">
          <div className="w-full md:w-[61vw] lg:w-[726px] h-fit flex overflow-hidden relative topBrand scroll-smooth">
            <div
              className="min-w-full md:min-w-[61vw] lg:min-w-[726px]"
              id="first-img"
            >
              <img
                className="w-full"
                src="https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/020/082/20082-1701507571-b947f36da5fec894b0fff7ab0842cc0bf6b73ac4.jpg"
                alt=""
              />
            </div>
            <div
              className="min-w-full md:min-w-[61vw] lg:min-w-[726px]"
              id="second-img"
            >
              <img
                className="w-full"
                src="https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/062/22062-1705697384-7af29616af148bbbdf66d9434f7557e9e0a25308.png"
                alt=""
              />
            </div>
            <div
              className="min-w-full md:min-w-[61vw] lg:min-w-[726px]"
              id="third-img"
            >
              <img
                className="w-full"
                src="https://uploads.republic.com/p/offerings/slider_media_items/contents/default/000/022/063/22063-1705697414-7f17210e54c0859bb1e5a58843c752ec91cd4fad.png"
                alt=""
              />
            </div>
          </div>
          <div className="scr-btn absolute z-40 text-black top-2/4 w-full flex justify-between">
            <span
              className="top-0 left cursor-pointer -translate-x-1/2 shadow-sm shadow-slate-300 flex items-center justify-center w-10 h-10 rounded-full bg-white"
              onClick={(e) => {
                scrollHandler("left");
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            &nbsp;&nbsp;
            <span
              className="top-0  right cursor-pointer translate-x-1/2 shadow-sm shadow-slate-300 flex items-center justify-center w-10 h-10 rounded-full bg-white"
              onClick={(e) => {
                scrollHandler("right");
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className="md:flex gap-4 mt-4 small-img hidden">
          <div
            className="rounded-lg border-[3px] border-white overflow-hidden cursor-pointer"
            onClick={() => handleImg("first")}
          >
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/contents/small/000/020/082/20082-1701507571-7d1b04176c41716bbb941e833a3f9184e1e90c21.jpg"
              alt=""
            />
          </div>
          <div
            className="rounded-lg border-[3px] border-white overflow-hidden cursor-pointer"
            onClick={() => handleImg("second")}
          >
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/contents/small/000/022/062/22062-1705697384-9ba543bc9e05d0ef0ebbf507d43ae5c2033c9faa.png"
              alt=""
            />
          </div>
          <div
            className="rounded-lg border-[3px] border-white overflow-hidden cursor-pointer"
            onClick={() => handleImg("third")}
          >
            <img
              src="https://uploads.republic.com/p/offerings/slider_media_items/contents/small/000/022/063/22063-1705697414-863ada752e635c951942c81247f6af6c2e286fb0.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:w-[26%] md:h-full">
        <div className="lg:h-[440px] md:h-[340px] pl-4 pt-4 pr-8 pb-5 border rounded-md">
          <div className="flex flex-col gap-4 border-b pb-4 mb-4">
            <h3 className="lg:text-2xl md:text-xl font-extrabold text-[#777]">
              Supersapiens has withdrawn its campaign
            </h3>
            <p className="lg:text-lg md:text-base text-[#777]">
              All investments have been refunded.
            </p>
          </div>
          <a className="text-[#0049ff] hover:underline" href="#">
            Check out other startups
          </a>
        </div>
        <button className="mt-4 rounded-md text-lg flex gap-2 items-center w-full justify-center px-2 py-3 text-[rgba(255,255,255,.7)] bg-[rgba(0,73,255,.5)]">
          <i className="fa-solid fa-lock"></i>
          Invest in Supersapiens
        </button>
      </div>
    </div>
  );
};

export default CompanyBody;
