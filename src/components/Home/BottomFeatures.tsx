import { FunctionComponent } from "react";
import styles from "./BottomFeatures.module.css";
import star_5 from "../../assets/svg/Home/star-5.svg";
import star_10_1 from "../../assets/svg/Home/star-10-1.svg";
import image2 from "../../assets/png/Home/image-2@2x.png";
import group_68 from "../../assets/png/Home/group-6856@2x.png";
import phone from "../../assets/png/Home/phone-illustration@2x.png";

const BottomFeatures: FunctionComponent = () => {
  return (
    <div className={styles.bottomFeatures}>
      <div className={styles.mobileFeature}>
        <div className={styles.financeApp}>
          <div className={styles.manageFinance}>
            <div className={styles.appDescription}>
              <div className={styles.appName}>
                <img
                  className={styles.appNameChild}
                  loading="lazy"
                  alt=""
                  src={star_5}
                />
                <h1 className={styles.menageYourFinanceContainer}>
                  <p className={styles.menageYour}>
                    <b>{`Menage your `}</b>
                  </p>
                  <p className={styles.financeWithFriendly}>
                    <i className={styles.finance}>finance</i>
                    <b>{` with friendly `}</b>
                  </p>
                  <p className={styles.mobileApp}>
                    <b>mobile app</b>
                  </p>
                </h1>
              </div>
              <img
                className={styles.appDescriptionChild}
                loading="lazy"
                alt=""
                src={star_10_1}
              />
            </div>
            <div className={styles.bankingMadeSimple}>
              Banking made simple with our secure, user-friendly mobile app
              manage your finances effortlessly on the go! Download now and take
              control of your finances with ease!
            </div>
          </div>
          <div className={styles.phoneImage}>
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src={image2}
            />
            <img
              className={styles.phoneImageChild}
              loading="lazy"
              alt=""
              src={group_68}
            />
          </div>
        </div>
      </div>
      <img
        className={styles.phoneIllustrationIcon}
        loading="lazy"
        alt=""
        src={phone}
      />
    </div>
  );
};

export default BottomFeatures;
