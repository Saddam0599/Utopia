import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../layouts/mainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Single from "../pages/channel/Single";
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/auth/Login';
import Favorites from '../pages/favorites/Favorites';
import Cart from '../pages/cart/Cart';
import GridCard from "../components/gridCard/GridCard";
import ListingCard from '../components/listCard/ListCard';
import { List } from 'antd';




const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/single" element={<Layout><Single /></Layout>} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/favorites" element={<Layout><Favorites /></Layout>} />
      <Route path="/ListingCard" element={<Layout><ListingCard /></Layout>} />
      <Route path="/cart" element={<Layout><Cart /></Layout>} />
      <Route path="/List" element={<Layout><List /></Layout>} />
      <Route path="/gridCard" element={<GridCard />} />
      <Route 
        path="/login" 
        element={<Login />} 
      />
    </Routes>
  </Router>
);

export default AppRoutes;




