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
              <p>
                {product.name} <br />
                {product.price}€
              </p>
            </button>
          ))}
        </div>
      </div>
  );
};

export default Products;
