import React from "react";

const Comment = ({ user, timestamp, comment, likes, replies }) => {
  return (
    <div className="bg-white p-4 mb-6 rounded shadow-sm max-w-[780px] mx-auto">
      <div>
        <div className="flex items-center">
          <img src={user.avatar} alt={user.name} className="w-12 h-13 mr-3 rounded-sm" />
          <div className="flex flex-col mb-1">
            <span className="font-bold mr-2">{user.name}</span>
            <div className="line-clamp-1">
            <span className="text-gray-500 pr-2">{user.role}</span>
            <span className="text-gray-400 text-sm">{timestamp}</span>
            </div>
          </div>
        </div>
        
        <p className="mt-2 text-gray-800">{comment}</p>
        <div className="flex items-center mt-2">
          <button className="text-gray-600 hover:text-gray-800 mr-3">
            <i className="fa fa-heart"></i> Like
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <i className="fa fa-reply"></i> Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
