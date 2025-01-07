import React, { useState } from 'react';
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      address,
      message,
    };
    console.log(data);
    setShowModal(true);
  };

  return (
    <div id="contact" className="bg-heroBg flex flex-col items-center justify-center py-28 px-8">
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
          {/* left side div */}
          <div className="space-y-8">
            <h2 className="text-4xl font-secondary mb-4 text-white">Make an Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#2b2b2b] p-3">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-0">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#2b2b2b] p-3">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-0">
                  <h3 className="text-lg font-medium">Fast Services</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#2b2b2b] p-3">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div className="space-y-0">
                  <h3 className="text-lg font-medium">Call Services</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#2b2b2b] p-3">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-0">
                  <h3 className="text-lg font-medium">Quality Services</h3>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="space-y-8 p-8 bg-white shadow-xl rounded-md">
            <h3 className="text-2xl font-bold mb-4">Book Your Service</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your message has been sent successfully. Visit again!</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
