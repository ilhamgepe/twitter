import { SparklesIcon } from "@heroicons/react/outline";
import InputTweet from "./InputTweet";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Nezuko Kamado",
      username: "nezukokamado",
      userImg: "https://pbs.twimg.com/media/EI83M8nXYAM2W3P.jpg",
      img: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "Thank you for making this statue for me",
      timestamp: "1 hour ago",
    },
    {
      id: "2",
      name: "Nezuko Kamado",
      username: "nezukokamado",
      userImg: "https://pbs.twimg.com/media/EI83M8nXYAM2W3P.jpg",
      img: "https://images.unsplash.com/photo-1598669266459-eef1467c15be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
      text: "Ganbatte Inosuke Hashibira!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[300px] border-l border-r xl:min-w-[576px] ml-[67px] flex-grow max-w-3xl ">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <InputTweet />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
