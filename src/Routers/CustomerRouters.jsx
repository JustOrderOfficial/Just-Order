import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Footer from '../customer/component/Footer';
import Navbar from '../customer/component/Navbar';
import HomePage from '../customer/pages/homePage/HomePage';
import AboutUs from '../customer/pages/aboutUs/AboutUs';
import Collection from '../customer/pages/Category/ProductGrid';
import Support from '../customer/pages/support/Support.jsx';
import Checkout from '../customer/pages/Category/Checkout';
import SignIn from '../customer/pages/login/SignIn';
import SignUp from '../customer/pages/login/SignUp';
// import NotFound from './customer/pages/not-found/NotFound';

const CustomerRouters = () => {
  const backgroundImage = "url('/assets/images/signIn.png')";
  return (
    <div className="App min-h-screen bg-repeat" style={{ backgroundImage }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs/AboutUs" element={<AboutUs />} />
        <Route path="/Category/ProductGrid" element={<Collection />} />
        <Route path="/support/Support" element={<Support />} />
        <Route path="/Category/Checkout" element={<Checkout />} />
        <Route path="/login/SignIn" element={<SignIn />} />
        <Route path="/login/SignUp" element={<SignUp />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default CustomerRouters;
