import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import LoadingSpinner from '../features/loading/components/LoadingSpinner';
import useFetchUserData from '../hooks/useFetchUserData';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import RoleRouter from './RoleRouter';

const AppRouter = () => {
  
  const isAuthenticated = useFetchUserData();
  const { loading } = useSelector(state => state.ui);
  
  const lastPath = () => {
    const lastPath = localStorage.getItem('lastPath');
    return lastPath === '/' ? '/dashboard' : lastPath;
  };

  if(loading) {
    return (
      <div className="h-screen">
        <LoadingSpinner />
      </div>
    )
  };

  return (
    <BrowserRouter>        
      <Routes>

        <Route path="/signup" element={
          <PublicRouter isAuthenticated={ isAuthenticated } lastPath={lastPath()}>
            <Signup />
          </PublicRouter>
        } />

        <Route path="/login" element={
          <PublicRouter isAuthenticated={ isAuthenticated } lastPath={lastPath()}>
            <Login />
          </PublicRouter>
        } />

        <Route path="/*" element={
          <PrivateRouter isAuthenticated={ isAuthenticated }>
            <RoleRouter />
          </PrivateRouter>
        } />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

