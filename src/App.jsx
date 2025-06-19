import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import CustomerRouters from './Routers/CustomerRouters'
import AdminRouters from "./Routers/AdminRouters";
import { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Toaster position="top-right" /> */}
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin/*" element={<AdminRouters />} />
      </Routes>
    </>
  );
}

export default App
