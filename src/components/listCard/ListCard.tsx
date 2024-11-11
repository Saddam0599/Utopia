import React from "react";
import { PiEye } from "react-icons/pi";
import { Card, Image } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import Area from "../../assets/icons/Area.svg";
import Condition from "../../assets/icons/Condition.svg";
import Chair from "../../assets/icons/Chair.svg";



interface ListingProps {
  listing?: {
    id: string;
    title: string;
    image?: string; 
    description: string;  
    price: number;
  };
}

const ListingCard: React.FC<ListingProps> = ({ listing }) => {
  if (!listing) {
    return <div style={{width: "10px", height: "1", border: "none", color: "red", display: "none"}}>No listing data available</div>;
  }

  return (
    <Card className="listing-card">
      <div style={{ display: "flex", width: "200px",
              height: "100%",position: "relative",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px", margin: "0" }}>
        <div style={{
          width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              backgroundColor: "1pz"
        }}>
          <Image
            src={listing.image || "default-image.png"} 
            alt={listing.title}
            className="listing-card__image"
            style={{
              width: "200px",
              height: "198px",
              objectFit: "cover",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          />
        </div>
        <div style={{ marginLeft: 40, padding: "16px"}}>
          <h3 className="listing-card__title" style={{ fontSize: "18px", fontWeight: "bold" }}>
            {listing.title}
          </h3>
          
         <div style={{display: "flex", marginBottom: "20px", width: "300px", marginTop: "70px"}}>
          <img
            src={Chair}
            alt="Chair.svg"
            style={{
              width: 24,
              height: 16.36,
              fontSize: "24px",
              color: "rgba(153, 153, 153, 1)",
              marginLeft: "10px"
            }}
          />
              <h4
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "17.58px",
                color: "rgba(153, 153, 153, 1)",
                marginLeft: "7px",
              }}
            >
              28
            </h4>
            <img
              src={Area}
              alt="Area.svg"
              style={{
                marginLeft: "10px",
                width: "20px",
                height: "20px",
                color: "rgba(153, 153, 153, 1)",
              }}
            />
            <h4
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "17.58px",
                color: "rgba(153, 153, 153, 1)",
                marginLeft: "7px",
              }}
            >100 м²</h4>
            <img
              src={Condition}
              alt="Condition.svg"
              style={{
                width: "15.11px",
                height: "16px",
                color: "rgba(153, 153, 153, 1)",
                marginLeft: "10px",
              }} 
            />
                      <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "17.58px",
                color: "rgba(153, 153, 153, 1)",
                marginLeft: "7px",
              }}
            >
              Евроремонт
            </p>
            </div>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "rgba(153, 153, 153, 1)",
              marginLeft: "7px",
              marginTop: "-10px",
      
            }}
          >
            {listing.description}
          </p>
        </div>

        <div style={{ marginRight: "4px", marginLeft: "13vh", marginTop: "5px"}}>
          <HeartOutlined
            className="listing-card__icon"
            style={{
              color: "rgba(153, 153, 153, 1)",
              fontSize: "20px",
              marginTop: "20px",
            }}
          />
          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "24px",
              fontWeight: "300",
              color: "rgba(106, 155, 12, 1)",
              marginTop: "52px",
              marginBottom: "17px",
              textAlign: "right",
            }}
          >
            ${listing.price}
          </h3>
          <div
            style={{
              width: "41vh",
              height: "14px",
              display: "flex",
              alignItems: "relative",
              marginLeft: "120px",
              marginBottom: "170px",
            }}
          >

            <PiEye
              style={{
                width: "24px",
                height: "24px",
                color: "rgba(153, 153, 153, 1)",
                marginLeft: "55px",
                marginTop: "-5px"
              }}
            />
            <h4
              style={{
                color: "rgba(153, 153, 153, 1)",
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "14.06px",
                marginLeft: "6px",
                marginRight: "43px",
                textAlign: "right"
              }}
            >
              12983
            </h4>
            <p
              style={{
                width: "400px",
                height: "33px",
                color: "rgba(153, 153, 153, 1)",
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "14.06px",
              }}
            >
              Опубликовано {listing.createdAt}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "10px",
            height: "100%",
            position: "absolute",
            left: "132.3vh",
            zIndex: 10,
            borderRadius: "0px 10px 10px 0px",
            backgroundColor: "rgba(252, 163, 17, 1)",
          }}
        ></div>
      </div>
    </Card>
  );
};

export default ListingCard;
















