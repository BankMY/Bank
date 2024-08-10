import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

import line33 from "../../assets/svg/Services/line-33.svg";
import hand from "../../assets/svg/Services/heand-with-logo.svg";
import { Link } from "react-router-dom";

export interface myprops{
  userhref?: string,
}

const FrameComponent8: FunctionComponent<myprops> = ({userhref = "/"}) => {
  return (
    <section className={styles.layoutWrapper}>
      <div className={styles.layout}>
        <div className={styles.layout1}>
          <div className={styles.hero}>
            <h1 className={styles.welcomeToVeridionContainer}>
              <p className={styles.welcomeTo}>Welcome to</p>
              <p className={styles.veridionServices}>Veridion Services</p>
            </h1>
            <img
              className={styles.heroChild}
              loading="lazy"
              alt=""
              src={line33}
            />
          </div>
          <div className={styles.atVeridionBank}>
            At Veridion Bank, we are dedicated to providing comprehensive
            financial solutions tailored to your needs. Whether you're looking
            for loans, deposits, investments, or insurance, our wide range of
            services is designed to help you achieve your financial goals with
            confidence and ease.
          </div>
          <Link to={userhref} className={styles.component1}>
            <b className={styles.pickAPlan}>Try Veridion now</b>
          </Link>
        </div>
        <img
          className={styles.heandWithLogoIcon}
          loading="lazy"
          alt=""
          src={hand}
        />
      </div>
    </section>
  );
};

export default FrameComponent8;
