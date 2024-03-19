import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom';
import Landing from './Pages/Landing';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import SolutionsPage from './Pages/SolutionsPage';
import LoginPage from './Pages/LoginPage';
import Footer2 from './Components/Footer/Footer2';
import BookSlot from './Pages/BookSlot';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/solutions' element={<SolutionsPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/book' element={<BookSlot/>}/>
   </Routes>
   <Footer2/>
    </>
  )
}

export default App
