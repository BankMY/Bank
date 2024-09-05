import React from 'react';
import styles from '../../CRM/CardsCRM/CashBack.module.css';
import CashBackImg from "../../../assets/svg/CRM/CardsCRM/Cashback.svg";


const CashBack: React.FC = ({
   
    
}) => {
  return (
    <div className={styles.margins}>
        <img src={CashBackImg}></img>
    </div>
  );
};

export default CashBack;
