import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="wrapper-orders">
      <div className="form-box-orders">
      <span className="title-orders">Мои заказы</span>
        <div className="form-orders">

          {orders.length === 0 ? (
            <p>У вас пока не было заказов.</p>
          ) : (
            <div className="orders-list">
              {orders.map((order, index) => (
                <div key={order.id} className="order-card">
                  <h3>Заказ №{order.id}</h3>
                  <p><strong>Дата:</strong> {order.date}</p>
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        <img src={`/img/${item.img}`} alt={item.title} />
                        {item.title} — {item.quantity} шт.
                      </li>
                    ))}
                  </ul>
                  <p><strong>Итоговая сумма:</strong> {Intl.NumberFormat().format(order.total)}₽</p>
                </div>
              ))}
            </div>
          )}

          <button className="btn-back-orders" onClick={() => navigate('/')}>Вернуться в магазин</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;