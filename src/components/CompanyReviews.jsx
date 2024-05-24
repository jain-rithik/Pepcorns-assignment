import React from 'react'

const reviews = [
    {
        name: 'Claus Stie Kallesoe',
        imageURL: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg",
        investedTime: '4 months ago',
        reviewText: 'I have a 13 year old son with Type1 Diabetes. And he plays football at a high level 5 times / week. I know about the founder from the Novo Nordisk cycling team. I hope/expect their knowledge from the NN team can help create a great app to support my son',
        amount: '$2,500'
    },
    {
        name: 'Wayne Westlake',
        imageURL: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg",
        investedTime: '6 months ago',
        reviewText: 'I invested because of the leadership (met Phil Sutherland), and the benefits of the technology to people\'s lives, and the partners associated with Supersapiens.',
        amount: '$2,500'
    },
    {
        name: 'Thomas Pulaski',
        imageURL: "https://uploads.republic.com/p/users/avatars/small/000/003/346/3346-1703955014-5c560d0921a04783d9c27fed75301a6689f9dbee.jpg",
        investedTime: '5 months ago',
        reviewText: 'I invested because I have been personally using this product for over 2 years now. I purchased several thousand dollars in sensors while in Europe last year along with the tracing band and brought them all back to the US with me so I could use them while competing. I have been eagerly waiting for this moment as it will make continuing to use and promote this product that much easier!',
        amount: '$2,000'
    },
    {
        name: 'Wayne Westlake',
        imageURL: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg",
        investedTime: '6 months ago',
        reviewText: 'I invested because of the leadership (met Phil Sutherland), and the benefits of the technology to people\'s lives, and the partners associated with Supersapiens.',
        amount: '$2,500'
    },
    {
        name: 'Russell Petrucci',
        imageURL: "https://uploads.republic.com/p/users/avatars/small/001/494/126/1494126-1703021647-55b56407e915259417e687a33db1a97dba8e87d2.JPG",
        investedTime: '5 months ago',
        reviewText: 'I am a triathlete and am aware of Supersapiens application. Tried and tested in Euro markets and it is something I know will explode on the scene in the US markets given the opportunity.',
        amount: '$500'
    },
    {
        name: 'Laura Dagani',
        imageURL: "https://assets.republic.com/assets/default/user/small-9619dc1066bbd4d6507d72cb757a4dedd53b72fde52f7e402ecc8535824609c3.svg",
        investedTime: '5 months ago',
        reviewText: 'Unrealized profound potential in measuring interstitial fluid to making life altering changes in health for the masses. Excited to see how else the technology will be used!',
        amount: '$1,000'
    },
];

const CompanyReviews = () => {
    return (
        <div className="md:max-w-[931px] lg:max-w-[772px] mx-auto sm:px-8 px-4 py-4">
            {reviews.map((review, index) => (
                <div key={index} className="border p-6 mb-8 bg-white rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <div className='flex gap-2 items-center'>
                            <img src={review.imageURL} alt="Image of user" />
                        <div>
                            <p className="text-sm font-semibold text-[#333]">{review.name}</p>
                            <p className="text-xs text-[#888]">Invested {review.investedTime}</p>
                        </div>
                        </div>
                        <p className="text-lg font-bold text-[#222]">{review.amount}</p>
                    </div>
                    <p className="text-base text-[#444]">{review.reviewText}</p>
                </div>
            ))}
        </div>
    );
};

export default CompanyReviews;