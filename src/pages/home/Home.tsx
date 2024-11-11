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
