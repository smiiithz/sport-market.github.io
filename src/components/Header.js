import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";

import Order from './OrderWrapper';
import Categories from './Categories';

const showOrders = (props, goToCheckout) => {
  let summa = 0;

  props.orders.forEach(el => {
    summa += Number.parseFloat(el.price) * el.quantity;
  });

  return (
    <div>
      {props.orders.map(el => (
        <Order
          onDelete={props.onDelete}
          key={el.id}
          item={el}
          onChangeQuantity={props.onChangeQuantity}
        />
      ))}
      <p className='summa'>
        Общая сумма товаров: {Intl.NumberFormat().format(summa)}₽
      </p>

      <button onClick={goToCheckout} className="checkout-button">
        Перейти к оформлению
      </button>
    </div>
  );
}

const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Вы еще не выбрали ни одного товара.</h2>
      </div>
    );
}

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const goToCheckout = () => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        navigate('/checkout'); 
      } else {
        navigate('/profile'); 
      }
    };

    return (
      <header>
        <div>
            <img src="/img/logo.png" alt="Logo" className="logo-img" />
            <span className='logo'><Link to="/">SportMarket</Link></span>
            <ul className='nav'>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
                <li><Link to="/profile">Личный кабинет</Link></li>
            </ul>
            <Categories />
            <IoCartOutline onClick={() => setCartOpen(prevState => !prevState)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
                <div className='shop-cart'>
                    {props.orders.length > 0 ? showOrders(props, goToCheckout) : showNothing()}
                </div>
            )}
        </div>
        {location.pathname === '/' && <div className="presentation"></div>}
      </header>
    );
}