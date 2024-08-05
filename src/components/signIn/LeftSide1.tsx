import { FunctionComponent } from "react";
import styles from "./LeftSide1.module.css";
import logo1 from "../../assets/svg/auth/logo1.svg";
import ellipse_781 from "../../assets/svg/auth/ellipse-781.svg";
import image3 from "../../assets/png/auth/image-3@2x.png";

import result1 from "../../assets/png/auth/result-10@2x.png";
import result2 from "../../assets/png/auth/result-12@2x.png";
import result3 from "../../assets/png/auth/result-13@2x.png";

export interface LeftSide1Type {
  className?: string;
};

const LeftSide1: FunctionComponent<LeftSide1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftSide, className].join(" ")}>
      <div className={styles.result11} />
      <img className={styles.image3Icon} alt="" src={image3} />
      <div className={styles.leftContent}>
        <div className={styles.leftGraphic} />
        <div className={styles.logoContainer}>
          <img className={styles.logoIcon} alt="" src={logo1} />
        </div>
        <div className={styles.leftContentInner}>
          <div className={styles.welcomeBackParent}>
            <h1 className={styles.welcomeBack}>Welcome back!</h1>
            <div className={styles.journeyDescription}>
              <div className={styles.wrapperEllipse78}>
                <img
                  className={styles.wrapperEllipse78Child}
                  alt=""
                  src={ellipse_781}
                />
              </div>
              <div className={styles.wereExcitedToContainer}>
                <p
                  className={styles.wereExcitedTo}
                >{`We're excited to support your financial journey with our wide range of services. `}</p>
                <p className={styles.thankYouFor}>Thank you for choosing us!</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftContentChild}>
          <div className={styles.youDontHaveAnAccountParent}>
            <div className={styles.youDontHave}>You don`t have an account?</div>
            <div className={styles.component13}>
              <a href='/sign-up' className={styles.signUp}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.result12Parent}>
        <img className={styles.result12Icon} alt="" src={result2} />
        <img className={styles.result9Icon} alt="" src={result3} />
        <img className={styles.result10Icon} alt="" src={result1} />
      </div>
    </div>
  );
};

export default LeftSide1;
