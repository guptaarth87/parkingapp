import React,{useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { useForm } from 'react-hook-form';
import Footer from '../Components/Footer/Footer'
import Footer2 from '../Components/Footer/Footer2'
import API_URL from '../Config';
import axios from 'axios';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const response = await axios.post(`${API_URL}/feedback`, data);
      console.log(response);
      if (response.status === 200) {
        setSubmitSuccess(true);
        alert('FEEDBACK ADDED SUCCESSFULLY ')
        window.location.reload();
      } else {
        setSubmitError('Failed to submit form. Please try again.');
      }
      console.log(data);
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Navbar/>
    <br></br>
   
     <h2 className="text-3xl font-medium text-center title-font">Contact Us</h2>
     <div className="contactBlock">
     <div class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" 
       style={{"filter": "grayscale(1) contrast(1.2) opacity(0.4);"}}
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.4791391054214!2d75.80115887792434!3d22.62131181957711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1711691999083!5m2!1sen!2sin" 
       >
      </iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Medicaps University, Indore</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">amanjain.0916@gmail.com | amitkhatri389@gmail.com | akshatawasthy19@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+91 9399966075 | +91-9691646424 | +91 9752724184</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Leave your Query and Feedbacks</p>
      <form onSubmit={handleSubmit(onSubmit)} >
      <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" {...register('name', { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" {...register('message', { required: true })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
              </div>
              {submitError && <p className="text-red-500 text-xs mb-4">{submitError}</p>}
              {submitSuccess && <p className="text-green-500 text-xs mb-4">Form submitted successfully</p>}
              <button type="submit" disabled={submitting} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
              <p className="text-xs text-gray-500 mt-3">We believe in continuous development, integration, and improvisation.</p>
            </form>
      </div>
  </div>
</div>
     </div>
 
    </>
  )
}
