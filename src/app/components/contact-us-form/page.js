import React from 'react';
import "./contact-us-form.css"

export default function ContactUsForm() {
  return (
    // Container for the form
    <div className="max-w-3xl mx-auto mt-10 p-5 text-[#4F4D74]">
      {/* Form Fields */}
      <form className="p-4 space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name Here"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            required
          />
        </div>

        {/* Contact Number 1 */}
        <div>
          <label htmlFor="contact1" className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            id="contact1"
            placeholder="+000 0000 000"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-800 focus:border-2 sm:text-sm"
            required
          />
        </div>

        {/* Contact Number 2 */}
        <div>
          <label htmlFor="contact2" className="block text-sm font-medium">Contact Number (Optional)</label>
          <input
            type="tel"
            id="contact2"
            placeholder="+000 0000 000"
            className="remove-outline  mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter Text Here ..."
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            required
            style={{ resize: 'none' }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#6173FD] text-white font-bold py-3 px-4 w-full rounded-full hover:bg-[#707ff3] transition-all duration-200 border-2 border-blue-500"
          >
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}
