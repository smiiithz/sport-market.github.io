import React, { Component } from 'react';
import { IoTrashBinOutline } from "react-icons/io5";
import { TfiPlus, TfiMinus } from "react-icons/tfi";

export class Order extends Component {
  handleIncrease = () => {
    const { item, onChangeQuantity } = this.props;
    if (item.quantity < 10) {
      onChangeQuantity(item.id, item.quantity + 1);
    } else {
      alert('Ошибка. Невозможно добавить более 10 штук этого товара.');
    }
  };

  handleDecrease = () => {
    const { item, onChangeQuantity } = this.props;
    if (item.quantity > 1) {
      onChangeQuantity(item.id, item.quantity - 1);
    }
  };

  handleDelete = () => {
    const { item, onDelete } = this.props;
    onDelete(item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <img src={`./img/${item.img}`} alt="" />
        <h2>{item.title}</h2>
        <b>{item.price}₽</b>

        {item.size && <p className="order-size">Размер: {item.size}</p>}

        <div className="quantity">
          <button onClick={this.handleDecrease}><TfiMinus /></button>
          <span>{item.quantity}</span>
          <button onClick={this.handleIncrease}><TfiPlus /></button>
        </div>

        <button className="delete-icon" onClick={this.handleDelete}>
          <IoTrashBinOutline />
        </button>
      </div>
    );
  }
}

export default Order;