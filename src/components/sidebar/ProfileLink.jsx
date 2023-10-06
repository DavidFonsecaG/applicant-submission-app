import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileLink = () => {
    const { username } = useSelector((state) => state.auth);

    const user = {
      name: username,
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    };

    return (
        <li className="mt-20" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <Link className="flex items-center px-4 py-3 hover:bg-gray-800"
            to={"/your-profile"}>
            <img
                className="h-8 w-8 mr-5 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                />
            <span className="text-white text-sm font-semibold w-full" aria-hidden="true">{user.name}</span>
            </Link>
        </li> 
    );
};

export default ProfileLink;
