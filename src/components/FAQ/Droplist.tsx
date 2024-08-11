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
        {/* <img 
          className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`} 
          loading="lazy" 
          alt="" 
          src={vector24} 
        /> */}
        <Vector24My color={`${isOpen ? "#afe638" : "#5E1EE5"}`}
        className={`${styles.arrow} ${isOpen ? styles.rotated : ""}`}/>
      </div>
      <div className={`${styles.veridionIsA} ${isOpen ? styles.visible : ""}`}>
        {answer}
      </div>
    </div>
  );
};


interface vector24MyProps {
  className?: string;
  color?: string;
}

const Vector24My: React.FC<vector24MyProps> = ({ color = "", className }) => {
  return (
    <svg className={[className].join(" ")}
    width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.422098 0.456869C0.998204 -0.13844 1.94782 -0.154008 2.54313 0.422098L17 14.4126L31.4569 0.422098C32.0522 -0.154008 33.0018 -0.13844 33.5779 0.456869C34.154 1.05218 34.1384 2.0018 33.5431 2.5779L18.0431 17.5779C17.4616 18.1407 16.5384 18.1407 15.9569 17.5779L0.456869 2.5779C-0.13844 2.0018 -0.154008 1.05218 0.422098 0.456869Z" 
      fill={color}/>
    </svg>
  );
};


export default Droplist;
