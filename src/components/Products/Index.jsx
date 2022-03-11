import above from '../../service/above10.json';
import below from '../../service/below10.json';
import ProductCard from '../ProductCard/Index';

function Products() {
  const products = [...above.items, ...below.items];

  return (
    <div>
      {products &&
        products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
    </div>
  );
}

export default Products;
