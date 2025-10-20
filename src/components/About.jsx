import React from "react";
// 📌 Importing icons from react-icons
import { FaDollarSign, FaShippingFast, FaHeadset, FaShoppingBag } from "react-icons/fa";

function About() {
  return (
    <div className="md:ml-64 ml-0 px-6 py-14 min-h-screen bg-gray-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-500 text-lg mb-10">
          Welcome to <span className="text-purple-600 font-semibold">ShopHub</span> — 
          your trusted online store for quality products at unbeatable prices.
        </p>

        {/* Company Description */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            At ShopHub, we are passionate about bringing the best products closer to you.
            From electronics to fashion and accessories, our mission is to provide an easy,
            secure, and enjoyable shopping experience. We believe everyone deserves access
            to quality products without compromise.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Affordable Prices */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <FaDollarSign className="text-purple-600 text-4xl mb-3" />
              <h3 className="font-semibold text-purple-700 mb-2">Affordable Prices</h3>
              <p className="text-gray-600 text-sm">
                We offer quality products at competitive prices.
              </p>
            </div>

            {/* 2. Fast Delivery */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <FaShippingFast className="text-purple-600 text-4xl mb-3" />
              <h3 className="font-semibold text-purple-700 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Get your orders delivered quickly and reliably.
              </p>
            </div>

            {/* 3. 24/7 Support */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <FaHeadset className="text-purple-600 text-4xl mb-3" />
              <h3 className="font-semibold text-purple-700 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Our team is always ready to help you.
              </p>
            </div>

            {/* 4. Quality Products */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center">
              <FaShoppingBag className="text-purple-600 text-4xl mb-3" />
              <h3 className="font-semibold text-purple-700 mb-2">Quality Products</h3>
              <p className="text-gray-600 text-sm">
                We guarantee the best quality for every product.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
