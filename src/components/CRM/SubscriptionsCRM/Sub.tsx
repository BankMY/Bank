import React, { useState } from 'react';
import styles from '../../CRM/SubscriptionsCRM/Sub.module.css';
import CashBackImg from "../../../assets/svg/CRM/CardsCRM/Cashback.svg";

import line1 from "../../../assets/svg/CRM/CardsCRM/Group 104.svg";
import line2 from "../../../assets/svg/CRM/CardsCRM/Group 1044.svg";

interface SubscriptionsForROWContainerProps {
        DepositsIMG: string;
        DepositsTXT: string;
        DepositsBalance: string;
      }
      
const SubscriptionsForROW: React.FC<SubscriptionsForROWContainerProps> = ({
        DepositsIMG,
        DepositsTXT,
        DepositsBalance
          
}) => {
    const [currentImage, setCurrentImage] = useState(line1);

    const handleMouseEnter = () => {
      setCurrentImage(line2);
    };
  
    const handleMouseLeave = () => {
      setCurrentImage(line1);
    };
  return (
    <div className={styles.Container}>
        <div className={styles.Column}>
        <button className={styles.Btn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
    
          <img src={currentImage} />
        </button>
        <div className={styles.stIMG}>
            <img  src={DepositsIMG}>
            </img>
        </div>
        
            <div className={styles.stTXT}>
            {DepositsTXT}
            </div>
            <div className={styles.stBalance}>
            {DepositsBalance}
            </div>
        </div>
        
    </div>
  );
};

export default SubscriptionsForROW;
