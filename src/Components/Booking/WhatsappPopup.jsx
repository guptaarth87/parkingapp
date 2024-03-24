import React , {useRef , useEffect} from 'react'
import "./WhatsappPopup.css"

import { Link } from 'react-router-dom';

export default function WhatsappPopup({closePopUp}) {

  const popupRef = useRef(null);
  const contactNo = "9399966075"
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopUp()   // Close the popup when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopUp]);


  return (
     <>
         <div className="popup-container">
      <div  ref={popupRef} className="popup-content">
        
        <h2 className='pop-heading'>Booking completed <br></br>Please click here to confirm booking using WhatsApp and payment completion</h2>
        <p className='text-2xl my-2 mb-5 mb-sm-5 my-sm-5 my-md-3 my-lg-3'>Click below to go to WhatsApp.</p>
        <Link to={`https://wa.me/${contactNo}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow popup-heading-text">Go to WhatsApp</Link>
        <span onClick={closePopUp} className="close-btn" >&times;</span>
      </div>
    </div>
     </>
  )
}
