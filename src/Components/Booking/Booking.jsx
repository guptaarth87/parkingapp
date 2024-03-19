import React,{useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Booking.css'


// Total number of parking slots
const totalSlots = 50; // Total number of parking slots
const preBookedSlots = [2, 5, 10]; 

export function Booking(props) {
 const [bookedSlots, setBookedSlots] = useState(preBookedSlots);
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Function to handle slot booking
  const toggleSlot = (index) => {
    if (preBookedSlots.includes(index)) {
      // If the slot is pre-booked, show notification
      showNotification(`Slot ${index + 1} is already booked.`);
      return;
    }

    if (selectedSlots.includes(index)) {
      // If the slot is already booked, unbook it
      setSelectedSlots(selectedSlots.filter((slot) => slot !== index));
      showNotification(`Slot ${index + 1} unselected.`);
    } else {
      // Book the slot if it's available
   
      setSelectedSlots([...selectedSlots, index]);
      console.log(selectedSlots)
      showNotification(`Slot ${index + 1} selected.`);
    }
  };

  // Function to handle booking selected slots
  const bookSelectedSlots = () => {
    const selectedSlotNames = selectedSlots.map((index) => (index + 1));
    console.log('Selected Slots:', selectedSlotNames);
    console.log(selectedSlotNames)
    setSelectedSlots([]);
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
      <div className="slots-container">
        {[...Array(totalSlots).keys()].map((slot) => (
          <div
            key={slot}
            className={`slot ${bookedSlots.includes(slot) ? 'booked' : ''} ${selectedSlots.includes(slot) ? 'selected' : ''}`}
            onClick={() => toggleSlot(slot)}
          >
            Slot {slot + 1}
          </div>
        ))}
      </div>
      <button onClick={bookSelectedSlots} >
        Book Selected Slots
      </button>
    </div>
    <br></br>
    </>
  );
}

// Log