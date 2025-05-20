import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTrashBinOutline } from "react-icons/io5";
import { TfiPlus, TfiMinus } from "react-icons/tfi";

const CheckoutPage = ({ orders, onDelete, onChangeQuantity, clearCart }) => {
  const navigate = useNavigate();

  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryCost, setDeliveryCost] = useState(500);
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [house, setHouse] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [apartment, setApartment] = useState('');
  const [pickupStore, setPickupStore] = useState('');

  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const getTotal = () => {
    const itemsTotal = orders.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return itemsTotal + deliveryCost;
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, '')
      .slice(0, 16)
      .match(/.{1,4}/g)
      ?.join(' ') || '';
  };

  const handleCardExpiryChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 4) input = input.slice(0, 4);

    if (input.length >= 1) {
      let month = input.slice(0, 2);
      if (parseInt(month) > 12) {
        month = '12';
      } else if (month.length === 1 && parseInt(month) > 1) {
        month = '0' + month;
      } else if (month.length === 2 && month[0] === '0' && month[1] === '0') {
        month = '01';
      }
      input = month + input.slice(2);
    }

    if (input.length >= 3) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    }

    setCardExpiry(input);
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    setCardNumber(formatCardNumber(input));
  };

  const handleCardNameChange = (e) => {
    const input = e.target.value;
    const onlyLetters = input.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
    setCardName(onlyLetters);
  };

  const handleCardCVVChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardCVV(value.slice(0, 3));
  };

  const validateForm = () => {
    if (deliveryMethod === 'courier') {
      if (!city || !street || !house || !entrance || !floor || !apartment) return false;
    } else if (deliveryMethod === 'pickup') {
      if (!pickupStore) return false;
    }

    if (paymentMethod === 'card') {
      if (!cardName || !cardNumber || !cardExpiry || !cardCVV) return false;
    }

    return true;
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: orders,
      total: getTotal(),
      date: new Date().toLocaleString(),
      deliveryMethod,
      paymentMethod,
      address:
        deliveryMethod === 'courier'
          ? { city, street, house, entrance, floor, apartment }
          : pickupStore
    };

    const existingOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    localStorage.setItem('userOrders', JSON.stringify([...existingOrders, newOrder]));

    alert('Заказ успешно оформлен!');
    clearCart();
    navigate('/orders');
  };

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
    setDeliveryCost(method === 'courier' ? 500 : 0);
  };

  const handlePickupStoreChange = (e) => {
    setPickupStore(e.target.value);
  };

  const handleChangeQuantity = (itemId, quantity) => {
    if (quantity >= 1 && quantity <= 10) {
      onChangeQuantity(itemId, quantity);
    } else {
      alert('Ошибка. Невозможно добавить более 10 штук этого товара.');
    }
  };

  const handleDeleteItem = (itemId) => {
    onDelete(itemId);
  };

  return (
    <div className="wrapper-auth-checkout">
      <div className="form-box-checkout">
        <div className="form-checkout">
          <span className="title-checkout">Оформление заказа</span>

          {orders.length === 0 ? (
            <p>Ваша корзина пуста.</p>
          ) : (
            <>
              <div className="checkout-items">
                {orders.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <img src={`/img/${item.img}`} alt={item.title} style={{ width: '60px' }} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>Размер: {item.size || 'не выбран'}</p>
                      <p>Цена: {item.price}₽</p>
                      <div className="quantity-orders">
                        <button onClick={() => handleChangeQuantity(item.id, item.quantity - 1)}><TfiMinus /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}><TfiPlus /></button>
                      </div>
                      <button className="delete-icon-orders" onClick={() => handleDeleteItem(item.id)}><IoTrashBinOutline /></button>
                    </div>
                  </div>
                ))}
                <p className="summa-checkout">Итоговая сумма: {Intl.NumberFormat().format(getTotal())}₽</p>
              </div>

              <div className="checkout-section">
                <h3>Способ доставки</h3>
                <label>
                  <input type="radio" value="courier" checked={deliveryMethod === 'courier'} onChange={() => handleDeliveryMethodChange('courier')} />
                  Курьером до двери
                </label>
                <label>
                  <input type="radio" value="pickup" checked={deliveryMethod === 'pickup'} onChange={() => handleDeliveryMethodChange('pickup')} />
                  Самовывоз из магазина
                </label>

                {deliveryMethod === 'courier' && (
                  <div className="delivery-address">
                    <p>Адрес доставки:</p>
                    <label>Город:<input type="text" value={city} onChange={(e) => setCity(e.target.value)} /></label>
                    <label>Улица:<input type="text" value={street} onChange={(e) => setStreet(e.target.value)} /></label>
                    <label>Дом:<input type="text" value={house} onChange={(e) => setHouse(e.target.value)} /></label>
                    <label>Подъезд:<input type="text" value={entrance} onChange={(e) => setEntrance(e.target.value)} /></label>
                    <label>Этаж:<input type="text" value={floor} onChange={(e) => setFloor(e.target.value)} /></label>
                    <label>Квартира:<input type="text" value={apartment} onChange={(e) => setApartment(e.target.value)} /></label>
                  </div>
                )}

                {deliveryMethod === 'pickup' && (
                  <div className="pickup-store">
                    <p>Выберите магазин для самовывоза:</p>
                    <select value={pickupStore} onChange={handlePickupStoreChange}>
                      <option value="ТЦ 'Парк'">ТЦ Парк, улица Ленина, 10</option>
                      <option value="ТЦ 'Гранд'">ТЦ Гранд, улица Советская, 25</option>
                      <option value="ТЦ 'Мега'">ТЦ Мега, улица Пролетарская, 50</option>
                    </select>
                  </div>
                )}
                {deliveryMethod === 'courier' && (
                  <p className="delivery-cost">Стоимость доставки: 500₽</p>
                )}
              </div>

              <div className="checkout-section">
                <h3>Способ оплаты</h3>
                <label>
                  <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                  Картой онлайн
                </label>
                <label>
                  <input type="radio" value="card-p" checked={paymentMethod === 'card-p'} onChange={(e) => setPaymentMethod(e.target.value)} />
                  Картой при получении
                </label>
                <label>
                  <input type="radio" value="cash" checked={paymentMethod === 'cash'} onChange={(e) => setPaymentMethod(e.target.value)} />
                  Наличными при получении
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details">
                  <label>
                    Имя держателя:
                    <input type="text" placeholder="IVAN IVANOV" value={cardName} onChange={handleCardNameChange} />
                  </label>
                  <label>
                    Номер карты:
                    <input type="text" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={handleCardNumberChange} />
                  </label>
                  <div className="card-row">
                    <input type="text" placeholder="01/23" value={cardExpiry} onChange={handleCardExpiryChange} />
                    <input type="password" placeholder="CVV" value={cardCVV} onChange={handleCardCVVChange} />
                  </div>
                </div>
              )}

              <button className="confirm-btn" onClick={handleConfirmOrder}>
                Оформить заказ
              </button>
            </>
          )}

          <button className="back-btn-checkout" onClick={() => navigate('/')}>Вернуться в магазин</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;