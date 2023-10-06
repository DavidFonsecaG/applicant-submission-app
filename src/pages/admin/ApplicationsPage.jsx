import React from 'react';
import { useLocation } from 'react-router-dom';
import { ApplicationsBar }from '../../features/applications';
import { DocumentsBar } from '../../features/documents';

const ApplicationsPage = () => {
  const statusFilter = new URLSearchParams(useLocation().search).get('status');

  return (
    <div className="flex-grow flex overflow-x-hidden">
      <ApplicationsBar statusFilter={ statusFilter } />
      <DocumentsBar />
    </div>
  );
};

export default ApplicationsPage;

