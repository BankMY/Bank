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
import Services from './pages/Services';
import ForBusiness from './pages/ForBusiness';
import LoansUpdate from './pages/LoansUpdate';
import InsuranceUpdate from './pages/InsuranceUpdate';



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
          <Route path="/services" element={
            <>
              <HeaderFinal active='services'/>
              <Services />
              <Footer />
            </>
          } />
          <Route path="/loans" element={
            <>
              <HeaderFinal active='services'/>
              <LoansUpdate/>
              <Footer />
            </>
          } />
          <Route path="/insurance" element={
            <>
              <HeaderFinal active='services'/>
              <InsuranceUpdate/>
              <Footer />
            </>
          } />

          <Route path="/for-business" element={
            <>
              <HeaderFinal active='for-business'/>
              <ForBusiness />
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