import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../Admin/Admin'; // Ensure correct path and import/export

const AdminRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  );
};

export default AdminRouters;
