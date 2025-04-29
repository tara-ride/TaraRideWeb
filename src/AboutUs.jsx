import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16 sm:px-16 lg:px-24 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-8" data-aos="fade-up">
          About Us
        </h1>
        <p className="text-lg max-w-4xl mx-auto mb-10 leading-relaxed opacity-90" data-aos="fade-up" data-aos-delay="100">
          We are a group of IT students from FEU Alabang, known as <strong className="font-semibold">LaBuBuCoders</strong>. This is our capstone project.
          Our goal is to create <strong className="font-semibold text-yellow-500">TaraRide</strong>, a mobile and web-based carpooling platform designed to optimize travel costs and enhance safety.
          The platform aims to provide a seamless experience for both drivers and passengers by focusing on route efficiency, secure payments, and a user-friendly interface.
          TaraRide offers passengers a cost-effective way to travel, contributing to a greener environment by reducing carbon emissions and traffic congestion.
        </p>

        <h2 className="text-3xl font-semibold text-purple-700 mb-6" data-aos="fade-up">Impact</h2>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-90" data-aos="fade-up" data-aos-delay="200">
          Carpooling offers numerous benefits, including reduced commuting expenses, such as fuel and toll fees, for drivers. For passengers, TaraRide provides an affordable, convenient alternative to traditional ride-hailing services.
          By carpooling, we can reduce traffic congestion and lower our carbon footprint, promoting a sustainable and eco-friendly transportation system.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
