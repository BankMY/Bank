import React from 'react';
import styles from '../../CRM/AccountsCRM/Debit.module.css';
import DebitIMG from "../../../assets/svg/CRM/Accounts/Debit&Credit_overview.svg";



const Debit: React.FC = ({
      
          
}) => {
  return (
    <div className={styles.Rec}>
        <img src={DebitIMG}></img>
    </div>
  );
};

export default Debit;
