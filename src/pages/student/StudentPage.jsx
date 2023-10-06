import React from 'react';
import Navbar from '../../components/Navbar'


const StudentPage = () => {

  return (

  <div className="min-h-screen max-h-screen">
    <Navbar /> {/* Needs to change based on role */}
    <div className="w-full max-h-screen border-2 border-rose-600">
      <main>
        <div>
            <h1>Student</h1>
        </div>
      </main> 
      </div>
    </div>
  );
};

export default StudentPage;

