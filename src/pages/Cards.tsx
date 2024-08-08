// Cards.tsx
import { FunctionComponent } from 'react';
import FrameComponent7 from '../components/Cards/FrameComponent7';
import CardRow1 from '../components/Cards/CardRow1';
import FrameComponent6 from '../components/Cards/FrameComponent6';
import CardRow from '../components/Cards/CardRow';
import FrameComponent5 from '../components/Cards/FrameComponent5';
import FrameComponent4 from '../components/Cards/FrameComponent4';
import ImageComponent from '../components/ImageComponent';
import versatileCardSolutions from '../assets/svg/Cards/versatile-card-solutions.svg';
import starIcon from '../assets/svg/Cards/star-12.svg';
import enhancedSecurityFeatures from '../assets/svg/Cards/enhanced-security-features.svg';
import exclusiveBusinessRewards from '../assets/svg/Cards/exclusive-business-rewards.svg';
import styles from './Cards.module.css';

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
                <ImageComponent
                  className={styles.versatileCardSolutionsIcon}
                  alt="Versatile Card Solutions"
                  src={versatileCardSolutions}
                />
              </div>
            </div>
            <FrameComponent6 />
            <CardRow />
          </div>
        </section>
        <FrameComponent5 />
        <section className={styles.accordionParent}>
          <ImageComponent
            className={styles.accordionIcon}
            alt="Accordion Icon"
            src={starIcon}
          />
          <ImageComponent
            className={styles.enhancedSecurityFeaturesIcon}
            alt="Enhanced Security Features"
            src={enhancedSecurityFeatures}
          />
        </section>
        <section className={styles.starSecurityParent}>
          <ImageComponent
            className={styles.starSecurityIcon}
            alt="Star Security Icon"
            src={starIcon}
          />
          <ImageComponent
            className={styles.exclusiveBusinessRewardsIcon}
            alt="Exclusive Business Rewards"
            src={exclusiveBusinessRewards}
          />
        </section>
        <FrameComponent4 />
      </main>
    </div>
  );
};

export default Cards;
