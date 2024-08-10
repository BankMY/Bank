import { useState } from "react";
import styles from "./Droplist.module.css";

import vector24 from "../../assets/svg/FAQ/vector-24-stroke.svg";

export interface Droplistbase {
  question?: string;
  answer?: string;
}

const Droplist: React.FC<Droplistbase> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.frameGroup}>
      <div className={styles.whatIsVeridionParent} onClick={toggleAccordion}>
        <div className={styles.whatIsVeridion}>{question}</div>
        <img 
          className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`} 
          loading="lazy" 
          alt="" 
          src={vector24} 
        />
      </div>
      <div className={`${styles.veridionIsA} ${isOpen ? styles.visible : ""}`}>
        {answer}
      </div>
    </div>
  );
};

export default Droplist;
