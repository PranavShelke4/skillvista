import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "../App";


import HomePage from '../pages/Home';
import ServicePage from '../pages/services';



const ConfigRoutes = () => {
  return (
    <>
        <Routes> 
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />}  />
            <Route path="/services" element={<ServicePage />} />

        
        </Routes>
    </>
  )
}

export default ConfigRoutes