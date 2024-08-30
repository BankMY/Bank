import React from 'react';
import styles from './DollarContainer.module.css';
import arrow from "../../../assets/svg/CRM/Dashboard/arrow.svg";

interface DollarContainerProps {
  dollarImage: string;
  value: string;
  spanValue: string;
  percentage: string;
}

const DollarContainer: React.FC<DollarContainerProps> = ({
  dollarImage,
  value,
  spanValue,
  percentage,
}) => {
  return (
    <div className={styles.dollarContainer}>
      <div className={styles.dollarWrapper}>
        <img src={dollarImage} alt="Dollar" />
        <div className={styles.moneyDollar_item1}>
          {value}
          <span className={styles.moneyDollar_item1_span}>{spanValue}</span>
        </div>
      </div>
      <div>
        <img className={styles.arrow_item1} src={arrow} alt="Arrow" />
        <span className={styles.arrow_item1_span}>{percentage}</span>
      </div>  
    </div>
  );
};

export default DollarContainer;
