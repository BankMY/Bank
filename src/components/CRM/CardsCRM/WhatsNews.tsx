import React, { useState } from 'react';
import styles from '../../CRM/CardsCRM/WhatsNews.module.css';

import etc from "../../../assets/svg/CRM/CardsCRM/Group 105.svg";
import line1 from "../../../assets/svg/CRM/CardsCRM/Group 104.svg";
import line2 from "../../../assets/svg/CRM/CardsCRM/Group 1044.svg";

import co1 from "../../../assets/svg/CRM/CardsCRM/Component 1.svg";
import co2 from "../../../assets/svg/CRM/CardsCRM/Component 2.svg";
import co3 from "../../../assets/svg/CRM/CardsCRM/Component 3.svg";
import co4 from "../../../assets/svg/CRM/CardsCRM/Component 4.svg";
import { Link } from 'react-router-dom';


const WhatsNews: React.FC = ({
    
}) => {
    const [currentImage, setCurrentImage] = useState(line1);

    const handleMouseEnter = () => {
      setCurrentImage(line2);
    };
  
    const handleMouseLeave = () => {
      setCurrentImage(line1);
    };
  return (
    <div className={styles.WhatsNewsBoard}>
        <div className={styles.styleROW}>
            <div className={styles.styleColumn}>
                <p className={styles.WhatsTXT}>What's new</p>
                <p className={styles.WhatsTXT2}>last updates in banking </p>
            </div>

            <img  className={styles.marginIMG} src={etc}></img>
            <Link to="*" className={styles.btnLine}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
          <img src={currentImage} alt="Line" />
        </Link>
            </div>
           
            <div className={styles.cards_item2}>
                    <img src={co1}></img>
                    <img src={co2}></img>
                    <img src={co3}></img>
                    <img src={co4}></img>                 
                  </div> 
         </div>
        
         

  );
};

export default WhatsNews;
