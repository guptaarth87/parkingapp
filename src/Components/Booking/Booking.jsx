import React,{useState, useEffect} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Booking.css'
import axios from 'axios';
import API_URL from '../../Config';
import Cookies from 'js-cookie';
import WhatsappPopup from './WhatsappPopup';

// Total number of parking slots
const totalSlots = 50; // Total number of parking slots


export function Booking(props) {
  const [place_, setPlace_] = useState('');

  const [bookedSlots, setBookedSlots] = useState([]);
  const [showWhatsappPopup , setShowWhatsappPopup] = useState(false);

  useEffect(() => {
    const fetchData = async (place_) => {
      try {
        console.log(place_);
        const response = await axios.get(`${API_URL}/prebooked/${place_}`);
        const preBookedSlots = response.data.result;
        
        setBookedSlots(preBookedSlots);
      } catch (error) {
        console.error('Error fetching pre-booked slots:', error);
      }
    };
    
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const placeValue = params.get('place');
    console.log(placeValue);
    setPlace_(placeValue);
    fetchData(placeValue); // Call the fetchData function when the component mounts
  }, []);
  
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Function to handle slot booking
  const toggleSlot = (index) => {
    if (bookedSlots.includes(index)) {
      // If the slot is pre-booked, show notification
      showNotification(`Slot ${index } is already booked.`);
      return;
    }

    if (selectedSlots.includes(index)) {
      // If the slot is already booked, unbook it
      setSelectedSlots(selectedSlots.filter((slot) => slot !== index));
      showNotification(`Slot ${index } unselected.`);
    } else {
      // Book the slot if it's available
   
      setSelectedSlots([...selectedSlots, index]);
      console.log(selectedSlots)
      showNotification(`Slot ${index } selected.`);
    }
  };

  // Function to handle booking selected slots
  const bookSelectedSlots = () => {
    const selectedSlotNames = selectedSlots.map((index) => (index ));
    console.log('Selected Slots:', selectedSlotNames);
   
    let slots = selectedSlotNames;
    let amount = slots.length * 500;
    const data_ = {
      "email": Cookies.get('email'),
      "username": Cookies.get('username'),
      "phoneNo": Cookies.get('phoneNo'),
      "slots":selectedSlotNames,
      "place_":place_,
      "amount":amount
    }
    if(!data_.username){
      alert("Please login first")
    }
    try{
      axios.post(`${API_URL}/createbooking`,data_).then((res)=>{
        if (res.status ===201){
          alert("Slot Booked!");
          setShowWhatsappPopup(true);
          console.log(selectedSlotNames)
        setSelectedSlots([]);
        
        }
      })
    }catch(err){
         alert("error in server");
    } 
   
     
     
  
    
  };

  // Function to show notification
  const showNotification = (message) => {
    alert(message); // You can replace this with a custom notification component if needed
  };
  return (
    <>
    
    <div className='Booking'>
      <h1 className='text-2xl'>Parking Slot Booking</h1>
      <br></br>
      {
        showWhatsappPopup?
        <WhatsappPopup/>
        :
        
        <>
      <div className="slots-container">
        {[...Array(totalSlots).keys()].map((slot) => (
          <div
            key={slot}
            className={`slot ${bookedSlots.includes(slot) ? 'booked' : ''} ${selectedSlots.includes(slot) ? 'selected' : ''}`}
            onClick={() => toggleSlot(slot)}
          >
            Slot {slot }
          </div>
        ))}
      </div>
      <br></br>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ml-4 lg:ml-0 mt-4 lg:mt-0" onClick={bookSelectedSlots} >
        Book Selected Slots
      </button>
      </>
      }
    </div>
    
    <br></br>
    </>
  );
}

// Log