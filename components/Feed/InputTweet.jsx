/* eslint-disable @next/next/no-img-element */
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import React from "react";

const InputTweet = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        className="rounded-full w-11 h-11 cursor-pointer hover:brightness-95"
        src="https://pbs.twimg.com/media/EI83M8nXYAM2W3P.jpg"
        alt="user-img"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 tracking-wide disabled:opacity-50 disabled:brightness-100">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputTweet;
