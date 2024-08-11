import { FunctionComponent } from "react";
import styles from "./ContentColumns.module.css";
import line32 from "../../assets/svg/For-business/line-32.svg";
import keys from "../../assets/svg/For-business/keys-percent-collage.svg";

export interface ContentColumnsType {
  className?: string;
};

const ContentColumns: FunctionComponent<ContentColumnsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentColumns, className].join(" ")}>
      <div className={styles.contentColumnsInner}>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src={line32}
            />
            <h1 className={styles.personalizedBusinessSupportContainer}>
              <span>{`Personalized `}</span>
              <p className={styles.businessSupport}>Business Support</p>
            </h1>
          </div>
          <div className={styles.experienceUnparalleledSuppor}>
            Experience unparalleled support with our dedicated business
            advisors. We offer personalized financial advice and strategic
            planning to help you navigate the complexities of running a
            business. From cash flow management to growth strategies, our
            experts are here to support your success.
          </div>
        </div>
      </div>
      <img
        className={styles.keysPercentCollageIcon}
        loading="lazy"
        alt=""
        src={keys}
      />
    </div>
  );
};

export default ContentColumns;
