import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import OrdersPage from './pages/OrdersPage';
import CheckoutPage from './pages/CheckoutPage';

import Sports from './pages/Sports';
import Yoga from './pages/Yoga';
import Massage from './pages/Massage';
import All from './pages/All';
import Nutrition from './pages/Nutrition';
import Running from './pages/Running';
import Bicycle from './pages/Bicycle';

const parsePrice = (priceStr) => {
  if (typeof priceStr === 'string') {
    return priceStr.replace(/\s|₽/g, '');
  }
  return 0;
};

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Гантель гексагональная обрезиненная KETTLER, 4 кг',
          img: 'gantel.jpg',
          desc: 'Отличный выбор для силовых и функциональных тренировок в зале и дома',
          category: 'Гантели',
          price: parsePrice('2 199')
        },
        {
          id: 2,
          title: 'Кроссовки PUMA Skyrocket Lite Engineered',
          img: 'puma.jpg',
          desc: 'Раскрой свой потенциал! Кроссовки от PUMA Skyrocket Lite Alt Engineered разработаны для беговых тренировок.',
          category: 'Кроссовки',
          price: parsePrice('8 499')
        },
        {
          id: 3,
          title: 'Мяч гимнастический с насосом KETTLER, 75 см',
          img: 'ball.jpg',
          desc: 'Гимнастический мяч Kettler предназначен для упражнений, выполняемых сидя, упражнений для пресса и спины, а также для игр.',
          category: 'Фитболы',
          price: parsePrice('1 799')
        },
      ],
      showFullItem: false,
      fullItem: {},
      selectedSize: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.setSelectedSize = this.setSelectedSize.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  clearCart() {
    this.setState({ orders: [] });
  }

  setSelectedSize(productId, size) {
    this.setState(prevState => ({
      selectedSize: {
        ...prevState.selectedSize,
        [productId]: size
      }
    }));
  }

  onChangeQuantity(id, quantity) {
    this.setState({
      orders: this.state.orders.map(order =>
        order.id === id ? { ...order, quantity } : order
      ),
    });
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} onChangeQuantity={this.onChangeQuantity} />
          <Routes>
            <Route path="/" element={
              <>
                <main>
                  <h1>Популярные товары:</h1>
                </main>
                <Items
                  onShowItem={this.onShowItem}
                  items={this.state.items}
                  onAdd={this.addToOrder}
                  onChangeQuantity={this.onChangeQuantity}
                />
                {this.state.showFullItem && (
                   <ShowFullItem
                   item={this.state.fullItem}
                   onAdd={this.addToOrder}
                   onShowItem={this.onShowItem}
                   setSelectedSize={this.setSelectedSize}
                   selectedSize={this.state.selectedSize}
                  />
                )}
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={
              <CheckoutPage
                orders={this.state.orders}
                onDelete={this.deleteOrder}
                onChangeQuantity={this.onChangeQuantity}
                clearCart={this.clearCart}
              />
            } />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/sports" element={<Sports onAdd={this.addToOrder} />} />
            <Route path="/yoga" element={<Yoga onAdd={this.addToOrder} />} />
            <Route path="/all" element={<All onAdd={this.addToOrder} />} />
            <Route path="/massage" element={<Massage onAdd={this.addToOrder} />} />
            <Route path="/nutrition" element={<Nutrition onAdd={this.addToOrder} />} />
            <Route path="/running" element={
            <Running 
              onAdd={this.addToOrder} 
              setSelectedSize={(id, size) => {
                this.setState(prev => ({
                  selectedSize: { ...prev.selectedSize, [id]: size }
                }));
              }}
              selectedSize={this.state.selectedSize}
            />
          } />
            <Route path="/bicycle" element={<Bicycle onAdd={this.addToOrder} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item});
    this.setState({showFullItem: !this.state.showFullItem});
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)});
  }

  addToOrder(item) {
    const { selectedSize } = this.state;
    const size = selectedSize[item.id];
  
    const existing = this.state.orders.find(
      el => el.id === item.id && el.size === size
    );
  
    if (!existing) {
      this.setState({
        orders: [
          ...this.state.orders,
          {
            ...item,
            price: parsePrice(item.price),
            quantity: 1,
            size: size,
          },
        ],
        showFullItem: false,
        selectedSize: {
          ...this.state.selectedSize,
          [item.id]: null,
        },
      });
    }
  }
}

export default App;