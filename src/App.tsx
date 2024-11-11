import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/mainLayout"; 
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import AuthPage from "./pages/auth/Login";
import SinglePage from './pages/singlePage/SinglePage';
import FavouritePage from "./pages/favorites/Favorites";
import { AuthProvider } from './pages/authcontext/authcontext';
// import { Provider } from "react-redux";
// import store from "./main/store";
// import Profile from "./ase";
// import FormPage from "./pages/profile/";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "auth", element: <AuthPage /> },
      { path: "product/:id", element: <SinglePage /> },
      { path: "favouritePage", element: <FavouritePage /> },
      { path: "profile", element: <Profile /> },
      { path: "formPage", element: <FormPage /> }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Login</Menu.Item>
                <Menu.Item key="3">Profile</Menu.Item>
                <Menu.Item key="4">Favorites</Menu.Item>
              </Menu>
            </Header>

            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <div style={{ padding: 24, minHeight: 380 }}>
                <RouterProvider router={router} />
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
           
            </Footer>
          </Layout>

          <ToastContainer />
        </QueryClientProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
