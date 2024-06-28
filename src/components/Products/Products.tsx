import React from "react";
import { Product } from "../../ts/types/product";

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
  //temporary fix
  const getUrl = (): string => {
    switch (import.meta.env.MODE) {
      case "production":
        return "https://raw.githubusercontent.com/martinmilev/vending-machine-app/master/";

      default:
        return "/";
    }
  };

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
                src={`${getUrl()}src/assets/images/${product.image}`}
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
