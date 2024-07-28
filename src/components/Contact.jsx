import React from "react";
import Wavify from "react-wavify";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-blue-800">
              Get In Touch
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-blue-800">
              Contact Information
            </h2>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-blue-500" />
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p className="text-gray-500">+91 6371033476</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-500" />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-gray-500">sidhhant.prasad04@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-500" />
              <div>
                <p className="font-medium text-gray-700">Address</p>
                <p className="text-gray-500">Jaydev Vihar,Bhubaneswar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wavify
        fill="#0693e3"
        paused={false}
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 3,
        }}
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Contact;
