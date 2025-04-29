import React from "react";
import { FaCar, FaUsers, FaMapMarkerAlt } from "react-icons/fa"; // Example icons

const Service = () => {
  return (
    <section className="services-section py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all">
            <div className="service-icon text-4xl text-blue-600 mb-4">
              <FaCar />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Carpooling</h3>
            <p className="text-gray-600 text-lg">
              Share rides with others heading in the same direction, saving money and reducing traffic.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all">
            <div className="service-icon text-4xl text-green-600 mb-4">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community</h3>
            <p className="text-gray-600 text-lg">
              Join a community of like-minded commuters who care about the environment and convenience.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-all">
            <div className="service-icon text-4xl text-red-600 mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Route Planning</h3>
            <p className="text-gray-600 text-lg">
              Get accurate route suggestions and make the most efficient travel decisions based on your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
