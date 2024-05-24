// import React from 'react'

const CompanyCard = ({img, title, smallImg}) => {
  return (
    <div className="sm:min-w-[33%] min-w-[50%] lg:min-w-[25%] px-4 cursor-pointer rounded overflow-hidden transition-all hover:-translate-y-2">
      <div className="bg-white border border-[#e9e9e9] ">
        <img
          src={img}
          alt="Company Imaage"
          className="w-64 pb-4"
        />
        <div className="p-4 relative">
          <img
            className="absolute top-[-40px] bg-white shadow"
            src={smallImg}
            alt="company logo"
          />
          <h1 className="md:text-2xl text-lg font-bold md:font-extrabold line-clamp-1">{title}</h1>
          <p className="text-[#777] line-clamp-2 pt-2">
            The future of desserts — low-carb, gluten-free, grab...
          </p>
          <span className="text-[#777] text-xs">
            Republic Funding Portal · Reg CF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
