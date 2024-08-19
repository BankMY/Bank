import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
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
import Deposits from './pages/Deposits';
import Investments from './pages/Investments';

function PageWithTitle({ title, children }: { title: string, children: React.ReactNode }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <PageWithTitle title="Veridion">
          <HeaderFinal/>
          <Homepage />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/Cards" element={
        <PageWithTitle title="Cards">
          <HeaderFinal active='cards'/>
          <Cards />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/faq" element={
        <PageWithTitle title="FAQ">
          <HeaderFinal/>
          <FAQ />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/privacy" element={
        <PageWithTitle title="Privacy Policy">
          <HeaderFinal/>
          <PrivacyPolicy />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/about-us" element={
        <PageWithTitle title="About Us">
          <HeaderFinal active='about-us'/>
          <AboutUs />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/services" element={
        <PageWithTitle title="Services">
          <HeaderFinal active='services'/>
          <Services />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/loans" element={
        <PageWithTitle title="Loans">
          <HeaderFinal active='services'/>
          <LoansUpdate />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/Deposits" element={
        <PageWithTitle title="Deposits">
          <HeaderFinal active='services'/>
          <Deposits />
          <Footer />
        </PageWithTitle>
      } />
       <Route path="/Investments" element={
        <PageWithTitle title="Investments">
          <HeaderFinal active='services'/>
          <Investments />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/for-business" element={
        <PageWithTitle title="For Business">
          <HeaderFinal active='for-business'/>
          <ForBusiness />
          <Footer />
        </PageWithTitle>
      } />
      <Route path="/sign-in" element={
        <PageWithTitle title="Sign-in">
          <SignIn />
        </PageWithTitle>
      } />
      <Route path="/sign-up" element={
        <PageWithTitle title="Sign-up">
          <SignUp />
        </PageWithTitle>
      } />
      <Route path="*" element={
        <PageWithTitle title="4o4 Monkey">
          <Homepage />
        </PageWithTitle>
      } />
    </Routes>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}