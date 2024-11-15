import { Link } from "react-router-dom";
import classNames from "../../utilities/classNames";
import formatString from '../../utilities/stringFormatter';

const QuickViewsMenu = ({ statusFilter, isSidebarOpen }) => {

    const quickViews = [
        {
        name: "action-required",
        initial:"A",
        to: "/applications?status=action-required",
        },
        {
        name: "in-progress",
        initial:"I",
        to: "/applications?status=in-progress",
        },
        {
        name: "completed",
        initial:"C",
        to: "/applications?status=completed",
        },
    ];

    console.log("-->> status: ", statusFilter)

    return (
        <li className="space-y-2 pt-4">
            {isSidebarOpen ? <div className="text-xs font-semibold leading-6">Quick Links</div> : <div className="min-h-[15px] mb-[18px] border-b border-gray-200"></div>}
            <ul>
                <li className="flex flex-col space-y-1">
                    {quickViews.map((item, index) => (
                        <Link
                        key={index}
                        to={item.to}
                        className={classNames(
                            statusFilter === item.name ? "bg-gray-50 text-indigo-600 dark:bg-gray-800 dark:text-white" : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-white",
                            "flex items-center rounded-md p-2 text-sm font-semibold gap-x-3"
                            )}
                        aria-current={statusFilter === item.name ? "page" : undefined}
                        >
                        <span className="flex bg-white border-gray-200 text-gray-600 dark:bg-gray-800 border hover:border-indigo-600 dark:border-gray-700 dark:text-white shrink-0 text-[11px] w-6 h-6 rounded-lg items-center justify-center">{item.initial}</span>
                        {isSidebarOpen && <span>{formatString(item.name)}</span>}
                        </Link>
                    ))}
                </li>
            </ul>
        </li>
    );
};

export default QuickViewsMenu;
