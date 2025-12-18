
const Cart = ({ cart, removeFromCart }) => {
  const taxRate = 0.0816;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const tax = (subtotal * taxRate).toFixed(2);
  const total = (subtotal + parseFloat(tax)).toFixed(2);

  return (
    <section className="cart-page">
      <h2 className="section-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-text">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-header">
            <span>Product</span>
            <span>Name</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Tax</span>
            <span>Total</span>
            <span></span>
          </div>

          {cart.map((item) => {
            const itemSubtotal = item.price * item.qty;
            const itemTax = (itemSubtotal * taxRate).toFixed(2);
            const itemTotal = (
              itemSubtotal + parseFloat(itemTax)
            ).toFixed(2);

            return (
              <div key={item.id} className="cart-row">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
                <span>{item.qty}</span>
                <span>${item.price.toFixed(2)}</span>
                <span>${itemTax}</span>
                <span>${itemTotal}</span>

                {/* REMOVE BUTTON */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            );
          })}

          <div className="cart-summary">
            <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
            <p>NY Tax (8.16%): <strong>${tax}</strong></p>
            <h3>Total: ${total}</h3>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;

