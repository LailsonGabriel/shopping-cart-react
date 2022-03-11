function ProductCard({ image, name, price }) {
  return (
    <div>
      <h4>{name}</h4>
      <img src={image} alt='product' width='80' />
      <p>{price / 100}</p>
      <button type='button'>Comprar</button>
    </div>
  );
}

export default ProductCard;
