import { useState, useEffect, useCallback } from "react";
import { getApplications } from '../services/getApplications';

const useFecthApplications = (statusFilter) => {
  const [applications, setApplications] = useState([]);
  
  const fetchData = useCallback(async () => {

    try {
      const apps = await getApplications();
      setApplications(apps);

    } catch (error) {
      console.error('Error fetching students with apps:', error);

    }
  }, []);

  useEffect(() => {
      fetchData();
  }, [statusFilter, fetchData]);

  return applications;
};

export default useFecthApplications;
