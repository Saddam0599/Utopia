import React from "react";
import { Input, Button, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  HeartOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "../../index.css";
import MyOrders from "../../assets/icons/MyOrders.svg";

const Header: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="uz">O'z</Menu.Item>
      <Menu.Item key="ru">Ру</Menu.Item>
      <Menu.Item key="en">Eng</Menu.Item>
    </Menu>
  );

  return (
    <header
      style={{
        maxWidth: "1478px",
        width: "100%",
        height: "110px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        position: "fixed",
        zIndex: 1000,
        borderLeft: "0.1px solid #f0f0f0",
        marginLeft: "440px"
      }}
    >
      <Input
        placeholder="Найти объявление..."
        suffix={
          <SearchOutlined
            style={{ fontSize: 18.72, color: " rgba(93, 93, 93, 1)" }}
          />
        }
        style={{
          width: 300,
          height: 45,
          backgroundColor: "rgba(243, 243, 243, 1)",
          color: "rgba(154, 154, 154, 1)",
          // fontFamily: 'Roboto',
          fontFamily: "sans-serif",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "16.41px",
          textAlign: "left",
          marginTop: 33,
          marginRight: 440,
          marginBottom: 33,
          marginLeft: 75,
        }}
        className="custom-input"
      />

      <div
        style={{ display: "flex", alignItems: "center", marginRight: "160px"

        }}
      >
        <Button
          type="primary"
          style={{
            width: 200,
            height: 45,
            marginRight: 10,
            backgroundColor: "#F58D1E",
            borderColor: "rgba(252, 163, 17, 1)",
            color: "black",
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "16.41px",
            textAlign: "center",
          }}
        >
          Разместить объявление
        </Button>
        <img src={MyOrders} alt="MyOrders.svg"  style={{ 
            width: "3.17em", 
            height: "3.42em", 
            marginTop: "3.8vh", 
            marginLeft: 70 }} />
       
        <HeartOutlined
          style={{
            width: 19.5,
            height: 17.33,
            fontSize: 20,
            color: "black",
            marginRight: 15,
          }}
        />
        <UserOutlined
          style={{
            width: 17.33,
            height: 19.5,
            fontSize: 20,
            color: "black",
            marginRight: 15,
          }}
        />
        <Dropdown overlay={menu}>
          <Button
            style={{
              marginLeft: 70,
              width: 75,
              height: 45,
              backgroundColor: "rgba(243, 243, 243, 1)",
              color: "rgba(154, 154, 154, 1)",
            }}
          >
            Ру{" "}
            <DownOutlined
              style={{
                width: 11,
                height: 6,
                color: " rgba(93, 93, 93, 1)",
                fontFamily: "sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "21.09px",
                textAlign: "center",
              }}
            />
          </Button>
        </Dropdown>

      </div>
    </header>
  );
};

export default Header;
