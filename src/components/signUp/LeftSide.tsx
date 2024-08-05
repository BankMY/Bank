import { FunctionComponent } from "react";
import styles from "./LeftSide.module.css";
import logo1 from "../../assets/svg/auth/logo1.svg";
import ellipse_78 from "../../assets/svg/auth/ellipse-78.svg";
import result1 from "../../assets/png/auth/result-10@2x.png";
import result2 from "../../assets/png/auth/result-12@2x.png";
import result3 from "../../assets/png/auth/result-13@2x.png";


export interface LeftSideType {
  className?: string;
};

const LeftSide: FunctionComponent<LeftSideType> = ({ className = "" }) => {
  return (
    <div className={[styles.leftSide, className].join(" ")}>
      <div className={styles.result11} />
      <div className={styles.result9} />
      <div className={styles.welcomeBackgroundParent}>
        <div className={styles.welcomeBackground} />
        <div className={styles.bg7e4d046180434e539e485af} />
        <img className={styles.logoIcon} alt="" src={logo1} />
        <div className={styles.welcomeMessage}>
          <div className={styles.veridionTitle}>
            <div className={styles.wrapperEllipse78}>
              <img
                className={styles.wrapperEllipse78Child}
                alt=""
                src={ellipse_78}
              />
            </div>
            <h1 className={styles.welcomeToVeridion}>Welcome to Veridion!</h1>
          </div>
          <div className={styles.yourFinancialAdventureContainer}>
            <p
              className={styles.yourFinancialAdventure}
            >{`Your financial adventure begins here. `}</p>
            <p className={styles.letsBuildA}>
              Let's build a brighter future together!
            </p>
          </div>
        </div>
        <div className={styles.existingAccount}>
          <div className={styles.accountLink}>
            <div className={styles.alredyHaveAn}>Alredy have an account?</div>
            <div className={styles.component13}>
              <a href='/sign-up' className={styles.signUp}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.resultPlaceholders}>
        <img className={styles.result13Icon} alt="" src={result3} />
        <img className={styles.result12Icon} alt="" src={result2} />
        <img className={styles.result10Icon} alt="" src={result1} />
      </div>
    </div>
  );
};

export default LeftSide;
