import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './global.css';

import HeaderFinal from './components/Header/HeaderFinal';
import Footer from './components/Footer/Footer';

import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cards from './pages/Cards';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
              <HeaderFinal/>
              <Homepage />
              <Footer />
            </>
          } />
          <Route path="/Cards" element={
            <>
              <HeaderFinal active='cards'/>
              <Cards />
              <Footer />
            </>
          } />
          <Route path="/faq" element={
            <>
              <HeaderFinal/>
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <HeaderFinal/>
              <PrivacyPolicy />
              <Footer />
            </>
          } />
          <Route path="/about-us" element={
            <>
              <HeaderFinal active='about-us'/>
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>

          <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}



export default App;