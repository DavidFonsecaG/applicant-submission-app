import React from "react";
import { getAppsByStatus } from '../services/getAppsByStatus';
import useFecthApplications from "../hooks/useFetchApplications";
import formatString from '../../../utilities/stringFormatter';
import ApplicationCard from "./ApplicationCard";

const ApplicationsBar = ( {statusFilter} ) => {

  const applications = useFecthApplications(statusFilter);
  const filterredApplications = statusFilter ? getAppsByStatus(formatString(statusFilter), applications) : applications;

  return (
    <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
      <div className="text-xs text-gray-400 tracking-wider">APPLICATIONS</div>
      <div className="space-y-4 mt-3">
        {filterredApplications.map((application) => {
          return <ApplicationCard key={ application.id } { ...application } />;
        })}
      </div>
    </div>
  );
};

export default ApplicationsBar;
