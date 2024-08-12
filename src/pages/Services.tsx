import { FunctionComponent } from "react";
import FrameComponent8 from "../components/Services/FrameComponent8";
import Hero from "../components/Services/Hero";
import styles from "./Services.module.css";

import gold_bars from "../assets/svg/Services/gold-bars.svg";
import deposits from "../assets/svg/Services/deposits.svg";
import investments from "../assets/svg/Services/investments.svg";
import Insurance from "../assets/svg/Services/Group6982.svg";


const Services: FunctionComponent = () => {
  return (
    <div className={styles.services}>
      
      <main>
      <FrameComponent8 userhref="/sign-in"/>
      <Hero
        deposits="Loans"
        secureYourFundsAndWatchTh="Veridion Bank offers a variety of loan products to help you finance your dreams and manage your expenses. Our competitive rates and flexible terms make borrowing simple and stress-free."
        goldBars={gold_bars}
        userhref="/loans"
      />
      <Hero
        deposits="Deposits"
        secureYourFundsAndWatchTh="Secure your funds and watch them grow with Veridion Bank’s range of deposit accounts. We provide safe and convenient options for managing your money effectively."
        goldBars={deposits}
        userhref="/deposits"
      />
      <Hero
        deposits="Investments"
        secureYourFundsAndWatchTh="Grow your wealth and secure your future with Veridion Bank’s comprehensive investment services. Our expert advisors provide personalized guidance to help you make informed investment decisions."
        goldBars={investments}
        userhref="/investments"
      />
      <Hero
        deposits="Insurance"
        secureYourFundsAndWatchTh="Protect what matters most with 
        Veridion Bank’s comprehensive insurance products. 
        We partner with leading insurers to offer you reliable 
        coverage and peace of mind."
        goldBars={Insurance}
        userhref="/insurance"
      />
      </main>
      
    </div>
  );
};

export default Services;
