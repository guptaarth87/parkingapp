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
        { name_: "Railway", imgUrl: Railway, mapUrl: "https://www.google.com/maps/place/Indore+Junction/@22.7170592,75.8076551,13z/data=!4m10!1m2!2m1!1sRailway+Station+,+indore!3m6!1s0x3962fd1175bed6b5:0x2c1d732ce5412d!8m2!3d22.7170592!4d75.868289!15sChhSYWlsd2F5IFN0YXRpb24gLCBpbmRvcmWSAQ10cmFpbl9zdGF0aW9u4AEA!16s%2Fm%2F06w6vgd?entry=ttu"},
        { name_: "Medicaps University", imgUrl: Medicaps, mapUrl: "https://www.google.com/maps/place/Medi-Caps+University/@22.6210224,75.8010158,17z/data=!3m1!4b1!4m6!3m5!1s0x3962f958dcb7169d:0xd877c12078e50f0f!8m2!3d22.6210224!4d75.8035907!16s%2Fm%2F076vyk5?entry=ttu" },
        {name_ : "Airport", imgUrl: Airport, mapUrl: "https://www.google.com/maps/place/Devi+Ahilyabai+Holkar+International+Airport/@22.7280036,75.7659902,14z/data=!4m10!1m2!2m1!1sAirport!3m6!1s0x3962ff2d45d1a687:0x3d0fa6d78a741c2d!8m2!3d22.7280036!4d75.804099!15sCgdBaXJwb3J0WgkiB2FpcnBvcnSSARVpbnRlcm5hdGlvbmFsX2FpcnBvcnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjFORFp1YWxoUkVBReABAA!16zL20vMGNxaHlw?entry=ttu"},
        {name_:"Rajwada" , imgUrl: Rajwada, mapUrl : "https://www.google.com/maps/place/Rajwada,+Indore,+Madhya+Pradesh+452004/@22.7175212,75.8520821,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fda0a27f50f5:0xdd375ab4fdfb3f50!8m2!3d22.71771!4d75.8544848!16s%2Fg%2F1tfclrdt?entry=ttu"}
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
            <a
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
              // onClick={() => navigate(`${item.mapUrl}`)}
              href={item.mapUrl}
            >
              Navigate
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
