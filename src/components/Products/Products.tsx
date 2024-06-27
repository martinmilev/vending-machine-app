const Products = ({ products, handleClick, disabled }) => {
  return (
    <div className="row">
      <div className="grid">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => handleClick(product)}
            className={`grid-button`}
            disabled={disabled}
          >
            <div className="product-content">
              <img
                src={`src/assets/images/${product.image}`}
                alt={""}
                className="product-image"
              />
              <p className="product-info">
                {product.name} <br />
                {product.price}€
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
