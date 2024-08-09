import { FunctionComponent } from "react";
import styles from "./PrivacyContent1.module.css";

export interface PrivacyContent1Type {
  className?: string;
  useOfInformation?: string;
  weUseYourPersonalInformat?: string;
  frame57?: string;
};

const PrivacyContent1: FunctionComponent<PrivacyContent1Type> = ({
  className = "",
  useOfInformation,
  weUseYourPersonalInformat,
  frame57,
}) => {
  return (
    <section className={[styles.privacyContent, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.useOfInformationParent}>
            <h1 className={styles.useOfInformation}>{useOfInformation}</h1>
            <div className={styles.weUseYour}>{weUseYourPersonalInformat}</div>
          </div>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={frame57}
        />
      </div>
    </section>
  );
};

export default PrivacyContent1;
