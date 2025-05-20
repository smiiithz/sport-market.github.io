import React, { useState } from 'react';

const PRODUCTS = [
  {
    imageSrc: "/img/y1.jpg",
    altText: "Demix",
    price: "999 ₽",
    description: "Мяч гимнастический с насосом Demix, 55 см",
    rating: "★★★★☆",
    reviews: "(12)"
  },
  {
    imageSrc: "/img/y2.jpg",
    altText: "Demix",
    originalPrice: "799 ₽",
    price: "559 ₽",
    description: "Мяч гимнастический с насосом Demix, 45 см",
    rating: "★★★★★",
    reviews: "(6)",
    discount: "-30 %"
  },
  {
    imageSrc: "/img/y3.jpg",
    altText: "Baltic-Air",
    price: "42 000 ₽",
    description: "Мягкий цилиндр из двух частей 90 x Ø 60 см",
    rating: "☆☆☆☆☆",
    reviews: "(0)"
  },
  {
    imageSrc: "/img/y4.jpg",
    altText: "Baltic-Air",
    price: "25 000 ₽",
    description: "Надувной спортивный фляк",
    rating: "☆☆☆☆☆",
    reviews: "(0)"
  },
  {
    imageSrc: "/img/y5.jpg",
    altText: "Baltic-Air",
    price: "14 000 ₽",
    description: "Надувной спортивный цилиндр 100 см голубой",
    rating: "☆☆☆☆☆",
    reviews: "(0)"
  },
  {
    imageSrc: "/img/y6.jpg",
    altText: "Demix",
    originalPrice: "3 199 ₽",
    price: "2 599 ₽",
    description: "Коврик для фитнеса Demix",
    rating: "★★★★★",
    reviews: "(159)",
    discount: "-19 %"
  },
  {
    imageSrc: "/img/y7.jpg",
    altText: "Torneo",
    originalPrice: "799 ₽",
    price: "399 ₽",
    description: "Мяч гимнастический Torneo, 45 см",
    rating: "★★★★★",
    reviews: "(55)",
    discount: "-50 %"
  },
  {
    imageSrc: "/img/y8.jpg",
    altText: "Torneo",
    originalPrice: "999 ₽",
    price: "499 ₽",
    description: "Мяч гимнастический Torneo, 55 см",
    rating: "★★★★★",
    reviews: "(209)",
    discount: "-50 %"
  },
  {
    imageSrc: "/img/y9.jpg",
    altText: "Proiron",
    originalPrice: "659 ₽",
    price: "565 ₽",
    description: "Мяч PROIRON для пилатеса 25 см",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y10.jpg",
    altText: "Sensana",
    price: "3 999 ₽",
    description: "Коврик для йоги Sensana",
    rating: "★★★★★",
    reviews: "(2)"
  },
  {
    imageSrc: "/img/y11.jpg",
    altText: "Demix",
    originalPrice: "1 399 ₽",
    price: "999 ₽",
    description: "Коврик для йоги Demix",
    rating: "★★★★★",
    reviews: "(215)",
    discount: "-29 %"
  },
  {
    imageSrc: "/img/y12.jpg",
    altText: "Demix",
    price: "1 299 ₽",
    description: "Сумка для коврика Demix",
    rating: "★★★★★",
    reviews: "(16)"
  },
  {
    imageSrc: "/img/y13.jpg",
    altText: "KETTLER",
    price: "599 ₽",
    description: "Ремень для занятия йогой и переноски коврика KETTLER",
    rating: "★★★★★",
    reviews: "(6)"
  },
  {
    imageSrc: "/img/y14.jpg",
    altText: "Ramayoga",
    originalPrice: "13 920 ₽",
    price: "11 971 ₽",
    description: "Йога критического выравнивания и пилатес Лавка Випарита Дандасана Premium",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y15.jpg",
    altText: "Demix",
    originalPrice: "999 ₽",
    price: "699 ₽",
    description: "Блок для йоги Demix",
    rating: "★★★★★",
    reviews: "(10)",
    discount: "-30 %"
  },
  {
    imageSrc: "/img/y16.jpg",
    altText: "KETTLER",
    price: "999 ₽",
    description: "Блок для йоги KETTLER",
    rating: "★★★★★",
    reviews: "(22)"
  },
  {
    imageSrc: "/img/y17.jpg",
    altText: "Ramayoga",
    originalPrice: "3 713 ₽",
    price: "3 193 ₽",
    description: "Болстер для йоги из гречихи Мандала, серый, размер 60 х 23 см вес 5 кг",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y18.jpg",
    altText: "Ramayoga",
    originalPrice: "2 970 ₽",
    price: "2 554 ₽",
    description: "Болстер для йоги из гречихи Чакра Анахата зеленая Рамайога",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y19.jpg",
    altText: "Bodhi",
    originalPrice: "2 888 ₽",
    price: "2 483 ₽",
    description: "Подушка для медитации Мандала серый BODHI",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y20.jpg",
    altText: "Ramayoga",
    originalPrice: "2 820 ₽",
    price: "2 425 ₽",
    description: "Болстер для йоги Айенгара синий 75см шерстяной с хлопковым чехлом Рамайога",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y21.jpg",
    altText: "ОВЕМАН",
    originalPrice: "3 200 ₽",
    price: "2 400 ₽",
    description: "Маты спортивные пазлы ОВЕМАН",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-25 %"
  },
  {
    imageSrc: "/img/y22.jpg",
    altText: "ОВЕМАН",
    originalPrice: "2 990 ₽",
    price: "2 290 ₽",
    description: "Набор для массажа и йоги PRCTZ MASSAGE THERAPY 3-PIECE YOGA SET",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-23 %"
  },
  {
    imageSrc: "/img/y23.jpg",
    altText: "Proiron",
    originalPrice: "2 280 ₽",
    price: "1 975 ₽",
    description: "Коврик складной PROIRON для йоги и фитнеса 1830х610х6 мм",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-13 %"
  },
  {
    imageSrc: "/img/y24.jpg",
    altText: "Colorfit",
    price: "1 799 ₽",
    description: "Блок для йоги Colorfit",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
  },
  {
    imageSrc: "/img/y25.jpg",
    altText: "Bodhi",
    originalPrice: "810 ₽",
    price: "697 ₽",
    description: "Деревянный опорный блок, кирпич для йоги однотонный BODHI",
    rating: "★★★☆☆",
    reviews: "(25)",
    discount: "-14 %"
  },
  {
    imageSrc: "/img/y26.jpg",
    altText: "Yamaguchi",
    originalPrice: "6 000 ₽",
    price: "3 200 ₽",
    description: "Спортивный коврик Yamaguchi Comfort Fitness",
    rating: "★★★★★",
    reviews: "(225)",
    discount: "-47 %"
  },
];

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
      <div className="page-title-sports">Товары для йоги</div>
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