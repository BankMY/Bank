import { FunctionComponent } from "react";
import styles from "./CardRow1.module.css";

export interface CardRow1Type {
  className?: string;
};

const CardRow1: FunctionComponent<CardRow1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cardRow, className].join(" ")}>
      <div className={styles.cardPair}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <div className={styles.cardFeature}>
              <img
                className={styles.securityFeatureIcon}
                loading="lazy"
                alt=""
                src="/star-6.svg"
              />
              <div className={styles.solutionDescription}>
                <div className={styles.versatileCardSolutionsWrapper}>
                  <h1 className={styles.versatileCardSolutionsContainer}>
                    <span>Versatile</span>
                    <span className={styles.cardSolutions}>
                      {" "}
                      Card Solutions
                    </span>
                  </h1>
                </div>
                <img
                  className={styles.solutionDescriptionChild}
                  loading="lazy"
                  alt=""
                  src="/line-24.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.financialPossibilities}>
            <div className={styles.unlockAWorld}>
              Unlock a world of financial possibilities with our versatile card
              solutions tailored to meet your business needs. Whether you need a
              card for everyday transactions or managing large-scale projects,
              our options are designed to provide convenience, security, and
              control.
            </div>
            <img
              className={styles.financialStarIcon}
              loading="lazy"
              alt=""
              src="/star-7.svg"
            />
          </div>
        </div>
        <div className={styles.planPickers}>
          <button className={styles.component2}>
            <b className={styles.pickAPlan}>Pick a plan</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRow1;
