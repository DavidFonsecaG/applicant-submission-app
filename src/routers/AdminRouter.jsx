import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { SideBar } from '../components/sidebar'
import AdminPage from '../pages/admin/AdminPage'
import ApplicationsPage from '../pages/admin/ApplicationsPage'
import UsersPage from '../pages/admin/UsersPage'


const AdminRouter = () => {

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-400 h-screen flex overflow-hidden">
        <SideBar />
        <div className="flex-grow overflow-hidden h-full flex flex-col">
          <Navbar />
          <main className="flex-grow flex h-full overflow-x-hidden">
              <Routes>
                <Route path='/dashboard' element={ <AdminPage /> }/>
                <Route path='/applications' element={ <ApplicationsPage /> }/>
                <Route path='/applications/:applicationId' element={ <ApplicationsPage /> }/>
                <Route path='/applications/:applicationId/:documentId' element={ <ApplicationsPage /> }/>
                <Route path='/students' element={ <AdminPage /> }/>
                <Route path='/users' element={ <UsersPage /> }/>
                <Route path='/reports' element={ <AdminPage /> }/>
                <Route path='/settings' element={ <AdminPage /> }/>
                <Route path='/your-profile' element={ <AdminPage /> }/>
                <Route path='/page-not-found' element={<AdminPage />}/>
                <Route path="*" element={<Navigate to={ '/page-not-found' }/>} />
              </Routes>
          </main>
        </div>
    </div>
  );
};

export default AdminRouter;

