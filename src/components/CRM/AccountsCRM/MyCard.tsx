import React from 'react';
import styles from '../../CRM/AccountsCRM/MyCard.module.css';
import Recent from "../../../assets/svg/CRM/Accounts/My_card.svg";



const MyCard: React.FC = ({
      
          
}) => {
  return (
    <div className={styles.Rec}>
        <img src={Recent}></img>
    </div>
  );
};

export default MyCard;
