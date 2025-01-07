import React from 'react';
import s from '../assets/s.jpg'; // Ensure this path is correct
import N from '../assets/N.jpg'; // Ensure this path is correct

const packages = [
  {
    name: 'Gulab Jamun',
    price: '₹250',
    description: 'Delicious and soft gulab jamun dipped in sugar syrup.',
    features: ['Made with pure khoya', 'Perfect sweetness', 'Soft texture'],
    image: s, // Image for Gulab Jamun
  },
  {
    name: 'Kaju Katli',
    price: '₹500',
    description: 'Rich and smooth kaju katli made with the finest cashews.',
    features: ['Premium cashews', 'No artificial flavors', 'Melts in mouth'],
    image: N, // Image for Kaju Katli
  },
];

const Texto = () => {
  return (
    <div className='bg-[#f7f8fc] py-16'>
      <div className='container mx-auto'>
        <div className='text-center mb-14'>
          <h2 className='text-4xl font-extrabold text-primary mb-4'>
            What Our Clients Have to Say
          </h2>
          <p className='text-lg text-gray-600 md:w-3/4 mx-auto'>
            Our customers' feedback and experiences with our delicious offerings speak for themselves.
          </p>
        </div>

        {/* Mapping through the packages */}
        <div className="grid md:grid-cols-2 gap-12">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6 flex flex-col items-center">
              
              {/* Image Section */}
              <div className="w-28 h-28 rounded-full border-4 border-primary mb-4 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
              </div>

              {/* Text Content */}
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>{pkg.name}</h3>
              <p className="text-sm text-gray-600 text-center mb-3">{pkg.description}</p>
              <p className='text-lg font-bold text-primary mb-4'>{pkg.price}</p>
              <ul className="list-disc pl-6 text-gray-700 text-sm">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Texto;
