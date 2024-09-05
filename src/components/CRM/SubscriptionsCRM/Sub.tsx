import React from 'react';
import styles from '../../CRM/SubscriptionsCRM/Sub.module.css';
import CashBackImg from "../../../assets/svg/CRM/CardsCRM/Cashback.svg";



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
  return (
    <div className={styles.Container}>
        <div className={styles.stIMG}>
            <img  src={DepositsIMG}>
            </img>
        </div>
        <div className={styles.Column}>
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
