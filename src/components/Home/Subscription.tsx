import { FunctionComponent } from "react";
import styles  from "./Subscription.module.css";

export interface SubscriptionProps{
    arrow?: string;
    star1?: string;
    star2?: string;
    desc?: string;
    price?: string;
    quality?: string;
};

const Subscription: FunctionComponent<SubscriptionProps> = (
    {arrow, star1, star2, desc, price, quality}) => {
    return (
        <div className={styles.progressTrackingPlanList}>
        <div className={styles.progressTrackingPlanListChild} />
        <img
          className={styles.progressTrackingPlanIcons}
          alt=""
          src={arrow}
        />
        <div className={styles.progressTrackingPlanDetails}>
          <div className={styles.progressTrackingPlanFeature}>
            <div className={styles.progressTrackingPlanFeature1}>
              <img
                className={styles.progressTrackingPlanFeature2}
                loading="lazy"
                alt=""
                src={star1}
              />
              <div className={styles.standart}>{quality}</div>
            </div>
          </div>
          <div className={styles.progressTrackingPlanPrices}>
            <div className={styles.free}>{price}</div>
            <img
              className={styles.progressTrackingPlanPriceS}
              loading="lazy"
              alt=""
              src={star2}
            />
          </div>
          <div className={styles.progressTrackingPlanDescrip}>
            <div className={styles.theStandardPlan}>{desc}
              {/* The Standard Plan offers essential banking services with no
              monthly fees. Enjoy free online transfers, basic customer support,
              and access to a wide network of ATMs. Ideal for everyday banking
              needs. */}
            </div>
          </div>
        </div>
      </div>
    )
};




export default Subscription;