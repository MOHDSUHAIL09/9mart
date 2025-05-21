import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  const { cart, setCart } = useOutletContext();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleAdd = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1,
    }));
  };

  const handleRemoveQuantity = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1,
    }));
  };

  const handleRemoveItem = (itemId) => {
    const filteredCart = cart.filter(item => item.id !== itemId);
    setCart(filteredCart);
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const handleBuy = (item) => {
    alert(`✅ You have successfully bought: ${item.title}`);
  };

  const totalPrice = cart.reduce((total, item) => {
    const quantity = quantities[item.id] || 1;
    return total + item.price * quantity;
  }, 0);

  if (!cart || cart.length === 0) {
    return <p className="cart-empty">🛒 Your cart is empty.</p>;
  }

  return (
    <div className="amazon-cart-container">
      <h2 className="amazon-cart-heading">Shopping Cart</h2>
      {cart.map(item => (
        <div className="amazon-cart-item" key={item.id}>
          <div className="amazon-cart-left">
            <img src={item.image} alt={item.title} className="amazon-item-image" />
          </div>
          <div className="amazon-cart-right">
            <h3 className="amazon-item-title">{item.title}</h3>
            <p className="amazon-stock">In stock</p>
            <p className="amazon-shipping">Eligible for FREE Shipping</p>
            <div className="amazon-item-price">₹{item.price.toLocaleString()}</div>

            <div className="amazon-quantity-section">
              <button onClick={() => handleRemoveQuantity(item.id)} className="amazon-quantity-btn">−</button>
              <span className="amazon-quantity-count">{quantities[item.id] || 1}</span>
              <button onClick={() => handleAdd(item.id)} className="amazon-quantity-btn">＋</button>
            </div>

            <div className="amazon-actions">
              <button onClick={() => handleRemoveItem(item.id)} className="amazon-link">Delete</button>
              <span className="amazon-divider">|</span>
              <button onClick={() => handleBuy(item)} className="amazon-link">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      <div className="amazon-cart-subtotal">
        Subtotal ({cart.length} items): ₹{totalPrice.toLocaleString()}
      </div>
    </div>
  );
};

export default CartPage;