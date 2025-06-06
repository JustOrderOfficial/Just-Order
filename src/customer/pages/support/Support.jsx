import React from 'react';
import { MailOutline, Phone, Business } from '@mui/icons-material';

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-white mt-4 ">
      {/* Contact Header */}
      {/* <div className="flex justify-between items-center p-6 rounded-lg bg-gray-800 border border-gray-700 backdrop-blur-lg">
        <div className="flex-1 flex justify-center items-center">
          <p className="text-center text-2xl font-semibold">Let’s Get in Touch</p>
        </div>
        <div className="w-72 h-72 rounded-full overflow-hidden flex justify-center items-center">
          <img
            src="/assets/images/profileImg.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}

      {/* Contact Body */}
      <div className="flex flex-col md:flex-row gap-12 mt-8">
        {/* Left Section */}  
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-left">Your Chance to Create Opportunities Today</h2>
          <p className="mb-6 leading-relaxed text-left">
            Hi, please complete the form below to let us know how we can help
            you. Check the Frequently Asked Questions section for quick
            answers.
          </p>
          <div className="mb-4 flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center text-white mr-4">
              <MailOutline />
            </div>
            <span>youremail@example.com</span>
          </div>
          <div className="mb-4 flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center text-white mr-4">
              <Phone />
            </div>
            <span>+123 456 789</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex justify-center items-center text-white mr-4">
              <Business />
            </div>
            <span>123 Main Street, Anytown, US</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 rounded-lg">
          <form>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="flex gap-4 mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select
              className="w-full p-3 mb-4 rounded-lg bg-gray-100  text-gray-800 focus:ring-2 focus:ring-orange-500"
            >
              <option>Select a Contact Reason</option>
              <option>Support</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full p-3 mb-4 rounded-lg bg-gray-100 text-gray-800 focus:ring-2 focus:ring-orange-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-1/2 py-3 justify-items-start bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098527!2d-122.42120418468156!3d37.77492927975969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4901947%3A0xcca1b2b4e0e0b8a2!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1682018362844!5m2!1sen!2sus"
            width="100%"
            tittle="Map"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Support;
