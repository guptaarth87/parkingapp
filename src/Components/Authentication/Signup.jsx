import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './authentication_vector1.svg';
import Background from './authcard_background.jpg';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../Config';
import './SignUp.css'

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    last_name: '',
    email: '',
    password1: '',
    password2: '',
    phoneNo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password1,
      username: user.username,
      phoneNo: user.phoneNo,
    };
    axios.post(`${API_URL}/signup`, data)
      .then((response) => {
        Cookies.set('username', user.username);
        Cookies.set('email', user.email);
        Cookies.set('phoneNo', user.phoneNo);
        navigate('/');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert('Invalid signup');
        } else {
          console.error('Error:', error);
        }
      });
  };
  
  const handleInput = (e) => {
    const data = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: data });
  };

  return (
    <>
      <img className="authcard_background" src={Background} alt="background" />
      <div className="container mx-auto">
        <div className="bg-white shadow-lg card lg:w-8/12 md:w-10/12 sm:w-10/12 authcard ">
          <div className="logo_head">
            <h2 className="alignCentre">
              <span className="text-2xl highlight_logo text-center">Intelli-Park</span>
            </h2>
          </div>
          <div className="lg:flex md:flex sm:flex">
            <img className="lg:w-5/12 md:w-5/12 sm:w-full vector_img" src={Img} alt="vector" />
            <div className="lg:w-7/12 md:w-7/12 sm:w-full">
              <form onSubmit={handleSubmit} className="sign_up_div">
                <div className="flex justify-between">
                  <h5 className="mt-3 greycolor">Already have an account?</h5>
                  <button onClick={() => navigate('/Login')} className="mt-2 signin_button_head btn">
                    Sign in
                  </button>
                </div>
                <h2 className="card_margin">Welcome to <span className="highlight_logo">IntelliPark</span></h2>
                <h5 className="card_margin greycolor text-xl">Register your account</h5><br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="card_margin" htmlFor="inputName">Username*</label>
                    <br></br>
                    <input
                      type="text"
                      className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      id="inputName"
                      required
                      value={user.username}
                      name="username"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="card_margin" htmlFor="inputEmail">Email*</label>
                    <br></br><input
                      type="email"
                      className=" rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      id="inputEmail"
                      placeholder="abc@123gmail.com"
                      required
                      value={user.email}
                      name="email"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="card_margin" htmlFor="inputPassword">Password*</label>
                    <br></br> <input
                      type="password"
                      className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      id="inputPassword"
                      required
                      value={user.password1}
                      name="password1"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="card_margin" htmlFor="inputConfirmPassword">Confirm password*</label>
                    <br></br>  <input
                      type="password"
                      className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      id="inputConfirmPassword"
                      required
                      value={user.password2}
                      name="password2"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label className="card_margin" htmlFor="inputReferencecode">Phone Number</label>
                    <br></br>  <input
                      type="text"
                      className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      id="inputReferencecode"
                      value={user.phoneNo}
                      name="phoneNo"
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <button type="submit" className="mt-3 btn background-clr">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
