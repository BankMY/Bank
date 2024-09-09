import React from 'react';
import styles from '../../CRM/AccountsCRM/DepositsForROW.module.css';
import CashBackImg from "../../../assets/svg/CRM/CardsCRM/Cashback.svg";



interface DepositsForROWContainerProps {
        DepositsIMG: string;
        DepositsTXT: string;
        DepositsBalance: string;
      }
      
const DepositsForROW: React.FC<DepositsForROWContainerProps> = ({
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

export default DepositsForROW;
