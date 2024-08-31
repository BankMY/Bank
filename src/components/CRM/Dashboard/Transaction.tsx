import React from 'react';
import styles from './Transaction.module.css';

interface TransactionProps {
    imageSrc: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text3Color?: string;
}

const Transaction: React.FC<TransactionProps> = ({ imageSrc, text1, text2, text3, text4, text3Color }) => {
    return (
        <div className={styles.container}>
            <img src={imageSrc} alt="" className={styles.image} />
            <div className={styles.textContainer}>
                <div className={styles.textBlock}>
                    <p className={styles.text1}>{text1}</p>
                    <p className={styles.text2}>{text2}</p>
                </div>
                <div className={styles.textBlock}>
                    <p className={styles.text3} style={{color: text3Color}}>{text3}</p>
                    <p className={styles.text4}>{text4}</p>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
