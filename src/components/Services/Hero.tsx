import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

export interface HeroType {
  deposits?: string;
  secureYourFundsAndWatchTh?: string;
  goldBars?: string;
  userhref?: string;
};

const Hero: FunctionComponent<HeroType> = ({
  deposits,
  secureYourFundsAndWatchTh,
  goldBars,
  userhref = "/"
}) => {

  return (
    <section className={styles.hero} >
      <div className={styles.depositsInvestmentsParent}>
        <div className={styles.depositsInvestments}>
          <h1 className={styles.deposits}>{deposits}</h1>
        </div>
        <div className={styles.insuranceCallToAction}>
          <div className={styles.secureYourFunds}>
            {secureYourFundsAndWatchTh}
          </div>
          <div className={styles.components}>
          <Link to={userhref} className={styles.component3}>
            <b className={styles.pickAPlan}>Learn more</b>
          </Link>
        </div>
          <img
            className={styles.depositsIcon}
            loading="lazy"
            alt=""
            src={goldBars}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
