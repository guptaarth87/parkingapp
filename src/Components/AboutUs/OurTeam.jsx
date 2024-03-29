import React from 'react';
import Img1 from '../../assets/team/1.jpg';
import Img2 from '../../assets/team/2.jpeg';
import Img3 from '../../assets/team/3.jpg';

const teams = [
  { name_: 'Akshat Awasthi', designation: 'Founder', imgUrl: Img1, linkedinUrl: 'https://www.linkedin.com/in/akshatawasthy/' },
  { name_: 'Aman Jain', designation: 'Co-founder', imgUrl: Img2, linkedinUrl: 'https://www.linkedin.com/in/aman-jain098' },
  { name_: 'Amit Khatri', designation: 'Co-founder', imgUrl: Img3, linkedinUrl: 'https://www.linkedin.com/in/amit-khatri-/' },

];

const OurTeam = () => {
    return (
        <>
     <h2 className='text-center text-4xl text-bold'>Our Team</h2>
       <br></br>
      <div className="flex flex-wrap justify-center gap-8">
 
        {teams.map((team, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 lg:max-w-lg xl:max-w-xl"
          >
            <img className="w-full h-64 object-cover" src={team.imgUrl} alt={team.name_} />
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2 text-center text-gray-800">{team.name_}</div>
              <p className="text-center text-cyan-900">{team.designation}</p>
            </div>
            <div className="flex justify-center pb-4">
              <a
                href={team.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };
  

export default OurTeam;
