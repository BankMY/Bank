import React from 'react';
import styles from '../../CRM/AccountsCRM/RecentTransaction.module.css';
import Recent from "../../../assets/svg/CRM/Accounts/Recent_transactions.svg";



const RecentTransaction: React.FC = ({
      
          
}) => {
  return (
    <div className={styles.Rec}>
        <img src={Recent}></img>
    </div>
  );
};

export default RecentTransaction;
