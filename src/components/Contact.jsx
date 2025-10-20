import React from "react";

function Contact() {
  return (
    <div className="md:ml-64 ml-0 px-6 py-14 min-h-screen bg-gray-50 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-gray-500 text-center mb-10">
          We'd love to hear from you. Reach out to us or send us a message!
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Email</h2>
            <p className="text-gray-600">support@shophub.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Phone</h2>
            <p className="text-gray-600">+250 788 123 456</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">Address</h2>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
        </div>

        {/* Feedback Form */}
        <form className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            onClick={(e) => e.preventDefault()} 
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
