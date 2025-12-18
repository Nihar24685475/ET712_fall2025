import "../App.css";

const ModalWindow = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-body">
          {/* IMAGE */}
          <div className="modal-image">
            <img src={product.img} alt={product.name} />
          </div>

          {/* INFO */}
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-desc">{product.description}</p>
            <p className="modal-price">${product.price}</p>

            <button
              className="add-btn"
              onClick={() => {
                addToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
