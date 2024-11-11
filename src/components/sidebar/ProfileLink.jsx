import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "../../utilities/classNames";
import { linkWithCredential } from "firebase/auth";

const ProfileLink = ({ location, isSidebarOpen }) => {
    const { username } = useSelector((state) => state.auth);

    const user = {
      name: username,
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    };

    return (
        <li className="flex flex-col mt-20" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <Link className={classNames(
                    location === "/your-profile" ? "bg-gray-50 dark:bg-gray-800 dark:text-white" : 
                    "hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-white",
                    "flex items-center px-5 py-3 text-gray-700"
                )}
            to={"/your-profile"}>
            <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                />
            { isSidebarOpen && <span className="text-sm ml-5 font-semibold w-full" aria-hidden="true">{user.name}</span>}
            </Link>
        </li>
    );
};

export default ProfileLink;
