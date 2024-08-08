import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";
import ImageComponent from '../ImageComponent';

import group1912x from '../../assets/png/Cards/group-191@2x.png';
import mancardillustration2x from '../../assets/png/Cards/man-card-illustration@2x.png';

export interface FrameComponent7Type {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.freedomContentParent, className].join(" ")}>
      <div className={styles.freedomContent}>
        <div className={styles.freedomTitleParent}>
          <div className={styles.freedomTitle}>
            <h1 className={styles.yourWayToContainer}>
              <p className={styles.yourWay}>{`                Your Way `}</p>
              <p className={styles.toFinancialFreedom}>to Financial Freedom</p>
            </h1>
            
            <div className={styles.frameParent}>
              <ImageComponent
                className={styles.frameChild}
                alt=""
                src={group1912x}
              />
              <h1 className={styles.card}>Card</h1>
            </div>
          </div>
          <div className={styles.experienceSeamlessBanking}>
            Experience seamless banking with our innovative card solutions
            designed to fit your lifestyle. Unlock financial flexibility and
            enjoy exclusive benefits tailored just for you.
          </div>
          <div className={styles.pickerInstance}>
            <button className={styles.component1}>
              <b className={styles.pickAPlan}>Get my Card</b>
            </button>
          </div>
        </div>
      </div>
      <ImageComponent
        className={styles.manCardIllustrationIcon}
        alt=""
        src={mancardillustration2x}
      />
    </div>
  );
};

export default FrameComponent7;
