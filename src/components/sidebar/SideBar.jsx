import { useLocation } from "react-router-dom";
import useSidebarHover from "../../hooks/useSidebarHover"
import OpenCloseButton from "./OpenCloseButton";
import MainMenu from "./MainMenu";
import QuickViewsMenu from "./QuickViewsMenu";
import ProfileLink from "./ProfileLink";

const SideBar = () => {
  const location = useLocation().pathname;
  const statusFilter = new URLSearchParams(useLocation().search).get('status');
  const { isSidebarOpen, handleSidebarOpen } = useSidebarHover();

  return (
    <div className={`${
      isSidebarOpen ? "flex-grow" : ""
      } z-10 bg-white dark:bg-gray-900 dark:border-gray-800 overflow-hidden max-w-[12rem] lg:max-w-[15rem] flex-shrink-0 border-r border-gray-200 dark:border-gray-200 hidden sm:flex transition-all duration-300 overflow-visible`}>
        <div className="flex-grow flex h-full flex-col px-4 space-y-5">
          <div className={`${isSidebarOpen ? "ml-2" : "" } relative flex h-16 flex-shrink-0 items-center justify-between transition-all duration-300`}>
            <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="My Company" />
            <OpenCloseButton isSidebarOpen={isSidebarOpen} handleSidebarOpen={handleSidebarOpen}/>
          </div>
          <nav className="flex-grow flex mt-4">
            <ul className="flex flex-col flex-grow justify-between">
              <MainMenu location={ location } isSidebarOpen={isSidebarOpen}/>
              <QuickViewsMenu statusFilter={ statusFilter } isSidebarOpen={isSidebarOpen}/>
              <ProfileLink location={ location } isSidebarOpen={isSidebarOpen}/>
            </ul>
          </nav>
        </div>
    </div>
  );
};

export default SideBar;
