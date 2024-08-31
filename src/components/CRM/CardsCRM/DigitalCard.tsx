import React from 'react';
import styles from '../../CRM/CardsCRM/DigitalCard.module.css';
import arrow from "../../../assets/svg/CRM/Dashboard/arrow.svg";
import bacl from "../../../assets/svg/CRM/CardsCRM/Digital_Card_plan.svg"
import rectSt from "../../../assets/svg/CRM/CardsCRM/Rectangle 145.svg"
import St from "../../../assets/svg/CRM/CardsCRM/Vector1.svg"
import card11 from "../../../assets/svg/CRM/CardsCRM/Card_01.svg"
import card12 from "../../../assets/svg/CRM/CardsCRM/Card_02.svg"
import card13 from "../../../assets/svg/CRM/CardsCRM/Card_03.svg"
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
        <img src={card11}></img>
            <img src={card12}></img>
            <img src={card13}></img>
        
    </div>

    </div>
  );
};

export default DigitalCard;
