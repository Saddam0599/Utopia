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






