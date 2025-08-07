// import AboutUsPage from './screens/AboutUsPage'
// import ServicesPage from './screens/ServicesPage'
// import PackagesPage from './screens/PackagesPage'
// import BlogPage from './screens/BlogPage'
// import DestinationPage from './screens/DestinationPage'
// import ExploreTourPage from './screens/ExploreTourPage'
// import TourBookingPage from './screens/TourBookingPage'
// import GalleryPage from './screens/GalleryPage'
// import TravelGuidePage from './screens/TravelGuidePage'
// import TestimonialPage from './screens/TestimonialPage'
// import ErrorCodePage from './screens/ErrorCodePage'
// import ContactPage from './screens/ContactPage';

/* <Route exact path='/about' element={<AboutUsPage />}></Route>
        <Route exact path='/services' element={<ServicesPage j/>}></Route>
        <Route exact path='/packages' element={<PackagesPage />}></Route>
        <Route exact path='/blog' element={<BlogPage />}></Route>
        <Route exact path='/destination' element={<DestinationPage />}></Route>
        <Route exact path='/tour' element={<ExploreTourPage />}></Route>
        <Route exact path='/booking' element={<TourBookingPage />}></Route>
        <Route exact path='/gallery' element={<GalleryPage />}></Route>
        <Route exact path='/guides' element={<TravelGuidePage />}></Route>
        <Route exact path='/testimonial' element={<TestimonialPage />}></Route>
        <Route exact path='/404' element={<ErrorCodePage />}></Route>
        <Route exact path='/contact' element={<ContactPage/>}></Route> */

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import NavbarAndHero from "./components/NavbarAndHero";
import SpokenEnglish from "./courses/SpokenEnglish";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Ielts from "./courses/Ielts";
import Lifeskills from "./courses/Lifeskills";
import Duolingo from "./courses/Duolingo";
import Leo from "./courses/Leo";
import Gre from "./courses/Gre";
import Lgo from "./courses/Lgo";
import French from "./courses/French";
import Gmat from "./courses/Gmat";
import Pte from "./courses/Pte";

function App() {
  return (
    <>
      <NavbarAndHero />

      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/spoken-english" element={<SpokenEnglish />}></Route>
        <Route exact path="/ielts" element={<Ielts />}></Route>
        <Route exact path="/lifeskills" element={<Lifeskills />}></Route>
        <Route exact path="/duolingo" element={<Duolingo />}></Route>
        <Route exact path="/leo" element={<Leo />}></Route>
        <Route exact path="/gre" element={<Gre />}></Route>
        <Route exact path="/lgo" element={<Lgo />}></Route>
        <Route exact path="/french" element={<French />}></Route>
        <Route exact path="/gmat" element={<Gmat />}></Route>
        <Route exact path="/pte" element={<Pte />}></Route>
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
