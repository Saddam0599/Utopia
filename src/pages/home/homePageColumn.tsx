import { HiOutlineHeart, HiHeart } from 'react-icons/hi2';
import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { toggleFavorite } from "../../reducer/redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RingLoader } from "react-spinners";
import { Card, Typography, Button, List, Col, Row, Space, Divider } from "antd";

const { Title, Text } = Typography;

type Product = {
  id: number;
  img: string;
  isLiked: boolean;
  title: string;
  price: string;
  createdAt: number;
  name: string;
  photo: string;
  number: string;
};

const HomePageColumn: FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const { data: products, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce');
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <RingLoader color="orange" size={100} />
      </div>
    );
  }

  if (error instanceof Error) {
    return <p>Error loading products: {error.message}</p>;
  }

  const handleToggleFavorite = (productId: number) => {
    dispatch(toggleFavorite(productId));
  };

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={products}
      renderItem={(product) => (
        <List.Item>
          <Card
            bordered
            style={{ maxWidth: 1400, borderRadius: 10 }}
            bodyStyle={{ display: "flex", padding: "24px" }}
          >
            <Row gutter={16}>
              <Col>
                <Link to={`/product/${product.id}`}>
                  <img src={product.photo} alt={product.title} style={{ width: 290, height: 200, borderRadius: "10px 0 0 10px" }} />
                </Link>
              </Col>
              <Col flex="auto">
                <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                  <Row justify="space-between" align="middle">
                    <Title level={4} style={{ margin: 0, color: "#1890ff" }}>{product.title}</Title>
                    <Button
                      type="text"
                      icon={favorites.includes(product.id) ? <HiHeart style={{ color: "red" }} /> : <HiOutlineHeart />}
                      onClick={() => handleToggleFavorite(product.id)}
                    />
                  </Row>

                  <Row gutter={16}>
                    <Col>
                      <Space align="center">
                        <img src="./sofa_img.svg" alt="icon" />
                        <Text>10</Text>
                      </Space>
                    </Col>
                    <Col>
                      <Space align="center">
                        <img src="./Area_icon.svg" alt="icon" />
                        <Text>{product.price}M<sup>2</sup></Text>
                      </Space>
                    </Col>
                    <Col>
                      <Space align="center">
                        <img src="./brush.svg" alt="icon" />
                        <Text>Евроремонт</Text>
                      </Space>
                    </Col>
                  </Row>

                  <Row justify="space-between" align="middle">
                    <Text strong style={{ fontSize: 20, color: "#8c8c8c" }}>${product.number}</Text>
                    <Text type="secondary">г.Ташкент, Юнусабадский р-н, ул.Янгишахар</Text>
                  </Row>
                </Space>
              </Col>
            </Row>
            <Divider type="vertical" style={{ height: "200px", backgroundColor: "#d9d9d9", position: "absolute", right: 0, borderRadius: "0 10px 10px 0" }} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default HomePageColumn;
