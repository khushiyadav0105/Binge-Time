import React from 'react';
import InfoIcon from '../utils/Icons/InfoIcon.png';
import playIcon from '../utils/Icons/playIcon.png';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-[50vh] text-white bg-gradient-to-r from-black px-[10%] py-[30%] flex flex-col justify-center">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 font-semibold w-1/3">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black flex items-center px-8 py-3 border rounded-md font-semibold hover:opacity-70 cursor-pointer">
          <img src={playIcon} alt="Play Icon" className="w-6 h-6 mr-2" /> Play
        </button>
        <button className="bg-gray-600 opacity-75 text-white flex items-center px-8 py-3 rounded-md font-semibold hover:opacity-90 cursor-pointer">
          <img src={InfoIcon} alt="InfoIcon" className="w-6 h-6 mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
