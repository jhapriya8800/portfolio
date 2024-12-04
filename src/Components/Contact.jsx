import React from "react";

const ContactCard = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h2>
      <div className="flex items-center mb-4">
        <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">📞</span>
        <p className="ml-4 text-gray-600">Phone: 6209438494</p>
      </div>
      <div className="flex items-center mb-4">
        <span className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold">📧</span>
        <p className="ml-4 text-gray-600">Email:priyajha220996@gmail.com</p>
      </div>
      <div className="flex items-center">
        <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg font-bold">📍</span>
        <p className="ml-4 text-gray-600">Location: Sector-1 New Delhi</p>
      </div>
    </div>
  );
};

export default ContactCard;
