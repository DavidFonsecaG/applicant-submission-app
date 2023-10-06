import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import classNames from '../../../utilities/classNames';


const ApplicationCard = ({ id, program, status, student, term, type }) => {
  const appTypes = {
    Abroad: "bg-cyan-100 text-cyan-500",
    COS: "bg-yellow-100 text-yellow-600",
    Transfer: "bg-green-100 text-green-600",
    Reinstatement: "bg-blue-100 text-blue-600",
    COEL: "bg-purple-100 text-purple-600",
  };

  const { applicationId } = useParams();
  
  const navigate = useNavigate();
  const displayCurrentStudent = () => {
    navigate(`/applications/${id}`);
  };

  const cardClassNames = classNames(
    applicationId === id
    ? "shadow-lg relative ring-2 ring-offset-2 ring-blue-500 focus:outline-none" 
    : "",
    "bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 border hover:border-gray-300"
  );

  return (
    <button key={ id } 
      className={ cardClassNames }
      onClick={ displayCurrentStudent }
    >
      <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
        <img src={ student.src } className="w-7 h-7 mr-2 rounded-full" alt="profile" />
        { student.name }
      </div>
      <div className="flex items-center w-full">
        <div className={classNames(
            appTypes[type],
            "text-xs py-1 px-2 leading-none dark:bg-gray-900 rounded-md"
          )}
        >
          { type }
        </div>
        <div className="ml-auto text-xs text-gray-400">{ program }</div>
      </div>
    </button>
  );
};

export default ApplicationCard;
