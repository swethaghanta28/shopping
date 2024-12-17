import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import WomenPage from './pages/Womenpage';
import MenPage from './pages/Menpage';
import KidPage from './pages/Kidspage';
import BeautyPage from './pages/Beautypage';
import FootwearPage from './pages/Footwearpage';
import JewelleryPage from './pages/Jewellerypage';
import HomePage from './pages/Home'
import Signuppage from './pages/Signuppage';
import Signinpage from './pages/Signinpage'; 
import Cartpage from './pages/Cartpage';
import Wishlistpage from './pages/Wishlistpage';



const App = () => {
  return (

    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/footwear" element={<FootwearPage />} />
        <Route path="/jewellery" element={<JewelleryPage />} />
        <Route path="/signup" element={<Signuppage/>} />
        <Route path="/signin" element={<Signinpage/>} />
        <Route path="/cart" element={<Cartpage/>} />
        <Route path="/wishlist" element={<Wishlistpage/>} />

      </Routes>
      <Footer />
    </Router>

    
  );
};

export default App;
