import { ProductStyle } from './styles/Product.style';

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
