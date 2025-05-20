import React, { Component } from 'react'

export class Item extends Component {
  handleAdd = () => {
    const { item, onAdd } = this.props;
    onAdd(item);
  };
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} alt=''/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}₽</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item