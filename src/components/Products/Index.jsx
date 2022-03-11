import above from '../../service/above10.json';
import below from '../../service/below10.json';
import ProductCard from '../ProductCard/Index';

function Products() {
  const products = [...above.items, ...below.items];

  return (
    <div>
      {products &&
        products.map(({ imageUrl, name, price }) => (
          <ProductCard key={name} image={imageUrl} name={name} price={price} />
        ))}
    </div>
  );
}

export default Products;
