import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import DocumentsBarHeader from './DocumentsBarHeader';
import DocumentsTable from './DocumentsTable';
import DocumentViewer  from './DocumentViewer';
import useFetchDocuments from '../hooks/useFetchDocuments';
import LoadingSpinner from '../../loading/components/LoadingSpinner';
import SelectItem from '../../../components/SelectItem';

const DocumentsBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [currentDocument, setCurrentDocument] = useState({});

  const { loadingDocsBar } = useSelector(state => state.ui);
  const { application, documents } = useFetchDocuments();
  const { documentId } = useParams();
  
  useEffect(() => {
    if(documentId){
      setIsToggled(true)
    } else {
      setIsToggled(false)
    }
  }, [documentId]);

  if(loadingDocsBar) {
    return (
      <LoadingSpinner />
    )
  };

  return (
    application
      ? <div className="flex-grow flex dark:bg-gray-900 overflow-y-auto">
          <div className={`${ 
            isToggled ? "w-[6rem] border-r" : "flex-grow"
          } flex flex-col transition-all duration-300`}>
            <DocumentsBarHeader { ...application } />
            <DocumentsTable documents={ documents } isToggled={isToggled} setCurrentDocument={setCurrentDocument}/>
          </div>
          { documentId && <DocumentViewer setIsToggled={setIsToggled} {...currentDocument}/> }
        </div>
      : <SelectItem type="an application" />
  )
};

export default DocumentsBar;