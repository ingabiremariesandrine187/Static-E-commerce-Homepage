import ProductCard from "../components/ProductCard";

const productList = [
  { name: "Wireless Headphones", price: 299, category: "Electronics", image: "https://via.placeholder.com/300x200" },
  { name: "Smart Watch", price: 399, category: "Electronics", image: "https://via.placeholder.com/300x200" },
  { name: "Laptop Stand", price: 89, category: "Electronics", image: "https://via.placeholder.com/300x200" },
  { name: "Wireless Keyboard", price: 129, category: "Electronics", image: "https://via.placeholder.com/300x200" },
  { name: "Leather Jacket", price: 199, category: "Fashion", image: "https://via.placeholder.com/300x200" },
  { name: "Sneakers", price: 149, category: "Fashion", image: "https://via.placeholder.com/300x200" },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Products;
