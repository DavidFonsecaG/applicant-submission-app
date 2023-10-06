import React from 'react'
import { useSelector } from 'react-redux';
import AdminRouter from './AdminRouter'
import StudentRouter from './StudentRouter'

const RoleRouter = () => {

  const { role } = useSelector(state => state.auth);

  switch (role) {
    case 'Admin':
      return <AdminRouter />
    case 'Advisor':
      return <AdminRouter />
    default:
      return <StudentRouter />
  };
};

export default RoleRouter;

