import React from 'react'
import Comment from './Comment';

const comments = [
    {
      id: 1,
      user: {
        name: "Phil Southerland",
        role: "Supersapiens team",
        avatar: "https://uploads.republic.com/p/users/avatars/small/001/495/730/1495730-1703192406-4af6f1489395a994b32051444ef6a12f4b8978cf.jpeg",
      },
      timestamp: "3 months ago",
      comment: "Hello, We are writing today with an unfortunate update. We've decided to discontinue our crowdfunding campaign and swiftly refund 100% of your investments. We want to thank each and every one of you for your generous support. It has meant a lot to us to see the excitement build around our company over the last couple months.",
      likes: 0,
      replies: [],
    },
    {
      id: 2,
      user: {
        name: "Olivia Strobl",
        role: "Investor in Supersapiens",
        avatar: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg",
      },
      timestamp: "2 months ago",
      comment: "We received an email of Supersapiens and their closing in Europe... I think it's time to leave with my money.",
      likes: 4,
      replies: [],
    },
  ];

const CompanyDicussion = () => {
    return (
        <div className="p-4 bg-gray-100 rounded">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      );
}

export default CompanyDicussion