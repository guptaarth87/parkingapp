import React,{useState} from 'react';
import './Booking.css';


const totalSlots = 50; // Total number of parking slots

export function Booking(props) {
   const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);

  // Function to handle slot booking
  const toggleSlot = (index) => {
    if (bookedSlots.includes(index)) {
      setBookedSlots(bookedSlots.filter((slot) => slot !== index));
    } else {
      setBookedSlots([...bookedSlots, index]);
    }
  };

  // Function to handle booking selected slots
  const bookSelectedSlots = () => {
    const selectedSlotNames = selectedSlots.map((index) => `Slot ${index + 1}`);
    console.log('Selected Slots:', selectedSlotNames);
    setSelectedSlots([]);
  };
  return (
    <>
  
    <div className='Booking'>
        <h1>Parking Slot Booking</h1>
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
      <button onClick={bookSelectedSlots} disabled={selectedSlots.length === 0}>
        Book Selected Slots
      </button>
    </div>
    </>
  );
}
