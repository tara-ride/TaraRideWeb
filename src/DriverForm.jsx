/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {app} from 'server-config/firebaseConfig.js';

const DriverForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [licenseImage, setLicenseImage] = useState(null);
  const [vehicleImage, setVehicleImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLicenseImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, licenseNumber, vehicleModel, licenseImage });
  };

// account_information (business_role, created_by, created_on, email_address, uuid);

// personal_information (birth_date, first_name, last_name, middle_name, sex_at_birth);

// contact_information (contact_no, home_address);
// dev

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Become a Driver</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        { }
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        { }
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        { }
        <div>
          <label htmlFor="mobileNumber" className='block text-sm font-medium text-gray-600'>Mobile Number</label>
          <input
            id="mobileNumber"
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        { }
        <div>
          <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-600">Vehicle Model</label>
          <input
            id="vehicleModel"
            type="text"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            placeholder="Enter your vehicle's model"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        { }
        <div>
          <label htmlFor="vehicleImage" className="block text-sm font-medium text-gray-600">Upload Vehicle Model Image</label>
          <input
            id="vehicleImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 block w-full text-gray-700 border border-gray-300 rounded-md file:border-0 file:bg-blue-500 file:text-white file:py-2 file:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {vehicleImage && (
            <div className="mt-4">
              <img src={vehicleImage} alt="License Preview" className="w-32 h-32 object-cover rounded-md" />
            </div>
          )}
        </div>

        { }
        <div>
          <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-600">Driver's License Number</label>
          <input
            id="licenseNumber"
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="Enter your license number"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        { }
        <div>
          <label htmlFor="licenseImage" className="block text-sm font-medium text-gray-600">Upload Driver's License Image</label>
          <input
            id="licenseImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 block w-full text-gray-700 border border-gray-300 rounded-md file:border-0 file:bg-blue-500 file:text-white file:py-2 file:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {licenseImage && (
            <div className="mt-4">
              <img src={licenseImage} alt="License Preview" className="w-32 h-32 object-cover rounded-md" />
            </div>
          )}
        </div>

        { }
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>


  );
};

export default DriverForm;
