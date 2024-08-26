import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FileDisplay from './FileDisplay';


const DocumentViewer = ({setIsToggled, title, type, downloadUrl}) => {
  const { applicationId } = useParams();

  const navigate = useNavigate();

  const handelClose = () => {
    setIsToggled(false);
    navigate(`/applications/${applicationId}`)
  };

  const handleAccepted = () => {
    
  };

  const handleDenied = () => {
    
  };

  return (
    <div className="flex flex-col flex-grow h-full">
      
      <div className="bg-white h-14 border-b text-gray-700 ">
        <div className="mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex h-14 items-center justify-between">
            <div className="w-1/4 space-y-1">
              <span className="sm:ml-3">
                <button 
                  type="button" 
                  onClick={handleAccepted}
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <svg className="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
              <span className="sm:ml-3">
                <button 
                  type="button"
                  onClick={handleDenied}
                  className="inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <svg className="-ml-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            </div>
            <div className="w-1/4 text-center">{`${title}.${type}`}</div>
            <div className="flex w-1/4 hover:text-gray-500 justify-end">
              <div className="w-5 h-5 cursor-pointer"  onClick={handelClose}>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-full overflow-y-auto">
        <div className="flex items-center justify-center bg-white px-6 py-10 my-4 shadow-xl ring-1 ring-gray-900/5 w-full h-full sm:max-w-xl sm:rounded-lg sm:px-10">
          <FileDisplay fileType={type} fileUrl={downloadUrl} />
        </div>
      </div>

    </div>
  )
};

export default DocumentViewer;

