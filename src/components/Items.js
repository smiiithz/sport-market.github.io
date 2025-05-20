import React, { Component } from 'react'
import Item from './Item'

export class items extends Component {
  handleAdd = (item) => {
    this.props.onAdd(item);
  };
  render() {
    return (
      <main>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.handleAdd} onChangeQuantity={this.props.onChangeQuantity} />
        ))}
      </main>
    )
  }
}

export default items