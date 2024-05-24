import React, { useState } from 'react'

const CompanyDetailsHead = ({activeTab, setActiveTab}) => {

    const tabs = [
        { name: "Pitch" },
        { name: "Discussion" },
        { name: "Updates" },
        { name: "Reviews" }
      ];

      const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

  return (
    <div className="py-4 border-b ">
      <div className="md:max-w-[931px]  lg:max-w-[1218px] mx-auto px-6 sm:px-8">
        <ul className="flex md:gap-20 gap-6 text-lg font-semibold text-[#b3b3b3]">
        {tabs.map((tab) => (
            <li
            key={tab.name}
            className={`relative hover:text-[#0049ff] cursor-pointer ${activeTab === tab.name ? 'text-[#0049ff] active' : ''}`}
            onClick={() => handleTabClick(tab.name)}
        >
            {tab.name}
            {activeTab === tab.name && (
                <span className="absolute left-0 bottom-[-16px] w-full h-[2px] bg-[#0049ff]"></span>
            )}
        </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CompanyDetailsHead