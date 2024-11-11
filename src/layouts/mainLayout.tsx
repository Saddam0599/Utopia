import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import ListPage from "../pages/listPage/ListPage";



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
        <ListPage/>
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
