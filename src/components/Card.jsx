import React,{useState} from 'react';

function Card({ cart, setCart ,product}) {
  const [inCart, setInCart] = useState(true)
  const addToCart = () => {
    setCart(cart + 1);
    setInCart(false);
  };
  const removeFromCart = () => {
    setCart(cart - 1);
    setInCart(true);
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">

      {product.sale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
        )}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            {product.reviews && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {[...Array(product.reviews).keys()].map((index) => (
                  <div key={index} className="bi-star-fill"></div>
                ))}
              </div>
            )}


            {product.sale && (
            <span className="text-muted text-decoration-line-through">{product.originalPrice}</span> 
            )}
            
            {product.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {inCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>
                Add to Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto"onClick={removeFromCart} >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;