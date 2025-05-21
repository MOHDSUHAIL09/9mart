
import { useOutletContext } from 'react-router-dom';

import './Product.css';

const products = [
  { id: 1, title: "Haldiram's Sev Bhujia", category: "Snack & Munchies", rating: 4.5, reviews: 149, price: 18, oldPrice: 24, image: 'product-img-1.jpg', badge: 'Sale' },
  { id: 2, title: "NutriChoice Digestive", category: "Bakery & Biscuits", rating: 4.5, reviews: 25, price: 24, image: 'product-img-2.jpg', badge: '14%' },
  { id: 3, title: "Cadbury 5 Star Chocolate", category: "Bakery & Biscuits", rating: 5, reviews: 469, price: 32, oldPrice: 35, image: 'product-img-3.jpg' },
  { id: 4, title: "Onion Flavour Potato", category: "Snack & Munchies", rating: 3.5, reviews: 456, price: 3, oldPrice: 5, image: 'product-img-4.jpg', badge: 'Hot' },
  { id: 5, title: "Salted Instant Popcorn", category: "Instant Food", rating: 4.5, reviews: 39, price: 13, oldPrice: 18, image: 'product-img-5.jpg' },
  { id: 6, title: "Haldiram's Sev Bhujia", category: "Snack & Munchies", rating: 4.5, reviews: 149, price: 18, oldPrice: 24, image: 'product-img-6.jpg', badge: 'Sale' },
  { id: 7, title: "NutriChoice Digestive", category: "Bakery & Biscuits", rating: 4.5, reviews: 25, price: 24, image: 'product-img-7.jpg', badge: '14%' },
  { id: 8, title: "Cadbury 5 Star Chocolate", category: "Bakery & Biscuits", rating: 5, reviews: 469, price: 32, oldPrice: 35, image: 'product-img-8.jpg' },
  { id: 9, title: "Onion Flavour Potato", category: "Snack & Munchies", rating: 3.5, reviews: 456, price: 3, oldPrice: 5, image: 'product-img-9.jpg', badge: 'Hot' },
  { id: 10, title: "Salted Instant Popcorn", category: "Instant Food", rating: 4.5, reviews: 39, price: 13, oldPrice: 18, image: 'product-img-12.jpg' },
  // Add more products similarly...
];

const PopularProducts = () => {
    const { handleAddToCart } = useOutletContext(); // function App.jsx से मिल रहा


  return (
    <div className="popular-products">
      <h2>Popular Products</h2>
      <div className="underline"></div>

      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            {product.badge && <div className="badge">{product.badge}</div>}

            <img src={product.image} alt={product.title} />

            <div className="product-info">
              <p className="category">{product.category}</p>
              <h3 className="title">{product.title}</h3>

              <div className="price">
                ${product.price}
                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice}</span>
                )}
              </div>
              <div className='product-flex'>
                <div className="rating">
                  ⭐⭐⭐ {product.rating} ({product.reviews})
                </div>
              <button onClick={() => handleAddToCart(product)} className='add-btn'>
  + Add
</button>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularProducts;
