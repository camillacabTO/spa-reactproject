import { ProductStyle } from './styles/Product.style';

// Component used to display each product
// the product obj contains all information to be displayed in this page, including the background color
// addProduct function is passed by props from the parent component. It is called when the Product component is clicked and the price of this specific product is passed as an argument in order to update the subTotal state in the parent component (Products)

// ***** I have chosen to put all the style in separate files in the components/style folder for better organization *****

export default function Product({ product, addProduct }) {
  return (
    <ProductStyle
      bgColor={product.bgColor}
      onClick={() => addProduct(product.price)}
    >
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </ProductStyle>
  );
}
