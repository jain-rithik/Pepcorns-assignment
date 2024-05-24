// import React from 'react'

const CompanyHeader = () => {
  return (
    <div className='flex justify-between md:mb-5'>
        <div>
            <div className='flex gap-2 items-center'>
                <img className='md:w-10 md:h-10 w-8 h-8 rounded-sm mt-1' src="https://uploads.republic.com/p/offerings/logos/small/000/003/828/3828-1699371072-c871491e2c437a068520bdde18d94ca81a9e365a.png" alt="Logo" />
                <h1 className='text-4xl md:text-5xl font-black'>Supersapiens</h1>
            </div>
            <h3 className='text-[#777] text-lg sm:text-xl mt-2'>Glucose: The cornerstone of metabolic health</h3>
            <ul className='flex gap-1 text-[10px] sm:mt-4 mt-3 flex-wrap'>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>SAAS</li>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>WOMEN FOUNDERS</li>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>WELLBEING & LONGEVITY</li>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>FITNESS</li>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>HEALTHTECH</li>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>BIOTECHNOLOGY</li>
                <li className='px-[6px] py-[5px] bg-[#eee] text-black/60 font-medium cursor-pointer hover:text-black/95 rounded'>WEARABLES</li>
            </ul>
        </div>
        <div className='hidden md:flex gap-7 text-2xl text-[#777]'>
        <i className="fa-regular fa-star"></i>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
    </div>
  )
}

export default CompanyHeader