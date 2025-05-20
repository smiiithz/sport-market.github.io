import React, { Component } from 'react';

export class ShowFullItem extends Component {
  sizes = [36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5, 40, 41, 42, 42.5, 43, 44, 45, 46];

  handleSizeSelect = (size) => {
    const { setSelectedSize, item } = this.props;
    setSelectedSize(item.id, size); 
  };

  render() {
    const { item, onAdd, selectedSize, onShowItem } = this.props;

    return (
      <div className="full-item">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/img/${item.img}`}
            onClick={() => onShowItem(item)}
            alt={item.title}
          />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <b>{item.price}₽</b>

          {item.category === 'Кроссовки' && (
            <div className="size-selector">
              <p>Выберите размер:</p>
              <div className="size-options">
                {this.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => this.handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div
            className="add-to-cart"
            onClick={() => {
              if (item.category === 'Кроссовки' && !selectedSize) {
                alert('Пожалуйста, выберите размер перед добавлением в корзину.');
                return;
              }
              onAdd(item, selectedSize);
            }}
          >
            +
          </div>
          <button className="close-full-item" onClick={() => onShowItem(item)}>
            ✕
          </button>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;