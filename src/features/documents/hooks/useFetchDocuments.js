import { useState, useEffect, useCallback }  from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GetAppWithDocuments } from '../services/GetAppWithDocuments';
import { startLoadingDocumentsBar, finishLoadingDocumentsBar } from "../../../actions/ui";

const useFetchDocuments = () => {
  const [data, setData] = useState([]);
  const { applicationId } = useParams();
  const dispatch = useDispatch();
  
  const fetchDocuments = useCallback(async () => {
    dispatch( startLoadingDocumentsBar() )

    try {
      const response = await GetAppWithDocuments(applicationId);
      setData(response);
      dispatch( finishLoadingDocumentsBar() );

    } catch (error) {
      console.error('Error fetching applications with apps:', error);
      dispatch( finishLoadingDocumentsBar() );

    }
  }, [applicationId, dispatch]);

  useEffect(() => {
    if(applicationId){
      fetchDocuments();
    }
  }, [applicationId, fetchDocuments]);

  return data;
};

export default useFetchDocuments;
