import React, { useState } from 'react';
import styles from '../../CRM/CardsCRM/DigitalCard.module.css';
import arrow from "../../../assets/svg/CRM/Dashboard/arrow.svg";
import bacl from "../../../assets/svg/CRM/CardsCRM/Digital_Card_plan.svg";
import rectSt from "../../../assets/svg/CRM/CardsCRM/Rectangle 145.svg";
import St from "../../../assets/svg/CRM/CardsCRM/Vector1.svg";
import card11 from "../../../assets/svg/CRM/CardsCRM/Card_01.svg";
import card12 from "../../../assets/svg/CRM/CardsCRM/Card_02.svg";
import card13 from "../../../assets/svg/CRM/CardsCRM/Card_03.svg";

import card1R from "../../../assets/svg/CRM/CardsCRM/Property1.png";
import card2R from "../../../assets/svg/CRM/CardsCRM/Property2.png";
import card3R from "../../../assets/svg/CRM/CardsCRM/Property3.png";

interface DigitalCardContainerProps {
  DigitalCard: string;
  buttonFree: string;
  TextDigital: string;
}

const DigitalCard: React.FC<DigitalCardContainerProps> = ({
    DigitalCard,
    buttonFree,
    TextDigital
    
}) => {
  const [currentImage1, setCurrentImage1] = useState(card11);
  const [currentImage2, setCurrentImage2] = useState(card12);
  const [currentImage3, setCurrentImage3] = useState(card13);

  const toggleImage1 = () => {
    setCurrentImage1(prevImage => (prevImage === card11 ? card3R : card11));
  };

  const toggleImage2 = () => {
    setCurrentImage2(prevImage => (prevImage === card12 ? card2R : card12));
  };

  const toggleImage3 = () => {
    setCurrentImage3(prevImage => (prevImage === card13 ? card1R : card13));
  };
  return (
    <div className={styles.DigitalCardContainer}
    style={{ backgroundImage: `url(${bacl})` }}
    >   
    <div className={styles.styleROW}>
        <div className={styles.styleColumn}>
            <div className={styles.DigitalText}>
            {DigitalCard}
            <button className={styles.btnFree} >
                {buttonFree}
            </button>
            </div>
            
            <div className={styles.descText}>
            {TextDigital}
            </div>
        </div>
        <div className={styles.rectStar}>
            <img className={styles.absRect1} src={rectSt}>
                
            </img>
            <img className={styles.absRect2} src={St}></img>
            
        </div>
          <div>
            <img className={styles.rasmerImg} src={currentImage1} />
              <button className={styles.btn1Card} onClick={toggleImage1}>
             </button>
            </div>
         
           
            <div>
              <img className={styles.rasmerImg} src={currentImage2}></img>
              <button className={styles.btn1Card} onClick={toggleImage2}></button>
            </div>
            <div>
              <img className={styles.rasmerImg} src={currentImage3}></img>
              <button className={styles.btn1Card} onClick={toggleImage3}></button>
            </div>
            
    </div>

    </div>
  );
};

export default DigitalCard;
