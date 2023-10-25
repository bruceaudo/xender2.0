
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxArrowDownIcon,
  PaperAirplaneIcon,
  RssIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  
  return (
    <div className="fixed top-12 bottom-12 left-0 w-16 bg-gray-200 z-10 p-5 border-r border-r-gray-300 flex flex-col justify-between">
      <div className="flex flex-col gap-y-8">
        <Link href={"/"} className="cursor-pointer">
          <HomeIcon className="h-6 w-6" />
        </Link>
        <div className="cursor-pointer">
          <RssIcon className="h-6 w-6" />
        </div>
        <Link href={"/send"} className="cursor-pointer">
          <PaperAirplaneIcon className="h-6 w-6" />
        </Link>
        <div className="cursor-pointer">
          <InboxArrowDownIcon className="w-6 h-6" />
        </div>
      </div>
      <Link href={"/settings"} className="cursor-pointer">
        <Cog6ToothIcon className="h-6 w-6" />
      </Link>
    </div>
  );
};
export default Sidebar;
