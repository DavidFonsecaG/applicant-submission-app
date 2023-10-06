import React from 'react';
import DocumentCard  from './DocumentCard';

const DocumentsTable = ({ documents, isToggled, setCurrentDocument }) => {
  const columnsTitle = [
    "Document",
    "Status",
    "Uploaded",
    "Actions"
  ];

  return (
    <div className={`${
      isToggled ? "" : "overflow-x-auto"
    } w-full h-full bg-white`}>
      <table className="min-w-max w-full table-auto">
        {!isToggled && <thead>
          <tr className="text-gray-900 leading-normal border-b border-gray-300">
            {columnsTitle.map ((title) => {
              return <th key={title} className="font-medium py-3 px-6 text-left">{title}</th>
            })}
          </tr>
        </thead>}
        <tbody className="text-gray-600 text-sm font-light">
          {documents.map((document) => {
            return <DocumentCard key={document.id} document={document} isToggled={isToggled} setCurrentDocument={setCurrentDocument}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DocumentsTable;