import React, { useState } from 'react';

  const PRODUCTS = [
    {
      imageSrc: "/img/b1.jpg",
      altText: "Stern",
      originalPrice: "32 999 ₽",
      price: "26 399 ₽",
      description: "Велосипед горный Stern Energy 29'",
      rating: "★★★★★",
      reviews: "(9)",
      discount: "-20 %"
    },
    {
      imageSrc: "/img/b2.jpg",
      altText: "Stern",
      price: "99 999 ₽",
      description: "Велосипед горный Stern Motion X 29'",
      rating: "★★★★★",
      reviews: "(1)",
    },
    {
        imageSrc: "/img/b3.jpg",
        altText: "Stern",
        price: "45 999 ₽",
        description: "Велосипед горный Stern Motion 3.0 27.5'",
        rating: "★★★★★",
        reviews: "(3)",
    },
    {
        imageSrc: "/img/b4.jpg",
        altText: "Stern",
        price: "31 999 ₽",
        description: "Велосипед горный Stern Energy 2.0 27.5'",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
    },
    {
        imageSrc: "/img/b5.jpg",
        altText: "Stern",
        price: "29 999 ₽",
        description: "Велосипед горный Stern Energy 1.0 26'",
        rating: "★★★★★",
        reviews: "(1)",
    },
    {
        imageSrc: "/img/b6.jpg",
        altText: "Stern",
        price: "31 999 ₽",
        description: "Велосипед горный Stern Energy 2.0 27.5'",
        rating: "★★★★★",
        reviews: "(4)",
    },
    {
        imageSrc: "/img/b7.jpg",
        altText: "Stern",
        price: "29 999 ₽",
        description: "Велосипед горный Stern Energy 1.0 Sport 26'",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
    },
    {
        imageSrc: "/img/b8.jpg",
        altText: "Stern",
        price: "46 999 ₽",
        description: "Велосипед горный Stern Motion 2.0 29'",
        rating: "★★★★★",
        reviews: "(3)",
    },
    {
        imageSrc: "/img/b9.jpg",
        altText: "Stern",
        price: "29 999 ₽",
        description: "Велосипед горный Stern Energy 1.0 26'",
        rating: "★★★★☆",
        reviews: "(1)",
    },
    {
        imageSrc: "/img/b10.jpg",
        altText: "Stern",
        price: "29 999 ₽",
        description: "Велосипед горный Stern Energy 1.0 26'",
        rating: "★★★☆☆",
        reviews: "(3)",
    },
    {
        imageSrc: "/img/b11.jpg",
        altText: "Stern",
        price: "31 999 ₽",
        description: "Велосипед горный женский Stern Angel 2.0 27.5' 2024",
        rating: "★★★★☆",
        reviews: "(52)",
    },
    {
        imageSrc: "/img/b12.jpg",
        altText: "Stern",
        originalPrice: "29 999 ₽",
        price: "23 999 ₽",
        description: "Велосипед горный женский Stern Angel 1.0 26'",
        rating: "★★★★★",
        reviews: "(2)",
        discount: "-20 %"
    },
  ]

const ITEMS_PER_PAGE = 12;

const parsePrice = (priceStr) => {
  if (typeof priceStr === 'string') {
    return priceStr.replace(/\s|₽/g, '');
  }
  return 0;
};

const parseReviews = (reviewsStr) => {
  const match = reviewsStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const ProductCard = ({ product, onAdd }) => {
  const {
    imageSrc, altText, price, originalPrice,
    description, rating, reviews, bonus, discount, exclusive, weeklyOffer
  } = product;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: imageSrc,
      img: imageSrc.split("/").pop(),
      price: parsePrice(price),
      title: description,
    };
    onAdd(itemToAdd);
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={altText} className="product-image" />
      <div className="badge-container">
        {discount && <span className="badge discount">{discount}</span>}
        {weeklyOffer && <span className="text-muted weekly-offer">{weeklyOffer}</span>}
        {bonus && <span className="badge bonus">{bonus}</span>}
        {exclusive && <span className="badge exclusive">{exclusive}</span>}
      </div>
      <div className="product-info">
        {originalPrice && <span className="original-price">{originalPrice}</span>}
        <h3 className="price">{price}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="rating-container">
        <span className="rating">{rating}</span>
        <span className="text-muted reviews">{reviews}</span>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        +
      </button>
    </div>
  );
};

const SORT_OPTIONS = {
  PRICE_ASC: "PRICE_ASC",
  PRICE_DESC: "PRICE_DESC",
  REVIEWS_DESC: "REVIEWS_DESC",
};

const ProductGrid = ({ onAdd }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);

  const sortProducts = (products, option) => {
    const sorted = [...products];
    switch (option) {
      case SORT_OPTIONS.PRICE_ASC:
        return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case SORT_OPTIONS.PRICE_DESC:
        return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case SORT_OPTIONS.REVIEWS_DESC:
        return sorted.sort((a, b) => parseReviews(b.reviews) - parseReviews(a.reviews));
      default:
        return sorted;
    }
  };

  const sortedProducts = sortProducts(PRODUCTS, sortOption);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="wrapper-items-sport">
      <div className="page-title-sports">Велосипеды для взрослых</div>
      <div style={{ display: 'grid', gap: '25px' }}>
        <div style={{ minWidth: '200px' }}>
          <h4>Сортировать:</h4>
          <div className='sort-buttons'>
              <button onClick={() => setSortOption(SORT_OPTIONS.PRICE_ASC)}>По цене ↑</button><br />
              <button onClick={() => setSortOption(SORT_OPTIONS.PRICE_DESC)}>По цене ↓</button><br />
              <button onClick={() => setSortOption(SORT_OPTIONS.REVIEWS_DESC)}>По популярности</button><br />
              <button onClick={() => setSortOption(null)}>По умолчанию</button>
            </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <div className="product-grid">
            {currentProducts.map((product, index) => (
              <ProductCard key={index} product={product} onAdd={onAdd} />
            ))}
          </div>

          <div className="pagination">
            {currentPage > 1 && <button onClick={handlePrev}>←</button>}
            <span>Страница {currentPage} из {totalPages}</span>
            {currentPage < totalPages && <button onClick={handleNext}>→</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;