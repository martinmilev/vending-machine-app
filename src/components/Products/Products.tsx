import React from "react";
import { Product } from "../../ts/types/product";
import { getUrl } from "../../utils/api"

interface ProductsProps {
  products: Product[];
  disabled: boolean;
  handleClick: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({
  products,
  handleClick,
  disabled,
}) => {
  const apiUrl = getUrl();

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
                src={`${apiUrl}src/assets/images/${product.image}`}
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
