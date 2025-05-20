import React, { useState } from 'react';

const PRODUCTS = [
  {
    id: "1",
    imageSrc: "/img/s1.jpg",
    altText: "PUMA",
    price: "7 499 ₽",
    description: "Кроссовки PUMA Flyer Lite 3",
    rating: "★★★★★",
    reviews: "(23)"
  },
  {
    id: "2",
    imageSrc: "/img/s2.jpg",
    altText: "adidas",
    price: "8 999 ₽",
    description: "Кроссовки adidas Strutter",
    rating: "★★★★★",
    reviews: "(620)"
  },
  {
    id: "3",
    imageSrc: "/img/s3.jpg",
    altText: "ASICS",
    originalPrice: "28 599 ₽",
    price: "20 019 ₽",
    description: "Кроссовки ASICS Gel-Trabuco 12",
    rating: "★★★★★",
    reviews: "(3)",
    discount: "-30 %"
  },
  {
    id: "4",
    imageSrc: "/img/s4.jpg",
    altText: "PUMA",
    originalPrice: "7 499 ₽",
    price: "6 749 ₽",
    description: "Кроссовки PUMA Skyrocket Lite Elevate",
    rating: "★★★★★",
    reviews: "(8)",
    discount: "-10 %"
  },
  {
    id: "5",
    imageSrc: "/img/s5.jpg",
    altText: "New Balance",
    price: "11 999 ₽",
    description: "Кроссовки New Balance Arishi V4",
    rating: "★★★★★",
    reviews: "(1)"
  },
  {
    id: "6",
    imageSrc: "/img/s6.jpg",
    altText: "adidas",
    originalPrice: "7 999 ₽",
    price: "6 799 ₽",
    description: "Кроссовки adidas Response Runner",
    rating: "★★★★★",
    reviews: "(20)",
    discount: "-15 %"
  },
  {
    id: "7",
    imageSrc: "/img/s7.jpg",
    altText: "adidas",
    originalPrice: "10 799 ₽",
    price: "9 179 ₽",
    description: "Кроссовки adidas Duramo SL",
    rating: "★★★★☆",
    reviews: "(39)",
    discount: "-15 %"
  },
  {
    id: "8",
    imageSrc: "/img/s8.jpg",
    altText: "Erke",
    originalPrice: "8 999 ₽",
    price: "5 399 ₽",
    description: "Кроссовки Erke",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-40 %"
  },
  {
    id: "9",
    imageSrc: "/img/s9.jpg",
    altText: "PUMA",
    price: "7 999 ₽",
    description: "Кроссовки PUMA Pounce Lite",
    rating: "★★★★★",
    reviews: "(6)"
  },
  {
    id: "10",
    imageSrc: "/img/s10.jpg",
    altText: "PUMA",
    price: "9 799 ₽",
    description: "Кроссовки PUMA X-Cell Nova Cat Sl Wns",
    rating: "★★★☆☆",
    reviews: "(3)"
  },
  {
    id: "11",
    imageSrc: "/img/s11.jpg",
    altText: "Li-Ning",
    originalPrice: "9 199 ₽",
    price: "8 003 ₽",
    description: "Кроссовки Li-Ning Yueying 4",
    rating: "☆☆☆☆☆",
    reviews: "(0)",
    discount: "-13 %"
  },
  {
    id: "12",
    imageSrc: "/img/s12.jpg",
    altText: "ASICS",
    originalPrice: "25 999 ₽",
    price: "18 199 ₽",
    description: "Кроссовки ASICS Noosa TRI 15",
    rating: "★★★★☆",
    reviews: "(45)",
    discount: "-30 %"
  },
  {
    id: "13",
    imageSrc: "/img/s13.jpg",
    altText: "Saucony",
    originalPrice: "20 599 ₽",
    price: "10 299 ₽",
    description: "Кроссовки Saucony Omni 21",
    rating: "★★★★★",
    reviews: "(2)",
    discount: "-50 %"
  },
  {
    id: "14",
    imageSrc: "/img/s14.jpg",
    altText: "361°",
    price: "11 499 ₽",
    description: "Кроссовки 361° Spire Ⅱ Float",
    rating: "☆☆☆☆☆",
    reviews: "(0)"
  },
  {
    id: "15",
    imageSrc: "/img/s15.jpg",
    altText: "PUMA",
    price: "18 499 ₽",
    description: "Кроссовки PUMA Magnify Nitro 2 Wns",
    rating: "★★★★★",
    reviews: "(20)"
  },
];

const ITEMS_PER_PAGE = 12;

const parsePrice = (priceStr) => {
  if (typeof priceStr === 'string') {
    return parseInt(priceStr.replace(/\s|₽/g, ''), 10);
  }
  return 0;
};

const parseReviews = (reviewStr) => {
  if (typeof reviewStr === 'string') {
    const match = reviewStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }
  return 0;
};

const ProductCard = ({ product, onAdd, selectedSize, setSelectedSize }) => {
  const {
    imageSrc, altText, price, originalPrice,
    description, rating, reviews, discount, weeklyOffer
  } = product;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      img: imageSrc.split("/").pop(),
      price: price,
      title: description,
      size: selectedSize,
    };
    onAdd(itemToAdd);
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={altText} className="product-image" />
      <div className="badge-container">
        {discount && <span className="badge discount">{discount}</span>}
        {weeklyOffer && <span className="text-muted weekly-offer">{weeklyOffer}</span>}
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
      <div className="sizes">
        <p>Выберите размер:</p>
        <div className="size-row">
          {[37, 38, 38.5, 39, 39.5, 40, 41].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={selectedSize === size ? 'active' : ''}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="size-row">
          {[42, 43, 44, 45, 46].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={selectedSize === size ? 'active' : ''}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={!selectedSize}>
        +
      </button>
    </div>
  );
};

const ProductGrid = ({ onAdd, selectedSize, setSelectedSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortMethod, setSortMethod] = useState("default");
  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);

  const sortProducts = (products) => {
    const sorted = [...products];
    if (sortMethod === "price-asc") {
      sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortMethod === "price-desc") {
      sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortMethod === "popularity") {
      sorted.sort((a, b) => parseReviews(b.reviews) - parseReviews(a.reviews));
    }
    return sorted;
  };

  const sortedProducts = sortProducts(PRODUCTS);
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
      <div className="page-title-sports">Обувь для бега</div>
      <div style={{ display: 'grid', gap: '25px' }}>
        <div style={{ minWidth: '200px' }}>
          <h4>Сортировать:</h4>
      <div className="sort-buttons">
        <button className={sortMethod === "price-asc" ? "active" : ""} onClick={() => setSortMethod("price-asc")}>
          По цене ↑
        </button>
        <button className={sortMethod === "price-desc" ? "active" : ""} onClick={() => setSortMethod("price-desc")}>
          По цене ↓
        </button>
        <button className={sortMethod === "popularity" ? "active" : ""} onClick={() => setSortMethod("popularity")}>
          По популярности
        </button>
        <button className={sortMethod === "default" ? "active" : ""} onClick={() => setSortMethod("default")}>
          По умолчанию
        </button>
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => {
          const handleSetSize = (size) => {
            setSelectedSize(product.id, size);
          };

          return (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              selectedSize={selectedSize?.[product.id] || null}
              setSelectedSize={handleSetSize}
            />
          );
        })}
      </div>

      <div className="pagination">
        {currentPage > 1 && <button onClick={handlePrev}> ←</button>}
        <span>Страница {currentPage} из {totalPages}</span>
        {currentPage < totalPages && <button onClick={handleNext}> → </button>}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProductGrid;