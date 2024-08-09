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
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>

          <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}



export default App;