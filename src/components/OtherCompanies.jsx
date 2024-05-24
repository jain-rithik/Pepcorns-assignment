// import React from 'react'

import CompanyCard from "./CompanyCard";

const companies = [
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/005/897/5897-1714410880-1737bb386cc514e9b2e99deb0c32d2b1f5b1422f.jpg",
      title: "SharpMed",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/005/897/5897-1714410879-ae0a51338a8637c2cb429aa29dea666c2a168e4d.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/007/585/7585-1715119147-3068fcc24a8db28976532f8ae831ef2eb03d289f.jpg",
      title: "Zoop",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/007/585/7585-1710939539-6adf59511e49f71503df84c4407e63ca23dd9d5d.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/001/988/1988-1715029509-224aebe408a37e9c218db9c4eadbdb4923bec234.jpg",
      title: "Studio Pod",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/001/988/1988-1676277108-c2ce6a56f5081addb65725617206a1ecb9142771.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/007/156/7156-1715020241-7020f83566126ac5396aa20e55fb449ba11127ff.jpg",
      title: "Universal Transit",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/007/156/7156-1711979906-f9c1ad5cd1c65b8cb5b42d61a144e78c7cf50280.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/004/767/4767-1714410201-3f7f9c4f9ae03e4a3b6c6941f5524305d6c73cee.jpg",
      title: "IP3",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/004/767/4767-1714410200-dbb0a976b1a9a5bedfd9abff610a9563421f8e10.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/001/739/1739-1714410086-f7dbe49e5f93ddbef9b34df90f2c60725ba6bf81.png",
      title: "GromaREIT",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/001/739/1739-1696278013-f03b3fbc4399cc955841b6e6879c57a02a2a978b.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/002/897/2897-1714745845-652673d8e1dd8a2a0b7bef1b56584a8480c676fc.jpg",
      title: "FuelGems",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/002/897/2897-1689779822-c5e54997f211288062d9b24d8a44e9d724c67cd2.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/004/900/4900-1714409750-def5e7c96169b5a7c28bb398fb92650a3c6a649f.jpg",
      title: "FitBake",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/004/900/4900-1714409749-a63a53413ab330d9d020372297d80c57c8cf55f9.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/005/397/5397-1714409641-65c8de587f0e12f0f37cd71110be5639d748cf7d.png",
      title: "Borderless...",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/005/397/5397-1714409640-bcb65066b8d368c4cc5462de04b953f24a7126d7.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/006/560/6560-1710503357-f67759e5bc90bc8df0f838638b78e289e6c196fd.jpeg",
      title: "Hydro Wind Energy",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/006/560/6560-1706105178-c65d730647774a0f6579530483ecc61ac976bc84.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/002/098/2098-1714411055-8964a14a1034bdfebb97a4d6968ff6b904cbbcd3.jpg",
      title: "The New Shop",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/002/098/2098-1714411054-b8453bdf26d9fbfad1969e796fb0bf4d1554d7fb.png"
    },
    {
      img: "https://uploads.republic.com/p/offerings/card_images/default/000/003/131/3131-1715030954-f99d0c11b8b8e048e1f061ec1b80d3eb9be6f479.jpg",
      title: "Reental",
      smallImg: "https://uploads.republic.com/p/offerings/logos/small/000/003/131/3131-1687819810-ae51e280570dd0e31b2894c8e48f0b74b6399f0f.png"
    }
  ];

const OtherCompanies = () => {
  const handleCompanyScroll = (direction) => {
    const companiesContainer = document.querySelector(".other-company");

    if (direction == "left") {
      companiesContainer.scrollLeft += -companiesContainer.clientWidth;
    } else {
      companiesContainer.scrollLeft += companiesContainer.clientWidth;
    }
  };

  return (
    <div className="py-10 bg-[#f4f4f4]">
      <div className="md:max-w-[931px]  lg:max-w-[1218px] mx-auto px-8">
        <div className="flex md:flex-row md:justify-between flex-col gap-1 md:gap-0">
          <h1 className="text-2xl text-[#666] font-extrabold tracking-tight">
            Open for investment
          </h1>
          <span className="">
            <span className="text-[#777]">
              Investors in Supersapiens also invested in these companies.
            </span>{" "}
            <a className="text-[#0049ff] hover:underline" href="#">
              View more
            </a>
          </span>
        </div>
        <div className=" w-full relative overflow-hidden">
          <div className="mt-6 mb-6 flex w-full overflow-hidden other-company scroll-smooth">
          {companies.map((company, index) => (
              <CompanyCard
                key={index}
                img={company.img}
                title={company.title}
                smallImg={company.smallImg}
              />
            ))}
          </div>
          <div className="scr-btn z-40 text-black top-2/4 w-10 flex justify-between">
            <span
              className="absolute top-1/2 left-0 left cursor-pointer shadow-sm shadow-slate-300 flex items-center justify-center w-10 h-10 rounded-full bg-white"
              onClick={(e) => {
                handleCompanyScroll("left");
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </span>
            &nbsp;&nbsp;
            <span
              className="absolute top-1/2 right-0 right cursor-pointer  shadow-sm shadow-slate-300 flex items-center justify-center w-10 h-10 rounded-full bg-white"
              onClick={(e) => {
                handleCompanyScroll("right");
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCompanies;
