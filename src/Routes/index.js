// src/Routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import SignIn from '../components/LogIn';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default RoutesComponent;
