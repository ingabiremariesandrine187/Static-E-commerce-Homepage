// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-50 w-full ml-0 md:ml-30 overflow-x-hidden">
      {/* Use container-fluid style: no max-width, edge-to-edge */}
      <div className="max-w-[1200px] mx-auto px-8 py-10 text-gray-700 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-purple-500 text-white font-bold text-2xl px-3 py-1 rounded-full">S+</div>
            <span className="font-semibold text-xl text-gray-800">ShopHub</span>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Your trusted destination for quality products. We bring you the best selection of electronics, fashion, and accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
            <li><Link to="/products" className="hover:text-purple-500">Products</Link></li>
            <li><Link to="/about" className="hover:text-purple-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Accessories</li>
            <li>Home & Living</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start space-x-2">
              <MapPin className="text-purple-500 mt-1" size={18} />
              <span>456 Commerce St, ShopCity, SC 67890</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="text-purple-500" size={18} />
              <span>+1 (555) 987-6543</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-purple-500" size={18} />
              <span>support@shophub.com</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 text-gray-500">
            <Link to="/facebook" className="hover:text-purple-500"><Facebook size={18} /></Link>
            <Link to="/twitter" className="hover:text-purple-500"><Twitter size={18} /></Link>
            <Link to="/instagram" className="hover:text-purple-500"><Instagram size={18} /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-4 text-gray-500 text-sm w-full">
        © 2025 ShopHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
