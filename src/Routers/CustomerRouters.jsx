import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Navbar from '../customer/component/Navbar';
import HomePage from '../customer/pages/homePage/HomePage';
import AboutUs from '../customer/pages/aboutUs/AboutUs';
import Collection from '../customer/pages/Category/ProductGrid';
import Support from '../customer/pages/support/Support.jsx';
import Checkout from '../customer/pages/Category/Checkout';
import SignIn from '../customer/pages/login/SignIn';
import SignUp from '../customer/pages/login/SignUp';
import Profile from '../customer/pages/Profile/Profile.jsx';
import Order from '../customer/pages/order/Order.jsx';
import Setting from '../customer/pages/setting/Setting.jsx';
import ProductView from '../customer/component/Product/ProductView.jsx';
import CartPage from '../customer/pages/cart/CartPage.jsx';
import ProfilePage from '../customer/pages/profilePage/ProfilePage.jsx';
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<Order />} />
        <Route path='/product/:id' element={<ProductView />} />
        <Route path='/cart' element={<CartPage/>}/>
       
        <Route path="/settings" element={<Setting />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      
    </div>
  );
};

export default CustomerRouters;
