import { FunctionComponent } from "react";
import styles from "./CardRow.module.css";

export interface CardRowType {
  className?: string;
};

const CardRow: FunctionComponent<CardRowType> = ({ className = "" }) => {
  return (
    <div className={[styles.cardRow, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/line-28.svg"
                />
                <h1 className={styles.enhancedSecurityFeaturesContainer}>
                  <span>Enhanced</span>
                  <span className={styles.securityFeatures}>
                    {" "}
                    Security Features
                  </span>
                </h1>
              </div>
              <img
                className={styles.accordionHeaderIcon}
                loading="lazy"
                alt=""
                src="/star-9.svg"
              />
            </div>
          </div>
          <div className={styles.protectYourBusiness}>
            Protect your business with our advanced security features. Our cards
            are equipped with state-of-the-art encryption and fraud detection
            technologies to ensure your transactions are safe and secure. Focus
            on your business goals with peace of mind, knowing your finances are
            well-guarded.
          </div>
        </div>
        <div className={styles.component3Wrapper}>
          <button className={styles.component3}>
            <b className={styles.pickAPlan}>Join now</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRow;
