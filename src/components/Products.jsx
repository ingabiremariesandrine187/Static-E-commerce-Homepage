import { useState } from "react";
import ProductCard from "../components/ProductCard";
import image1 from "../assets/image.png"
import image2 from "../assets/smart watch.jpg"
import image3 from "../assets/mouse.jpg"
import image4 from "../assets/keyboard.jpg"
import image5 from "../assets/jacket.jpg"
import image6 from "../assets/shoes.jpg"
import image7 from "../assets/trouser.jpg"
import image8 from "../assets/tshirt.jpg"
import image9 from '../assets/gracces.jpg'



const productList = [
   { name: "Wireless Headphones", price: 299, category: "Electronics", image: image1 },
   { name: "Smart Watch", price: 399, category: "Electronics", image: image2 },
   { name: "mouse", price: 89, category: "Electronics", image: image3 },
   { name: "Wireless Keyboard", price: 129, category: "Electronics", image: image4 },
   { name: " Jacket classic", price: 199, category: "Fashion", image: image5 },
   { name: "Sneakers", price: 149, category: "Fashion", image: image6 },
   { name: "Trouser", price: 79, category: "Accessories", image: image7 },
   { name: "Cotton T shirt", price: 149, category: "Accessories", image: image8 },
   { name: "Canvas Backpack", price: 89, category: "Accessories", image: image9 },

 

];

const categories = ["All", "Electronics", "Fashion", "Accessories"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productList
      : productList.filter((p) => p.category === selectedCategory);

  return (
    <div className="md:ml-64 ml-0 px-6 py-14 transition-all duration-300">
      {/* ✅ md:ml-64 pushes content to the right when sidebar is visible on desktop */}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-500 text-lg">
            Browse our complete collection of quality products
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg border text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white shadow"
                  : "border-gray-300 text-gray-600 hover:bg-purple-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Products;
