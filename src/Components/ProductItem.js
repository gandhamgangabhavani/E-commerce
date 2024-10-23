import React from 'react';

function ProductItem({ product, addToCart }) {
  return (
    <div className="card m-2 p-2" style={{ width: '16rem', boxShadow:'0px 5px 10px rgba(0, 0, 0, 0.1)'}}>
  <img src={product.image} className="card-img-top" alt={product.title} height='50%' width={60} style={{flexGrow:'1'}} />
  <div className="card-body"  >
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">Price: ${product.price}</p>
    <button className="btn btn-primary d-flex align-item-end" onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
</div>

  );
}

export default ProductItem;