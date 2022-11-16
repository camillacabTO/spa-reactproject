import { useState } from 'react';
import Product from '../components/Product.js';
import { products } from '../content.js';
// importing content for the application
import { ProductsStyle } from '../components/styles/ProductsPage.style.js';

//I decided to keep all the data of services and products (including description, price etc) in a separate js file and import here and on the Services Page (also imported services in the Book Appointment page). Mostly avoid to code duplication and because this data wont be changing. Then there is no point in putting the in a state variable.

const Products = () => {
  const [subTotal, setSubTotal] = useState(0);

  // Grabbing the updated state (prevSubTotal) using a callback function and adding the 'price' argument passed to the function. I know I don't need to pass a function to setSubTotal, but it is safer, to make sure the prevSubTotal variable is up to date by the time I add the price variable to it
  const addToSubtotal = (price) => {
    setSubTotal((prevSubTotal) => prevSubTotal + price);
  };

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
      {/* Adding taxes to the subtotal and displaying to user */}
      <p>Total: ${(subTotal * 1.13).toFixed(2)}</p>
    </ProductsStyle>
  );
};

export default Products;
