import React, { useState } from 'react';

  const PRODUCTS = [
    {
      imageSrc: "/img/n1.jpg",
      altText: "Optimum system",
      price: "2 999 ₽",
      description: "Протеин 100% Optimum System 'Французская ваниль', 900 г",
      rating: "★★★★★",
      reviews: "(41)"
    },
    {
      imageSrc: "/img/n2.jpg",
      altText: "ULTRASUPPS",
      price: "1 999 ₽",
      description: "Аминокислоты BCAA 8:1:1 Ultrasupps Ultra Gold 'Фруктовый пунш', 300 г",
      rating: "☆☆☆☆☆",
      reviews: "(0)"
    },
    {
      imageSrc: "/img/n3.jpg",
      altText: "Optimum system",
      price: "1 599 ₽",
      description: "Моногидрат креатина Optimum System 200 г",
      rating: "★★★★☆",
      reviews: "(28)",
    },
    {
      imageSrc: "/img/n4.jpg",
      altText: "UltraBalance",
      originalPrice: "7 555 ₽",
      price: "2 191 ₽",
      description: "Л-карнитин тартрат UltraBalance жиросжигатель для мужчин и женщин, 90 капсул",
      rating: "★★★★★",
      reviews: "(1)",
      discount: "-71 %"
    },
    {
      imageSrc: "/img/n5.jpg",
      altText: "Forsio",
      price: "79 ₽",
      description: "Батончик протеиновый Forsio 'Кокос' 35 г",
      rating: "★★★★★",
      reviews: "(92)",
    },
    {
      imageSrc: "/img/n6.jpg",
      altText: "Forsio",
      price: "79 ₽",
      description: "Батончик протеиновый Forsio 'Шоколад' 35 г",
      rating: "★★★★★",
      reviews: "(176)",
    },
    {
      imageSrc: "/img/n7.jpg",
      altText: "Forsio",
      price: "99 ₽",
      description: "Батончик протеиновый Forsio 'Малина' 35 г",
      rating: "★★★★★",
      reviews: "(36)",
    },
    {
      imageSrc: "/img/n8.jpg",
      altText: "Forsio",
      originalPrice: "1 999 ₽",
      price: "999 ₽",
      description: "Батончики протеиновые Forsio Микс 50 г, 18 шт.",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-50 %"
    },
    {
      imageSrc: "/img/n9.jpg",
      altText: "Chikalab",
      originalPrice: "2 146 ₽",
      price: "1 788 ₽",
      description: "Протеиновые батончики 12 шт. LAYERS Chikalab Двойной шоколад",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-17 %"
    },
    {
      imageSrc: "/img/n10.jpg",
      altText: "Watt Nutrition",
      originalPrice: "2 698 ₽",
      price: "1 281 ₽",
      description: "Креатин моногидрат, Натуральный 500 гр",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-53 %"
    },
    {
      imageSrc: "/img/n11.jpg",
      altText: "RPS Nutrition",
      originalPrice: "2 300 ₽",
      price: "2 000 ₽",
      description: "Заменитель питания RPS Nutrition 1000 гр Банан с кусочками банана",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-13 %"
    },
    {
      imageSrc: "/img/n12.jpg",
      altText: "Optimum system",
      price: "2 499 ₽",
      description: "Комплекс железа Optimum system, 60 шт",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
    },
    {
      imageSrc: "/img/n13.jpg",
      altText: "Forsio",
      price: "119 ₽",
      description: "Изотоник Forsio Мохито, 0.5 л",
      rating: "★★★★★",
      reviews: "(1)",
    },
    {
      imageSrc: "/img/n14.jpg",
      altText: "Forsio",
      price: "119 ₽",
      description: "Изотоник Forsio Грейпфрут, 0.5 л",
      rating: "★★★★★",
      reviews: "(545)",
    },
    {
      imageSrc: "/img/n15.jpg",
      altText: "Forsio",
      price: "119 ₽",
      description: "Изотоник Forsio Ананас, 0.5 л",
      rating: "★★★★★",
      reviews: "(446)",
    },
    {
      imageSrc: "/img/n16.jpg",
      altText: "Gel4u",
      price: "199 ₽",
      description: "Гель энергетический GEL4 U Мята-Лимон, 60 г",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
    },
    {
      imageSrc: "/img/n17.jpg",
      altText: "Gel4u",
      price: "1 650 ₽",
      description: "Гель энергетический GEL4U + ВСАА, вкус Лесные Ягоды, 6 шт.",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
    },
    {
      imageSrc: "/img/n18.jpg",
      altText: "Mutant",
      originalPrice: "5 570 ₽",
      price: "3 899 ₽",
      description: "Гейнер Mutant Mass EXTREME 2500, 2720 г, Ванильное мороженое",
      rating: "★★★★★",
      reviews: "(1)",
      discount: "-30 %"
    },
    {
      imageSrc: "/img/n19.jpg",
      altText: "Watt Nutrition",
      originalPrice: "2 699 ₽",
      price: "2 374 ₽",
      description: "Протеин сывороточный Whey Protein Concentrate 80%, 1000 гр",
      rating: "★★★★★",
      reviews: "(2)",
      discount: "-12 %"
    },
    {
      imageSrc: "/img/n20.jpg",
      altText: "Powerup",
      price: "199 ₽",
      description: "Гель энергетический Powerup со вкусом Апельсина",
      rating: "★★★★☆",
      reviews: "(4)",
    },
    {
      imageSrc: "/img/n21.jpg",
      altText: "SiS",
      price: "349 ₽",
      description: "Гель энергетический углеводный с кофеином SIS Science In Sport 'Кола', 60 мл",
      rating: "★★★★★",
      reviews: "(28)",
    },
    {
      imageSrc: "/img/n22.jpg",
      altText: "Powerup",
      price: "169 ₽",
      description: "Гель энергетический Powerup Черника",
      rating: "★★★☆☆",
      reviews: "(4)",
    },
    {
      imageSrc: "/img/n23.jpg",
      altText: "Optimum Nutrition",
      originalPrice: "7 713 ₽",
      price: "5 399 ₽",
      description: "Креатин Optimum Nutrition Micronized Creatine Capsules, 200 капсул",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-30 %"
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
      <div className="page-title-sports">Спортивное питание</div>
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