import { useState, useEffect } from 'react';
import { db } from '../services/firebase';


const useFirestoreSubscription = (collectionName, filterField, filterValue) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection(collectionName).where(filterField, '==', filterValue).onSnapshot(snapshot => {
      const newData = [];
      snapshot.forEach(doc => {
        newData.push({ id: doc.id, ...doc.data() });
      });
      setData(newData);
    });

    return () => unsubscribe();
  }, [collectionName, filterField, filterValue]);

  return data;
};

export default useFirestoreSubscription;