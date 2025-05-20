import React, { useState } from 'react';

  const PRODUCTS = [
    {
      imageSrc: "/img/m1.jpg",
      altText: "KETTLER",
      originalPrice: "1 599 ₽",
      price: "999 ₽",
      description: "Массажный роллер KETTLER",
      rating: "★★★★★",
      reviews: "(10)",
      discount: "-38 %"
    },
    {
      imageSrc: "/img/m2.jpg",
      altText: "KETTLER",
      price: "2 999 ₽",
      description: "Ролик массажный KETTLER, 61 см",
      rating: "★★★★★",
      reviews: "(37)",
    },
    {
      imageSrc: "/img/m3.jpg",
      altText: "KETTLER",
      price: "899 ₽",
      description: "Набор массажных мячей KETTLER, 2 шт",
      rating: "★★★★★",
      reviews: "(6)",
    },
    {
      imageSrc: "/img/m4.jpg",
      altText: "KETTLER",
      price: "999 ₽",
      description: "Массажер с охлаждающим эффектом KETTLER",
      rating: "★★★★★",
      reviews: "(11)",
    },
    {
      imageSrc: "/img/m5.jpg",
      altText: "Sensana",
      price: "1 199 ₽",
      description: "Массажный ролик мягкий Sensana, 30 см",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
    },
    {
      imageSrc: "/img/m6.jpg",
      altText: "KETTLER",
      price: "599 ₽",
      description: "Массажный мяч KETTLER",
      rating: "★★★★★",
      reviews: "(37)",
    },
    {
      imageSrc: "/img/m7.jpg",
      altText: "Athlex",
      price: "5 999 ₽",
      description: "Массажный валик с функцией вибрации Athlex",
      rating: "★★★★★",
      reviews: "(4)",
    },
    {
      imageSrc: "/img/m8.jpg",
      altText: "KETTLER",
      price: "1 599 ₽",
      description: "Мяч массажный с насосом KETTLER, 65 см",
      rating: "★★★★★",
      reviews: "(48)",
    },
    {
      imageSrc: "/img/m9.jpg",
      altText: "Demix",
      price: "699 ₽",
      description: "Двойной массажный мяч Demix",
      rating: "★★★★★",
      reviews: "(36)",
    },
    {
      imageSrc: "/img/m10.jpg",
      altText: "Demix",
      price: "399 ₽",
      description: "Ручной массажер с одной ручкой Demix",
      rating: "★★★★★",
      reviews: "(96)",
    },
    {
      imageSrc: "/img/m11.jpg",
      altText: "Demix",
      price: "399 ₽",
      description: "Массажер Demix",
      rating: "★★★★★",
      reviews: "(96)",
    },
    {
      imageSrc: "/img/m12.jpg",
      altText: "Demix",
      price: "599 ₽",
      description: "Мяч массажный Demix",
      rating: "★★★★★",
      reviews: "(30)",
    },
    {
      imageSrc: "/img/m13.jpg",
      altText: "Demix",
      price: "499 ₽",
      description: "Массажер Demix",
      rating: "★★★★★",
      reviews: "(27)",
    },
    {
        imageSrc: "/img/m14.jpg",
        altText: "Qualigo",
        originalPrice: "6 000 ₽",
        price: "2 500 ₽",
        description: "Перкуссионный спортивный массажер для тела Qualigo 32 скорости",
        rating: "★★★★☆",
        reviews: "(5)",
        discount: "-58 %"
    },
    {
      imageSrc: "/img/m15.jpg",
      altText: "Athlex",
      price: "6 999 ₽",
      description: "Ручной массажер Athlex",
      rating: "★★★★★",
      reviews: "(5)",
    },
    {
        imageSrc: "/img/m16.jpg",
        altText: "CS Medica",
        originalPrice: "7 168 ₽",
        price: "3 405 ₽",
        description: "Массажер перкуссионный для ног, шеи, спины CS MedicaMassage Gun CS-v10",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-52 %"
    },
    {
        imageSrc: "/img/m17.jpg",
        altText: "Bradex",
        originalPrice: "1 790 ₽",
        price: "1 205 ₽",
        description: "Подушка дорожная акупунктурная Нирвана, чёрная, золотые шипы",
        rating: "★★★★★",
        reviews: "(6)",
        discount: "-30 %"
    },
    {
        imageSrc: "/img/m18.jpg",
        altText: "Torneo",
        originalPrice: "499 ₽",
        price: "249 ₽",
        description: "Массажер электрический Torneo",
        rating: "★★★★☆",
        reviews: "(81)",
        discount: "-50 %"
    },
    {
        imageSrc: "/img/m19.jpg",
        altText: "Demix",
        originalPrice: "999 ₽",
        price: "699 ₽",
        description: "Ручной массажер с двумя ручками Demix",
        rating: "★★★★★",
        reviews: "(14)",
        discount: "-30 %"
    },
    {
        imageSrc: "/img/m20.jpg",
        altText: "ZENET",
        originalPrice: "14 000 ₽",
        price: "13 850 ₽",
        description: "Массажер для ног ZENET",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-1 %"
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
    imageSrc,
    altText,
    price,
    originalPrice,
    description,
    rating,
    reviews,
    bonus,
    discount,
    exclusive,
    weeklyOffer,
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
      <div className="page-title-sports">Массажеры</div>
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