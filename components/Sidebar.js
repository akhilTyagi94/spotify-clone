import Image from "next/image";
import {
  FaChartBar,
  FaClock,
  FaHouse,
  FaMicrophone,
  FaEllipsis,
  FaRegCompass,
} from "react-icons/fa6";

function Sidebar() {
  return (
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
      <Image src="/logo.png" width={56} height={56} objectFit="contain" />
      <div className="flex flex-col space-y-8 w-6 items-center">
        <FaHouse className="sidebarIcon text-white opacity-[0.85]" />
        <FaRegCompass className="sidebarIcon" />
        <FaMicrophone className="sidebarIcon" />
        <FaChartBar className="sidebarIcon" />
        <FaClock className="sidebarIcon" />
        <FaEllipsis className="sidebarIcon" />
      </div>
    </section>
  );
}

export default Sidebar;
