import { FunctionComponent } from "react";
import FrameComponent7 from "../components/Cards/FrameComponent7";
import CardRow1 from "../components/Cards/CardRow1";
import FrameComponent6 from "../components/Cards/FrameComponent6";
import CardRow from "../components/Cards/CardRow";
import FrameComponent5 from "../components/Cards/FrameComponent5";
import FrameComponent4 from "../components/Cards/FrameComponent4";
import styles from "./Cards.module.css";

const Cards: FunctionComponent = () => {
  return (
    <div className={styles.cards}>
      <main>
      <section className={styles.solutionCardsWrapper}>
        <div className={styles.solutionCards}>
          <FrameComponent7 />
          <CardRow1 />
          <div className={styles.solutionContainer}>
            <div className={styles.wrapperVersatileCardSolutio}>
              <img
                className={styles.versatileCardSolutionsIcon}
                loading="lazy"
                alt=""
                src="/versatile-card-solutions.svg"
              />
            </div>
          </div>
          <FrameComponent6 />
          <CardRow />
        </div>
      </section>
      <FrameComponent5 />
      <section className={styles.accordionParent}>
        <img
          className={styles.accordionIcon}
          loading="lazy"
          alt=""
          src="/star-12.svg"
        />
        <img
          className={styles.enhancedSecurityFeaturesIcon}
          alt=""
          src="/enhanced-security-features.svg"
        />
      </section>
      <section className={styles.starSecurityParent}>
        <img
          className={styles.starSecurityIcon}
          loading="lazy"
          alt=""
          src="/star-12.svg"
        />
        <img
          className={styles.exclusiveBusinessRewardsIcon}
          alt=""
          src="/exclusive-business-rewards.svg"
        />
      </section>
      <FrameComponent4 />
      </main>
    </div>
  );
};

export default Cards;
