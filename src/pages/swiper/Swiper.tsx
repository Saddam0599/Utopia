import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Carousel, Row, Col } from "antd";
import { Image } from "antd";

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

const Swiper = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://66ceca18901aab24841f8da1.mockapi.io/api/ecomerce"
      );
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        <Row gutter={[16, 16]}>
          {products?.map((product: Product) => (
            <Col span={6} key={product.id}>
              <Card
                hoverable
                cover={<Image alt={product.title} src={product.photo} />}
                bordered={false}
              >
                <Link to={`/product/${product.id}`}>
                  <Card.Meta title={product.title} />
                </Link>
                <div className="flex justify-between">
                  <p className="font-light text-2xl text-third">${product.number}</p>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex items-center gap-2">
                    <img src="./sofa_img.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">10</p>
                    <img src="./Area_icon.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">
                      {product.price}M<sup>2</sup>
                    </p>
                    <img src="./brush.svg" alt="img" />
                    <p className="text-base text-[#999] font-normal">Евроремонт</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-5 mb-[26px]">
                  <p className="text-primary text-xs font-normal">г.Ташкент</p>
                  <p className="text-base text-[#999] font-normal">
                    {product.createdAt}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel>
    </div>
  );
};

export default Swiper;
