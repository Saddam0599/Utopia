import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GridCard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
 
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>GridCard </h2>
      <button onClick={handleLogin}>GridCard</button>
    </div>
  );
};

export default GridCard;

