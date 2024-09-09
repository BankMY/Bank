import React from 'react';
import styles from '../../CRM/CardsCRM/CardsGirl.module.css';
import Order from "../../../assets/svg/CRM/CardsCRM/Card_physical_order.svg";


const CardsGirl: React.FC = ({
   
    
}) => {
  return (
    <div className={styles.positionGirl}>
        <img src={Order}></img>
    </div>
  );
};

export default CardsGirl;
