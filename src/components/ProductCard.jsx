const ProductCard = ({ image, name, price, category }) => {
  const handleAddToCart = () => {
    alert(`Added ${name} to cart`);
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="text-xs text-purple-600 font-semibold uppercase">{category}</p>
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-purple-700 font-bold mt-1">${price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
