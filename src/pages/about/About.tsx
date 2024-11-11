import React from 'react';
import { useNavigate } from 'react-router-dom';


const AboutPage: React.FC = () => {
   const navigate = useNavigate();
  return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '10px', textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>My Application</h1>
      <div>
        <button onClick={() => navigate('/favorites')}>❤️</button> 
        <button onClick={() => navigate('/cart')}>🛒</button> 
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};
    <div>
      <h1>About</h1>
    </div>

export default AboutPage;
