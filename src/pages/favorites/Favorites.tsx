import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { Card, Button, Typography, Image, Divider, Row, Col, Space, Empty } from "antd";

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
};

const Favorite                                                                                                                               : FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favoritesFromStorage);
    fetchFavoriteProducts(favoritesFromStorage);
  }, []);

  const fetchFavoriteProducts = async (favoriteIds: number[]) => {
    try {
      const { data: products } = await axios.get<Product[]>("https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce");
      const filteredProducts = products.filter((product) => favoriteIds.includes(product.id));
      setFavoriteProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching favorite products:", error);
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      fetchFavoriteProducts(updatedFavorites);

      return updatedFavorites;
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      {favoriteProducts.length > 0 ? (
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {favoriteProducts.map((product) => (
            <Card
              key={product.id}
              style={{
                maxWidth: "1300px",
                margin: "auto",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              bodyStyle={{ padding: "20px" }}
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Link to={`/product/${product.id}`}>
                    <Image
                      src={product.photo}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px 0 0 10px",
                      }}
                    />
                  </Link>
                </Col>
                <Col span={16}>
                  <Row justify="space-between" align="middle" style={{ marginBottom: "16px" }}>
                    <Title level={4}>{product.title}</Title>
                    <Button
                      type="text"
                      icon={
                        favorites.includes(product.id) ? (
                          <HiHeart style={{ color: "red" }} />
                        ) : (
                          <HiOutlineHeart />
                        )
                      }
                      onClick={() => toggleFavorite(product.id)}
                    />
                  </Row>

                  <Divider />

                  <Row justify="space-between" align="middle">
                    <Space size="middle">
                      <Image src="./sofa_img.svg" alt="sofa" width={24} />
                      <Text>10</Text>
                      <Image src="./Area_icon.svg" alt="area" width={24} />
                      <Text>
                        60M<sup>2</sup>
                      </Text>
                      <Image src="./brush.svg" alt="brush" width={24} />
                      <Text>Евроремонт</Text>
                    </Space>
                    <Text strong style={{ fontSize: "18px", color: "#ff4d4f" }}>
                      ${product.price}
                    </Text>
                  </Row>

                  <Row justify="space-between" align="middle" style={{ marginTop: "16px" }}>
                    <Text type="secondary" style={{ fontSize: "12px" }}>
                      г.Ташкент, Юнусабадский р-н, ул.Янгишахар
                    </Text>
                    <Space size="large">
                      <Space>
                        <Image src="eye_icon.svg" alt="eye" width={20} />
                        <Text>12983</Text>
                      </Space>
                      <Text>Опубликовано 22:38 25-Окт 2021</Text>
                    </Space>
                  </Row>
                </Col>
              </Row>
            </Card>
          ))}
        </Space>
      ) : (
        <Empty description="This Page is Empty!" />
      )}
    </div>
  );
};

export default FavoritePage;
