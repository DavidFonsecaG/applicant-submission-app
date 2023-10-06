import { useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoading, finishLoading } from "../actions/ui";


const useFetchUserData = () => {
  
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const fetchUserData = (user) => {
      dispatch( startLoading() )
      db.collection('users').doc(user.uid).get()
        .then((doc) => {
          if(doc.exists) {
              const userRole = doc.data().role
              dispatch( login( user.uid, user.displayName, userRole ) );
          } else {
            console.log("User document doesn't exist");
          }
        }).catch(e => {
            console.log("Error getting user document:", e);
        }).finally(() => {
          setIsAuthenticated(true);
          dispatch( finishLoading() );
        });
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
        if(user?.uid) {
          fetchUserData(user)
        }else{
          setIsAuthenticated(false);
        }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return isAuthenticated;
};

export default useFetchUserData;
