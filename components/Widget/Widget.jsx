import { SearchIcon } from "@heroicons/react/outline";

const Widget = () => {
  return (
    <div className="hidden lg:w-[600px] lg:inline mx-auto ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] static top-0 bg-white py-1.5 z-50">
        <div className="flex items-center relative p-3 rounded-full">
          <SearchIcon className="h-5 z-50 text-gray-500 ml-3" />
          <input
            className="absolute rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Widget;
