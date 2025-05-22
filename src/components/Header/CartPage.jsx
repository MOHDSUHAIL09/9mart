import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';
import orderService from "../../appwrite/orderService";
import auth from '../../appwrite/auth';
import './CartPage.css';

const CartPage = () => {
  const { cart, setCart } = useOutletContext();
  const [quantities, setQuantities] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch current user
    auth.getCurrentUser().then(setUser);

    // Set initial quantities for cart items
    const initialQuantities = {};
    cart.forEach((item, index) => {
      if (item) initialQuantities[index] = 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleAdd = (index) => {
    setQuantities(prev => ({
      ...prev,
      [index]: (prev[index] || 1) + 1,
    }));
  };

  const handleRemoveQuantity = (index) => {
    setQuantities(prev => ({
      ...prev,
      [index]: prev[index] > 1 ? prev[index] - 1 : 1,
    }));
  };

  const handleRemoveItem = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));

    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[index];
      return newQuantities;
    });
  };

  const handleBuy = async (item, index) => {
    try {
      if (!user) {
        alert("⚠️ Please log in to place an order.");
        return;
      }

      const quantity = quantities[index] || 1;

      const orderData = {
        productId: item.id || "unknown",
        productName: item.title || item.name || "Unnamed Product",
        Price: item.price, 
        quantity,
        userEmail: user.email,
        userId: user.$id,
        paymentStatus: "pending",
        timestamp: new Date().toLocaleString("en-IN", {timeZone: "Asia/Kolkata", hour12: true,}),
        imageUrl: item.image,

      };
      
      console.log("🖼️ Image URL:", item.image);
      console.log("📦 Creating order:", orderData); // Debug log

      const response = await orderService.createOrder(orderData);
      console.log("✅ Order response:", response); // Debug log

      alert(`✅ Order placed for ${quantity} x ${item.title || item.name}`);
    } catch (error) {
      console.error("❌ Order creation failed:", error);
      alert("❌ Something went wrong while placing the order.");
    }
  };

  const totalPrice = cart.reduce((total, item, index) => {
    if (!item) return total;
    const quantity = quantities[index] || 1;
    return total + item.price * quantity;
  }, 0);

  if (!cart || cart.length === 0) {
    return <p className="cart-empty">🛒 Your cart is empty.</p>;
  }

  return (
    <div className="amazon-cart-container">
      <h2 className="amazon-cart-heading">Shopping Cart</h2>

      {cart.map((item, index) => (
        item && (
          <div className="amazon-cart-item" key={item.id || index}>
            <div className="amazon-cart-left">
              <img src={item.image} alt={item.title} className="amazon-item-image" />
            </div>

            <div className="amazon-cart-right">
              <h3 className="amazon-item-title">{item.category}</h3>
              <h3 className="amazon-item-title">{item.title || item.name}</h3>
              <p className="amazon-stock">In stock</p>
              <p className="amazon-shipping">Eligible for FREE Shipping</p>

              <div className="amazon-item-price">
                <span className="new-price">₹{item.price?.toLocaleString() || 'N/A'}</span>
                {" "}
                {item.oldPrice && (
                  <span className="old-price">₹{item.oldPrice.toLocaleString()}</span>
                )}
              </div>

              <div className="amazon-quantity-section">
                <button onClick={() => handleRemoveQuantity(index)} className="amazon-quantity-btn">−</button>
                <span className="amazon-quantity-count">{quantities[index] || 1}</span>
                <button onClick={() => handleAdd(index)} className="amazon-quantity-btn">＋</button>
              </div>

              <div className="amazon-actions">
                <button onClick={() => handleRemoveItem(index)} className="amazon-link">Delete</button>
                <span className="amazon-divider">|</span>
                <button onClick={() => handleBuy(item, index)} className="amazon-link">Buy Now</button>
              </div>
            </div>
          </div>
        )
      ))}

      <div className="amazon-cart-subtotal">
        Subtotal ({cart.length} items): ₹{totalPrice.toLocaleString()}
      </div>
    </div>
  );
};

export default CartPage;
