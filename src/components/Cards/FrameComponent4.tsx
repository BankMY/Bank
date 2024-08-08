import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

import ImageComponent from '../ImageComponent';

import star10 from '../../assets/svg/Cards/star-10.svg';
import star11 from '../../assets/svg/Cards/star-11.svg';
import vector1 from '../../assets/svg/Cards/vector-1.svg';

import star101 from '../../assets/svg/Cards/star-10-1.svg';
import vector3 from '../../assets/svg/Cards/vector-3.svg';
import star111 from '../../assets/svg/Cards/star-111.svg';
import star102 from '../../assets/svg/Cards/star-10-2.svg';

import star112 from '../../assets/svg/Cards/star-11-2.svg';
import vector4 from '../../assets/svg/Cards/vector-4.svg';
import star103 from '../../assets/svg/Cards/star-10-3.svg';
import star113 from '../../assets/svg/Cards/star-11-3.svg';
import vector5 from '../../assets/svg/Cards/vector-5.svg';

import star104 from '../../assets/svg/Cards/star-10-4.svg';
import star114 from '../../assets/svg/Cards/star-11-4.svg';

export interface FrameComponent4Type {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.progressContentWrapper, className].join(" ")}>
      <div className={styles.progressContent}>
        <div className={styles.progressTitle}>
          <h1 className={styles.moreEffectiveWayContainer}>
            <p className={styles.moreEffectiveWay}>
              <span className={styles.more}>{`More `}</span>
              <span className={styles.effective}>effective</span>
              <span>{` way `}</span>
            </p>
            <p className={styles.toTrackProgress}>to track progress</p>
          </h1>
        </div>
        <div className={styles.planComparison}>
          <div className={styles.olulisedLingid}>
            <div className={styles.olulisedLingidChild} />
            <ImageComponent className={styles.linkIcon} alt="" src={vector1} />
            <div className={styles.tierDetails}>
              <div className={styles.tierFeatures}>
                <div className={styles.tierHighlights}>
                  <ImageComponent className={styles.linkIcon1} alt="" src={star10} />
                  <h1 className={styles.standart}>Standart</h1>
                </div>
              </div>
              <div className={styles.freeTier}>
                <div className={styles.free}>Free</div>
                <ImageComponent
                  className={styles.additionalContactIcon}
                  alt=""
                  src={star11}
                />
              </div>
              <div className={styles.standardDescription}>
                <div className={styles.theStandardPlan}>
                  The Standard Plan offers essential banking services with no
                  monthly fees. Enjoy free online transfers, basic customer
                  support, and access to a wide network of ATMs. Ideal for
                  everyday banking needs.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.alternativeContactEmail}>
            <div className={styles.alternativeContactEmailChild} />
            <ImageComponent
              className={styles.contactPersonIcon}
              alt=""
              src={vector1}
            />
            <ImageComponent
              className={styles.alternativeContactEmailItem}
              alt=""
              src={star111}
            />
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.alternativeContactAddressParent}>
                  <ImageComponent
                    className={styles.alternativeContactAddress}
                    alt=""
                    src={star101}
                  />
                  <h1 className={styles.standart1}>Plus</h1>
                </div>
              </div>
              <div className={styles.freeParent}>
                <div className={styles.free1}>$4,99/month</div>
                <ImageComponent className={styles.frameChild} alt="" src={star111} />
              </div>
              <div className={styles.theStandardPlanOffersEssenWrapper}>
                <div className={styles.theStandardPlan1}>
                  The Plus Plan includes all Standard features with added
                  benefits such as higher transaction limits, priority customer
                  support. Perfect for those seeking enhanced banking
                  convenience.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infoinfoee}>
            <div className={styles.infoinfoeeChild} />
            <ImageComponent className={styles.buttonIcon} alt="" src={vector3} />
            <ImageComponent className={styles.infoinfoeeItem} alt="" src={star111} />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.starParent}>
                  <ImageComponent
                    className={styles.frameItem}
                    alt=""
                    src={star102}
                  />
                  <h1 className={styles.standart2}>{`Premium `}</h1>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.freeGroup}>
                  <div className={styles.free2}>$8,99/month</div>
                  <ImageComponent
                    className={styles.accordionWithContent}
                    alt=""
                    src={star112}
                  />
                </div>
              </div>
              <div className={styles.theStandardPlan2}>
                The Premium Plan provides all Plus features along with exclusive
                perks like lower foreign transaction fees, travel insurance, and
                cashback rewards on purchases. Tailored for frequent travelers
                and high spenders.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.planComparison1}>
          <div className={styles.maaamet}>
            <div className={styles.maaametChild} />
            <ImageComponent
              className={styles.aadressiandmeteSsteemiEesm}
              alt=""
              src={vector4}
            />
            <div className={styles.planName}>
              <div className={styles.planTitle}>
                <ImageComponent
                  className={styles.planTitleChild}
                  alt=""
                  src={star103}
                />
                <h1 className={styles.ironPlan}>Iron Plan</h1>
              </div>
              <div className={styles.planBenefits}>
                <div className={styles.benefitDetail}>
                  <div className={styles.month}>$15,99/month</div>
                  <ImageComponent
                    className={styles.privaatneIcon}
                    alt=""
                    src={star113}
                  />
                </div>
              </div>
              <div className={styles.planDescription}>
                <div className={styles.theStandardPlan3}>
                  The Standard Plan offers essential banking services with no
                  monthly fees. Enjoy free online transfers, basic customer
                  support, and access to a wide network of ATMs. Ideal for
                  everyday banking needs.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tagsChild} />
            <ImageComponent className={styles.tagsIcon} alt="" src={vector5} />
            <div className={styles.frameParent1}>
              <div className={styles.starGroup}>
                <ImageComponent
                  className={styles.frameInner}
                  alt=""
                  src={star104}
                />
                <h1 className={styles.ultraPlan}>Ultra Plan</h1>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.monthWrapper}>
                  <div className={styles.month1}>$24,99/month</div>
                </div>
                <ImageComponent className={styles.cardIcon} alt="" src={star114} />
              </div>
              <div className={styles.theUltraPlanIsOurTopTierWrapper}>
                <div className={styles.theUltraPlan}>
                  The Ultra Plan is our top-tier offering, combining all Metal
                  features with the highest transaction limits, concierge
                  services, and VIP experiences. The ultimate choice for
                  individuals seeking unparalleled banking luxury and
                  exclusivity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
