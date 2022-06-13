import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";

/* eslint-disable @next/next/no-img-element */
const Post = ({ post }) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        className="cursor-pointer rounded-full h-11 w-11 mr-4"
        src={post.userImg}
        alt="user-image"
      />

      {/* right side */}
      <div className="">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex space-x-1 items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username}</span>
            <span className="text-sm sm:text-[15px] hover:underline hidden sm:inline">
              - {post.timestamp}
            </span>
          </div>

          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2 hidden sm:inline" />
        </div>

        {/* post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* post image */}
        <img className="rounded-xl" src={post.img} alt="" />

        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
