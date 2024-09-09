import React, { useState } from 'react';
import styles from '../../CRM/CardsCRM/WhatsNews2.module.css';


import co1 from "../../../assets/svg/CRM/CardsCRM/Component 5.svg";
import co2 from "../../../assets/svg/CRM/CardsCRM/Group 132.svg";
import co3 from "../../../assets/svg/CRM/CardsCRM/Property 1.svg";

import co11 from "../../../assets/svg/CRM/CardsCRM/PropertyBox.svg";
import co22 from "../../../assets/svg/CRM/CardsCRM/PropertyKey.svg";
import co33 from "../../../assets/svg/CRM/CardsCRM/PropertyBank.svg";

import { Link } from 'react-router-dom';


const WhatsNews2: React.FC = ({
    
}) => {
  const [currentImage1, setCurrentImage1] = useState(co1);
  const [currentImage2, setCurrentImage2] = useState(co2);
  const [currentImage3, setCurrentImage3] = useState(co3);

  const handleMouseEnter1 = () => {
    setCurrentImage1(co11);
  };

  const handleMouseLeave1 = () => {
    setCurrentImage1(co1);
  };

  const handleMouseEnter2 = () => {
    setCurrentImage2(co22);
  };

  const handleMouseLeave2 = () => {
    setCurrentImage2(co2);
  };

  const handleMouseEnter3 = () => {
    setCurrentImage3(co33);
  };

  const handleMouseLeave3 = () => {
    setCurrentImage3(co3);
  };

  return (
    
        <div className={styles.board}>
          <div className={styles.ROW}>
            <img
             onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}  
              src={currentImage1}>
              
            </img>
            <img  onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}  
              src={currentImage2}>
              
            </img>
            <img  onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}  
              src={currentImage3}>
            
            </img>
          </div>

        </div>    

  );
};

export default WhatsNews2;
