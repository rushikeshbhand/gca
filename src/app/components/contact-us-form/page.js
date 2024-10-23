'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function ContactUsForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', data);
      if (response.data.success) {
        toast.success('Form submitted successfully!', { position: "top-right", autoClose: 3000 });
        reset(); // Reset the form fields
      }
    } catch (error) {
      toast.error('Failed to submit the form', { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 text-[#4F4D74]">
      <ToastContainer />
      <form className="p-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
         {/* Name Field */}
         <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name Here"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contact1" className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            id="contact1"
            placeholder="+91 000 0000 000"
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-800 focus:border-2 sm:text-sm"
            {...register('contact1', {
              required: 'Contact number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10-digit contact number',
              },
            })}
          />
          {errors.contact1 && <p className="text-red-500 text-sm mt-1">{errors.contact1.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="contact2" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="contact2"
            placeholder="Enter Email Here"
            className="remove-outline  mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            {...register('contact2', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.contact2 && <p className="text-red-500 text-sm mt-1">{errors.contact2.message}</p>}
        </div>

        {/* Message Field (optional) */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Enter Text Here ..."
            className="remove-outline mt-1 p-4 block w-full rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out sm:text-sm"
            style={{ resize: 'none' }}
            {...register('message')}
          ></textarea>
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="bg-[#6173FD] text-white font-bold py-3 px-4 w-full rounded-full">
            Contact Us
          </button>
        </div>
      </form>
    </div>
  );
}
