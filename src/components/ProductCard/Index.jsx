function ProductCard({ image, name, price }) {
  return (
    <div>
      <h5>{name}</h5>
      <img src={image} alt='product' />
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
