import { FunctionComponent } from "react";
import styles from "./PrivacyContent1.module.css";

export interface PrivacyContent1Type {
  color1?: string;
  color2?: string;
  useOfInformation?: string;
  useOfInformation2?: string;
  weUseYourPersonalInformat?: string;
  frame57?: string;
};

const PrivacyContent1: FunctionComponent<PrivacyContent1Type> = ({
  color1 = "",
  color2 = "",
  useOfInformation,
  useOfInformation2,
  weUseYourPersonalInformat,
  frame57,
}) => {
  return (
    <section className={styles.privacyContent}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.useOfInformationParent}>
            <h1 className={styles.useOfInformation} style={{color: color1 }}>{useOfInformation}</h1>
            <h1 className={styles.useOfInformation} style={{color: color2 }}>{useOfInformation2}</h1>
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
