import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Img from './authentication_vector1.svg';
import Background from './authcard_background.jpg';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../Config';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    console.log("handle block");
    e.preventDefault();
    const data = {
      email: user.email,
      password: user.password,
    };
    axios.post(`${API_URL}/login`, data)
      .then((response) => {
        if (response.status === 200) {
          Cookies.set('username', response.data.user.username);
          Cookies.set('email', response.data.user.email);
          Cookies.set('phoneNo', response.data.user.phoneNo);
          navigate('/');
        } else {
          alert('Invalid login, please sign up first or enter correct password');
        }
      })
      .catch((error) => {
      
        console.error('Error:', error);
        alert('Invalid logging in. Please try again later.');
      });
  };
  

  const handleInput = (e) => {
    const data = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: data });
  };

  return (
    <>
      <img className="login_background" src={Background} alt="background" />
      <div className="container mx-auto">
        <div className="m-4 bg-white lg-shadow card lg:w-8/12 md:w-10/12 sm:w-10/12 logincard p-4">
          <div className="lg:flex md:flex sm:flex">
            <img className="lg:w-5/12 md:w-8/12 sm:w-full vector_img" src={Img} alt="vector" />
            <div className="lg:w-7/12 md:w-4/12 sm:w-full">
              <div className="lg:flex md:flex sm:flex lg:flex-row-reverse md:flex-row-reverse sm:flex-col">
                <div className="lg:w-8/12 md:w-10/12 sm:w-full lg:mx-auto md:mx-auto sm:mx-0">
                  <h2 className="text-center text-2xl">
                    <span className="highlight_logo">Intelli-Park</span>
                  </h2>
                  <div className="flex justify-between">
                    <h5 className="mt-3 greycolor">Don't have an account</h5>
                    <button onClick={() => navigate('/Signup')} className="mt-2 signin_button_head btn">
                      Sign up
                    </button>
                  </div>
                  <div className="logintab">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="card_margin" htmlFor="inputEmail">
                          Email or Username*
                        </label>
                        <br></br>
                        <input
                          type="email"
                          className="input_field rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          id="InputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter email or username"
                          required
                          value={user.email}
                          name="email"
                          onChange={handleInput}
                        />
                      </div>
                      <br></br>
                    
                      <div className="form-group">
                        <label className="card_margin" htmlFor="inputPassword">
                          Password*
                        </label>
                        <br></br>
                        <input
                          type="password"
                          className="input_field rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          id="Password"
                          placeholder="Enter Password"
                          required
                          value={user.password}
                          name="password"
                          onChange={handleInput}
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn alignCentre mt-3 botton background-clr">
                          Sign in
                        </button>
                      </div>
                    </form>
                    <div className="mt-3">
                      <Link to="/getotp" className="forget_pass">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
