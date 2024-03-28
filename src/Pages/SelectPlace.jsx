import React from 'react'
import { useNavigate } from 'react-router-dom';
import Railway from '../assets/places/railway station.jpg';
import Medicaps from '../assets/places/Medicaps university.jpg';
import Rajwada from '../assets/places/Rajwada.jpg';
import Airport from '../assets/places/Airport.jpg';
import Navbar from '../Components/Navbar/Navbar'

export default function SelectPlace() {

    const navigate = useNavigate();

  const handleBookClick = (placeName) => {
    navigate(`/bookslot?place=${placeName}`);
  };

    const placeImg = [
        { name_: "Railway", imgUrl: Railway },
        { name_: "Medicaps University", imgUrl: Medicaps },
        {name_ : "Airport", imgUrl: Airport},
        {name_:"Rajwada" , imgUrl: Rajwada}
      ];
      
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-8 flex flex-wrap justify-center">
      {placeImg.map((item, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8">
          <img
            className="w-full h-64 object-cover object-center"
            src={item.imgUrl}
            alt={item.name_}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.name_}</div>
           
          </div>
          <div className="px-6 py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleBookClick(item.name_)}
            >
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
