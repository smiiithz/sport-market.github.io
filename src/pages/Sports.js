import React, { useState } from 'react';

  const PRODUCTS = [
    {
      imageSrc: "/img/1.jpg",
      altText: "Torneo",
      price: "5 599 ₽",
      description: "Набор гантелей с пластиковыми дисками 20 кг Torneo",
      rating: "★★★★★",
      reviews: "(48)"
    },
    {
      imageSrc: "/img/2.jpg",
      altText: "Гантель",
      originalPrice: "4 599 ₽",
      price: "3 699 ₽",
      description: "Гантель наборная Torneo, 10 кг",
      rating: "★★★★★",
      reviews: "(65)",
      discount: "-20 %"
    },
    {
      imageSrc: "/img/3.jpg",
      altText: "KETTLER",
      price: "1 199 ₽",
      description: "Гантель гексагональная обрезиненная KETTLER, 2 кг",
      rating: "★★★★★",
      reviews: "(30)"
    },
    {
      imageSrc: "/img/4.jpg",
      altText: "Набор гантелей",
      price: "8 999 ₽",
      description: "Гантель гексагональная обрезиненная KETTLER, 20 кг",
      rating: "★★★★☆",
      reviews: "(5)"
    },
    {
      imageSrc: "/img/5.jpg",
      altText: "Proiron",
      originalPrice: "2 819 ₽",
      price: "2 437 ₽",
      description: "Гантели PROIRON неопреновые набор 2 шт, 3+3 кг",
      rating: "★★★★★",
      reviews: "(10)",
      discount: "-14 %"
    },
    {
      imageSrc: "/img/6.jpg",
      altText: "Proiron обрезиненные",
      originalPrice: "8 984 ₽",
      price: "7 833 ₽",
      description: "Гантели PROIRON обрезиненные набор 2 шт, 10+10 кг",
      rating: "★★★★★",
      reviews: "(25)",
      discount: "-13 %"
    },
    {
      imageSrc: "/img/7.jpg",
      altText: "KETTLER",
      price: "12 999 ₽",
      description: "Мультинабор обрезиненный: гантели+гиря KETTLER, 24 кг",
      rating: "★★★★★",
      reviews: "(2)"
    },
    {
      imageSrc: "/img/8.jpg",
      altText: "Proiron 2",
      originalPrice: "9 120 ₽",
      price: "7 871 ₽",
      description: "Гантели разборные PROIRON с грифом из чугуна набор 2 шт, 10+10 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-14 %"
    },
    {
      imageSrc: "/img/9.jpg",
      altText: "Турник",
      price: "3 599 ₽",
      description: "Турник настенный Torneo A-990WG",
      rating: "★★★★★",
      reviews: "(113)"
    },
    {
      imageSrc: "/img/10.jpg",
      altText: "Demix",
      price: "1 999 ₽",
      description: "Утяжелители Demix, 2 х 2 кг",
      rating: "★★★★☆",
      reviews: "(22)"
    },
    {
      imageSrc: "/img/11.jpg",
      altText: "Demix эсп",
      price: "399 ₽",
      description: "Эспандер кистевой Demix, 20 кг",
      rating: "★★★★★",
      reviews: "(234)"
    },
    {
      imageSrc: "/img/12.jpg",
      altText: "Athlex",
      price: "6 999 ₽",
      description: "Гантель гексагональная обрезиненная Athlex, 15 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)"
    },
    {
      imageSrc: "/img/13.jpg",
      altText: "Диск",
      price: "3 599 ₽",
      description: "Диск чугунный обрезиненный KETTLER, 51 мм, 5 кг",
      rating: "★★★★★",
      reviews: "(14)"
    },
    {
      imageSrc: "/img/14.jpg",
      altText: "Гриф",
      price: "4 599 ₽",
      description: "Гриф стальной 30х1700 мм Torneo",
      rating: "★★★★★",
      reviews: "(55)"
    },
    {
      imageSrc: "/img/15.jpg",
      altText: "Гриф с",
      price: "1 599 ₽",
      description: "Гриф стальной, обрезиненная рукоять 30x360 мм Torneo",
      rating: "★★★★☆",
      reviews: "(97)"
    },
    {
      imageSrc: "/img/16.jpg",
      altText: "Накладка",
      price: "1 799 ₽",
      description: "Смягчающая накладка на гриф Torneo",
      rating: "★★★★★",
      reviews: "(6)"
    },
    {
      imageSrc: "/img/17.jpg",
      altText: "Ткань",
      price: "999 ₽",
      description: "Набор силовых тканевых лент Demix, 3 шт",
      rating: "★★★★☆",
      reviews: "(48)"
    },
    {
      imageSrc: "/img/18.jpg",
      altText: "Demix",
      originalPrice:"1 399 ₽",
      price: "979 ₽",
      description: "Эспандер пружинный Demix",
      rating: "★★★★★",
      reviews: "(7)",
      discount: "-30 %"
    },
    {
      imageSrc: "/img/19.jpg",
      altText: "SPR",
      originalPrice:"2 890 ₽",
      price: "1 750 ₽",
      description: "Утяжелители для плавания 3 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-39 %"
    },
    {
      imageSrc: "/img/20.jpg",
      altText: "SPR",
      originalPrice:"12 990 ₽",
      price: "5 196 ₽",
      description: "Утяжелители SPR регулируемые 2 шт по 8 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-60 %"
    },
    {
      imageSrc: "/img/21.jpg",
      altText: "Nike",
      price: "3 499 ₽",
      description: "Утяжелители для рук Nike, 2 х 1,1 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)"
    },
    {
      imageSrc: "/img/22.jpg",
      altText: "KETTLER",
      price: "2 599 ₽",
      description: "Платформа для отжиманий KETTLER",
      rating: "★★★★★",
      reviews: "(45)"
    },
    {
      imageSrc: "/img/23.jpg",
      altText: "KETTLER",
      price: "1 799 ₽",
      description: "Упоры для отжимания KETTLER",
      rating: "★★★★★",
      reviews: "(53)"
    },    
    {
      imageSrc: "/img/24.jpg",
      altText: "Demix",
      price: "999 ₽",
      description: "Упоры для отжимания Demix",
      rating: "★★★★★",
      reviews: "(22)"
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
    if (!option) return products;
  
    const sorted = [...products];
    switch (option) {
      case SORT_OPTIONS.PRICE_ASC:
        return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case SORT_OPTIONS.PRICE_DESC:
        return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case SORT_OPTIONS.REVIEWS_DESC:
        return sorted.sort((a, b) => parseReviews(b.reviews) - parseReviews(a.reviews));
      default:
        return products;
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
      <div className="page-title-sports">Спортивный инвентарь</div>
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