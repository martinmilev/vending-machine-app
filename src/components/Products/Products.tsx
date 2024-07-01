import React from "react";
import { Product } from "../../ts/types/product";
import { getUrl } from "../../api/mockedApi";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const apiUrl = getUrl();

  return (
    <div className="row">
      <div className="product">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => handleClick(product)}
            disabled={disabled}
          >
            <div className="content">
              <img
                src={`${apiUrl}src/assets/images/${product.name}.png`}
                alt={""}
                className="image"
              />
              <p className="info">
                {t(`products.${product.name}`)}
                <br />
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
