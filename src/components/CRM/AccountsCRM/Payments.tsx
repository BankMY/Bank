import React from 'react';
import styles from '../../CRM/AccountsCRM/Payments.module.css';
import PaymentsIMG from "../../../assets/svg/CRM/Accounts/Payments_send.svg";



const Payments: React.FC = ({
      
          
}) => {
  return (
    <div className={styles.Rec}>
        <img src={PaymentsIMG}></img>
    </div>
  );
};

export default Payments;
