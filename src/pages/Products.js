import { useState } from 'react';
import Product from '../components/Product.js';
import { products } from '../content.js';
import { ProductsStyle } from '../components/styles/ProductsPage.style.js';

const Products = () => {
  const [subTotal, setSubTotal] = useState(0);

  function addToSubtotal(price) {
    setSubTotal((prevSubTotal) => prevSubTotal + price);
  }

  return (
    <ProductsStyle>
      <h3>Treat yourself to some self-care essentials</h3>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProduct={addToSubtotal}
          />
        ))}
      </div>
      <small>Click on the products to add to your cart...</small>
      <p>SubTotal: ${subTotal.toFixed(2)}</p>
      <p>Total: ${(subTotal * 1.13).toFixed(2)}</p>
    </ProductsStyle>
  );
};

export default Products;
