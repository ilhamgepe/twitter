import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

const Sidebar = () => {
  const [sidebarItems, setSidebarItems] = useState([
    {
      text: "Home",
      Icon: HomeIcon,
      active: true,
    },
    {
      text: "Explore",
      Icon: HashtagIcon,
    },
    {
      text: "Notifications",
      Icon: BellIcon,
    },
    {
      text: "Messeges",
      Icon: InboxIcon,
    },
    {
      text: "Bookmark",
      Icon: BookmarkIcon,
    },
    {
      text: "List",
      Icon: ClipboardIcon,
    },
    {
      text: "Profile",
      Icon: UserIcon,
    },
    {
      text: "More",
      Icon: DotsCircleHorizontalIcon,
    },
  ]);

  return (
    <div className="flex flex-col p-2 xl:items-start fixed h-full">
      {/* twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:p-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          width="50"
          height="50"
          alt="logo-sidebar"
        />
      </div>
      {/* menu */}
      {sidebarItems && (
        <div className="mt-4 mb-2.5 xl:items-start">
          {sidebarItems.map((sidebarItem, i) => (
            <SidebarMenuItem
              text={sidebarItem.text}
              Icon={sidebarItem.Icon}
              active={sidebarItem.active}
              key={i}
            />
          ))}
        </div>
      )}

      {/* button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-full w-10 h-10 xl:mr-2"
          src="https://pbs.twimg.com/media/EI83M8nXYAM2W3P.jpg"
          alt="mini-profile"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Nezuko</h4>
          <p className="text-gray-500">@nezuko</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
