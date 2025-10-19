import React from 'react'

 function About() {
  return (
     <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-gray-600 mb-6 text-center">
        Welcome to ShopHub, your number one source for quality electronics, fashion, and accessories.
        We’re dedicated to giving you the very best products with a focus on quality, affordability, and great service.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Top quality products</li>
        <li>Affordable prices</li>
        <li>Secure shopping experience</li>
        <li>Responsive customer service</li>
      </ul>
    </div>
  )
}
export default  About