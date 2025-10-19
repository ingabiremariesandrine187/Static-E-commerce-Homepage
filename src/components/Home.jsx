import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import image1 from "../assets/image.png"
import image2 from "../assets/smart watch.jpg"
import image3 from "../assets/mouse.jpg"
import image4 from "../assets/keyboard.jpg"
import image5 from "../assets/jacket.jpg"
import image6 from "../assets/shoes.jpg"
import image7 from "../assets/trouser.jpg"
import image8 from "../assets/tshirt.jpg"
const products = [
  { name: "Wireless Headphones", price: 299, category: "Electronics", image: image1 },
  { name: "Smart Watch", price: 399, category: "Electronics", image: image2 },
  { name: "mouse", price: 89, category: "Electronics", image: image3 },
  { name: "Wireless Keyboard", price: 129, category: "Electronics", image: image4},
   
   { name: "Jacket Classic", price: 199, category: "Fashion", image: image5 },
  { name: "Sneakers", price: 149, category: "Fashion", image: image6 },
  { name: "Trouser", price: 99, category: "Fashion", image: image7 },
  { name: "Cotton T-shirt", price: 49, category: "Fashion", image: image8 },

];

const Home = () => {
  return (
    <div className="ml-0 md:ml-64">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Discover Amazing Products</h1>
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Just For You</h2>
        <p className="mb-6 text-lg">Shop the latest trends in electronics, fashion, and accessories.</p>
        <Link
          to="/products"
          className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500"
        >
          Shop Now →
        </Link>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-center mb-4">Featured Products</h2>
        <p className="text-center text-gray-500 mb-8">
          Discover our handpicked selection of trending items across all categories
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
