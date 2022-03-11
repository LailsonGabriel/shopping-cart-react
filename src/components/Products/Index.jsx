import above from '../../service/above10.json';
import below from '../../service/below10.json';
import ProductCard from '../ProductCard/Index';
import { ContainerProducts } from './styles';

function Products() {
  const products = [...above.items, ...below.items];

  return (
    <ContainerProducts>
      {products &&
        products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
    </ContainerProducts>
  );
}

export default Products;
