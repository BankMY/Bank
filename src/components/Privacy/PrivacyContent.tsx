import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrivacyContent.module.css";

export interface PrivacyContentType {
  frame58?: string;
  informationSharing?: string;
  informationSharing2?: string;
  weMayShareYourInformation?: string;

};

const PrivacyContent: FunctionComponent<PrivacyContentType> = ({
  frame58,
  informationSharing,
  informationSharing2,
  weMayShareYourInformation,
}) => {
  

  return (
    <section
      className={styles.privacyContent}
    >
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={frame58}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.informationSharingParent}>
            <div>
              <h1 className={styles.informationSharing}>{informationSharing}</h1>
              <h1 className={styles.informationSharing}>{informationSharing2}</h1>
            </div>           
            <div className={styles.weMayShare}>{weMayShareYourInformation}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
