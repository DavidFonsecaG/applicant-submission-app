import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import StudentPage from '../pages/student/StudentPage'

const StudentRouter = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={ <StudentPage /> }/>
      <Route path='/page-not-found' element={<StudentPage />}/>
      <Route path="*" element={<Navigate to={ '/page-not-found' }/>} />
    </Routes>
  );
};

export default StudentRouter;


