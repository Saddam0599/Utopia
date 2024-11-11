import React, { useEffect } from 'react';
import { useStore } from '../../store/useStore';
import ListingCard from '../../components/listCard/ListCard';
import Frame from "../../assets/icons/Frame.svg";
import Beforicon from "../../assets/icons/Beforicon.svg";
import Aftericon from "../../assets/icons/Aftericon.svg";
import { useNavigate } from 'react-router-dom';



const Listing: React.FC = () => {
  const { listings, fetchListings } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return (
    <div className="listing" >
      <div
        style={{
          width: "1240px",
          height: "40px",
          marginTop: "53px",
          paddingTop: "68px",
          marginLeft: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "30%", height: "40px", display: "flex", alignItems: "center" }}>
          <h2 className="listing__title">Топ объявления</h2>
          <img src={Frame} alt="Frame.svg" style={{ width: "36px", height: "36px", marginLeft: "21px" }} />
        </div>
        <div style={{ width: "20%", height: "40px", display: "flex", alignItems: "center", justifyContent: "end" }}>
          <button onClick={() => navigate('/')} style={{border: "none"}}>
            <img src={Beforicon} alt="Beforicon.svg" style={{ width: "28px", height: "28px" }} />
          </button>
          <button onClick={() => navigate('/GridCard')} style={{border: "none"}}>
            <img src={Aftericon} alt="Aftericon.svg" style={{ width: "28px", height: "28px", marginLeft: "5px" }} />
          </button>
        </div>
      </div>

      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />

      ))}
    </div>
  );
};

export default Listing;






import { AiOutlineFire } from "react-icons/ai";
import { FiGrid, FiServer } from "react-icons/fi";
import HomePageRow from "./homePageRow";
import HomePageColumn from "./homePageColumn";
import { FC, useState } from "react";
import { Typography, Button, Space, Row, Col } from "antd";

const { Title } = Typography;

const HomePage: FC = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <div style={{ padding: "16px" }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: "56px", marginTop: "68px" }}>
        <Col>
          <Title level={2} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#1890ff" }}>
            Топ объявления
            <AiOutlineFire style={{ fontSize: "28px", color: "#1890ff" }} />
          </Title>
        </Col>
        <Col>
          <Space>
            <Button
              shape="circle"
              onClick={() => setTab(1)}
              icon={<FiServer size={28} />}
              style={{
                color: tab === 1 ? "#1890ff" : "#8c8c8c",
                borderColor: tab === 1 ? "#1890ff" : "#d9d9d9",
              }}
            />
            <Button
              shape="circle"
              onClick={() => setTab(2)}
              icon={<FiGrid size={28} />}
              style={{
                color: tab === 2 ? "#1890ff" : "#8c8c8c",
                borderColor: tab === 2 ? "#1890ff" : "#d9d9d9",
              }}
            />
          </Space>
        </Col>
      </Row>

      {tab === 1 ? <HomePageColumn /> : <HomePageRow />}
    </div>
  );
};

export default HomePage;
   