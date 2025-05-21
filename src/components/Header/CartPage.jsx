import { useOutletContext } from 'react-router-dom';

const CartPage = () => {
  const { cart } = useOutletContext();

  return (
    <div>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
            <p>{item.title || item.name} - ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
