import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from '../../../utilities/classNames';


const DocumentCard = ({ document, isToggled, setCurrentDocument }) => {
  const documentStatus = {
    "In Progress": "bg-cyan-100 text-cyan-500",
    "Pending": "bg-yellow-100 text-yellow-600",
    "Action Required": "bg-red-100 text-red-600",
    "Completed": "bg-green-100 text-green-600",
  };

  const { applicationId } = useParams();

  const navigate = useNavigate();
  const displayCurrentDocument = () => {
    setCurrentDocument(document);
    navigate(`/applications/${applicationId}/${document.id}`);
  };

  return (
      <tr className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
        key={document.id}
        onClick={displayCurrentDocument}
      >
        <td className="py-3 px-6 text-left ">
          <div className={`${isToggled ? "flex-col w-[3rem]" : ""} relative flex items-center`}>
            <div className={`${isToggled ? "mb-1" : "mr-5"}`}>
              <img src={`/assets/${document.type}.png`} className="w-6 h-6" alt="doc" />
            </div>
            { isToggled && document.status === "Action Required" &&
              <span className="absolute right-0.5 -top-1.5 flex h-4 w-4 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-25"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            }
            <span className={`${isToggled ? "text-xs text-center" : ""} font-normal`}>{document.title}</span>
          </div>
        </td>
        {!isToggled && <>
          <td className="py-3 px-6 text-left">
            <span className={classNames(
              documentStatus[document.status],
              "text-xs py-1 px-2 leading-none dark:bg-gray-900 rounded-md"
            )}>
              {document.status}
            </span>
          </td>
          <td className="py-3 px-6 text-left">
            <span>09/03/2023</span>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex item-center justify-start">
              <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </td>
        </>}
      </tr>
  );
};

export default DocumentCard;
