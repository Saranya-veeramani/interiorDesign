import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
const App = () => {
  return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
              <Route path="/"element={<Home/>}/>
              <Route path="/Services"element={<Services/>}/>
          <Route path="/Contact"element={<Contact/>}/>
          <Route path="/AboutUs"element={<AboutUs></AboutUs>}/>


        </Routes>
         <Footer/>       </BrowserRouter>
      </div>
  );
}

export default App
