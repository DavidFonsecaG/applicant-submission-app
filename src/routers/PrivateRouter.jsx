import { useLocation, Navigate } from 'react-router-dom';

const PrivateRouter = ({ children, isAuthenticated }) => {

    const { pathname, search } = useLocation();
    localStorage.setItem('lastPath', pathname + search );

    return isAuthenticated
        ? children
        : <Navigate to="/login"/>

};

export default PrivateRouter;

