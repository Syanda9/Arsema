
"use client";

import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const AuthForm = () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end', // Change this to 'top-end' for top right corner
    iconColor: 'red',
    customClass: {
        popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
});

  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    country: ''
  });

  // Dummy credentials for sign-in simulation
  const dummyCredentials = {
    email: 'test@example.com',
    password: 'password123'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Sign-up logic placeholder
      console.log('Sign-Up Data:', formData);
    } else {
      // Dummy sign-in check
      if (
        formData.email === dummyCredentials.email &&
        formData.password === dummyCredentials.password
      ) {
        // Redirect to protected page
        router.push('/#');
      } else {
        // alert('Invalid email or password.');
        Toast.fire({
          icon: 'warning',
          title: 'Invalid email or password.',
        })
      }
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: '',
      username: '',
      password: '',
      country: ''
    });
  };

  return (
    <div>
      <Hero />
      <div className='flex items-center justify-center flex-col min-h-[40vh] py-10'>
        <h2 className='text-2xl font-bold pb-4'>{isSignUp ? 'Customer Sign Up' : 'Customer Sign In'}</h2>

        <form
          className='flex flex-col w-[90%] sm:w-[60%] lg:w-[25%] gap-4 min-h-full border p-4 rounded'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col'>
            <label>Email</label>
            <input
              className='border h-10 rounded px-2'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {isSignUp && (
            <>
              <div className='flex flex-col'>
                <label>Name</label>
                <input
                  className='border h-10 rounded px-2'
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label>Country</label>
                <select
                  className='border h-10 rounded px-2'
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Ghana">Ghana</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </>
          )}
          <div className='flex flex-col'>
            <label>Password</label>
            <input
              className='border h-10 rounded px-2'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className='border h-10 rounded bg-[#4a6b92] text-white'
            type="submit"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <button onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AuthForm;
