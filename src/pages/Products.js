import { useState } from 'react';
import Product from '../components/Product.js';
import { products } from '../content.js';
import styled from 'styled-components';

const Products = () => {
  const [subTotal, setSubTotal] = useState(0);

  function addToSubtotal(price) {
    setSubTotal((prevSubTotal) => prevSubTotal + price);
  }

  const ProductsStyle = styled.div`
    padding: 40px 50px;
    margin: 0 auto;
    h3 {
      text-align: center;
      font-style: oblique;
      margin-bottom: 30px;
      font-weight: 400;
    }

    & > div {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: space-around;
      gap: 50px;
      margin: 50px auto;
      width: 70%;
    }

    & > span,
    small {
      margin: 5px 0;
      display: block;
      text-align: center;
    }
  `;

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
      <br />
      <span>SubTotal: ${subTotal.toFixed(2)}</span>
      <br />
      <span>Total: ${(subTotal * 1.13).toFixed(2)}</span>
    </ProductsStyle>
  );
};

export default Products;
