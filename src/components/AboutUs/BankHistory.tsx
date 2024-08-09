import { FunctionComponent } from "react";
import styles from "./BankHistory.module.css";

import star8 from "../../assets/svg/AboutUs/star-8.svg";
import star_four from "../../assets/svg/AboutUs/star-four.svg";
import star61 from "../../assets/svg/AboutUs/star-61.svg";
import star71 from "../../assets/svg/AboutUs/star-71.svg";
import star91 from "../../assets/svg/AboutUs/star-91.svg";
import star111 from "../../assets/svg/AboutUs/star-111.svg";
import ellipse89 from "../../assets/svg/AboutUs/ellipse-89.svg";

import history1 from "../../assets/svg/AboutUs/history1.svg";


const BankHistory: FunctionComponent = () => {
  return (
    <div className={styles.bankHistory}>
      <div className={styles.historyContentParent}>
        <div className={styles.historyContent}>
          <div className={styles.historyBlock}>
            <h1 className={styles.bankHistory1}>
              <span>{`Bank `}</span>
              <span className={styles.history}>History</span>
            </h1>
            <div className={styles.ratingContainer}>
              <div className={styles.ratingStars}>
                <img
                  className={styles.starOneIcon}
                  loading="lazy"
                  alt=""
                  src={star8}
                />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src={ellipse89}
                  />
                  <img
                    className={styles.starTwoIcon}
                    loading="lazy"
                    alt=""
                    src={star71}
                  />
                  <img
                    className={styles.starThreeIcon}
                    loading="lazy"
                    alt=""
                    src={star91}
                  />
                  <img
                    className={styles.starFourIcon}
                    alt=""
                    src={star_four}
                  />
                  <img
                    className={styles.starFiveIcon}
                    loading="lazy"
                    alt=""
                    src={star111}
                  />
                </div>
                <img
                  className={styles.starSixIcon}
                  loading="lazy"
                  alt=""
                  src={star61}
                />
              </div>
              <div className={styles.veridionBankHas}>
                Veridion Bank has been a trusted financial partner since its
                founding in 2022. Although relatively new, we have quickly grown
                into a leading financial institution with a presence across
                multiple regions. Our journey is marked by a commitment to
                innovation, customer-centric services, and a dedication to
                fostering economic growth within the communities we serve. From
                the beginning, we have embraced technological advancements and
                expanded our product offerings to provide comprehensive
                financial solutions tailored to the evolving needs of our
                clients.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.history1}>
          <img src={history1}  />
        </div>
      </div>
    </div>
  );
};

export default BankHistory;
