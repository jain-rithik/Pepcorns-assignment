import React from 'react'

const updates = [
    {
      date: 'Jan 16',
      year: '2024',
      title: 'Major Milestone Alert + Webinar: Supersapiens Breaks New Ground in the US Market!',
      description: `Dear Supersapiens Investor, Mark Your Calendars! Join us in a special virtual event, "Investing in Sports," hosted by Republic tomorrow January 16, 2024. This webinar is not just any event – it's a...`,
      author: {
        name: 'Fitzalan Crowe',
        company: 'Supersapiens',
        avatar: 'https://uploads.republic.com/p/users/avatars/small/001/356/971/1356971-1701977371-c5e6563306af52ad49758535977393569d7b8eff.jpeg'
      },
      likes: 2,
      comments: 1
    }
  ];
  
  const CompanyUpdates = () => {
    return (
      <div className="md:max-w-[931px] lg:max-w-[772px] mx-auto sm:px-8 px-4 py-4">
        {updates.map((update, index) => (
          <div key={index} className="border p-6 mb-8 bg-white rounded-lg">
            <div className="flex justify-between items-center">
              {/* <div className="text-left"> */}
                <p className="text-sm text-[#888] mb-1">{update.date}</p>
                <p className="text-xs text-[#888]">{update.year}</p>
              {/* </div> */}
            </div>
            <h2 className="sm:text-3xl text-xl font-extrabold leading-7 text-[#222] pt-1 mb-4">{update.title}</h2>
            <p className="sm:text-lg text-base text-[#444] mb-4">{update.description}</p>
            <div className="flex items-center mb-4">
              <img
                src={update.author.avatar}
                alt={update.author.name}
                className="w-10 h-10 mr-4"
              />
              <div>
                <p className="text-sm font-semibold text-[#333]">{update.author.name}</p>
                <p className="text-xs text-[#666]">{update.author.company}</p>
              </div>
            </div>
            <hr className='mt-8' />
            <div className="flex items-center gap-6 pt-5">
              <button className="flex items-center text-[#f83a5c]">
                <i className="fa-regular fa-heart mr-2"></i>
                <span>Like </span>
                <span>&nbsp;({update.likes})</span>
              </button>
              <button className="flex items-center text-[#0049ff]">
                <i className="fa-regular fa-comment mr-2"></i>
                <span>Comment </span>
                <span>&nbsp;({update.comments})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CompanyUpdates;