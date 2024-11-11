import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import { toggleFavorite } from "../../reducer/redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Spin, Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

type Product = {
  id: number;
  img: string;
  isLiked: boolean;
  title: string;
  price: string;
  createdAt: string;
  name: string;
  photo: string;
  number: string;
};

const HomePageRow: FC = () => {
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
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
    <div style={{ paddingTop: '68px' }}>
      <Row gutter={[32, 32]} justify="center">
        {products?.map((product: Product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.title} src={product.photo} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />}
              actions={[
                <Text strong>${product.number}</Text>,
                <div onClick={() => handleToggleFavorite(product.id)}>
                  {favorites.includes(product.id) ? (
                    <HeartFilled style={{ color: 'red', fontSize: '24px' }} />
                  ) : (
                    <HeartOutlined style={{ fontSize: '24px' }} />
                  )}
                </div>
              ]}
              style={{ borderRadius: 10 }}
            >
              <Title level={4}>{product.title}</Title>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <Text type="secondary">г.Ташкент</Text>
                <Text type="secondary">{product.createdAt}</Text>
              </div>
              <div style={{ display: 'flex', gap: '10px', color: '#999' }}>
                <img src="./sofa_img.svg" alt="icon" />
                <Text>10</Text>
                <img src="./Area_icon.svg" alt="icon" />
                <Text>{product.price}M<sup>2</sup></Text>
                <img src="./brush.svg" alt="icon" />
                <Text>Евроремонт</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePageRow;
