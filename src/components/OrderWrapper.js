import React from 'react';
import { useNavigate } from 'react-router-dom';
import Order from './Order';

const OrderWrapper = (props) => {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/profile');
  };

  return <Order {...props} goToCheckout={goToCheckout} />;
};

export default OrderWrapper;