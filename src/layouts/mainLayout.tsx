import Footer from '../components/ProductCard';
import Header from '../components/header/header';
import { Outlet, useLocation } from "react-router-dom";
import DrawerPage from '../pages/drawer/DrawerPag';
import { FC } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const MainLayout: FC = () => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#001529", color: "white" }}>
      <Header />
      <DrawerPage />
      <Content style={{ maxWidth: 1400, margin: "0 auto", padding: "20px", flex: 1 }}>
        <Outlet />
      </Content>
      {location.pathname !== "/login" && location.pathname !== "/auth" && <Footer />}
    </Layout>
  );
};

export default MainLayout;
