import { FunctionComponent } from "react";
import styles from "./ContentColumns1.module.css";
import coins from "../../assets/svg/For-business/coins-collage.svg";
import line32 from "../../assets/svg/For-business/line-32.svg";

export interface ContentColumns1Type {
  className?: string;
};

const ContentColumns1: FunctionComponent<ContentColumns1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentColumns, className].join(" ")}>
      <div className={styles.accountSupportWrapper}>
        <div className={styles.accountSupport}>
          <div className={styles.accountSupportDetails}>
            <img
              className={styles.accountSupportDetailsChild}
              loading="lazy"
              alt=""
              src={line32}
            />
            <h1 className={styles.multiCurrencyAccounts}>
              Multi-Currency Accounts
            </h1>
          </div>
          <div className={styles.operateGloballyWith}>
            Operate globally with ease using our multi-currency accounts.
            Simplify your international transactions and manage your finances
            across different currencies without the hassle of conversion fees.
            Our multi-currency solutions provide the flexibility and efficiency
            your business needs in the global marketplace.
          </div>
        </div>
      </div>
      <img
        className={styles.coinsCollageIcon}
        loading="lazy"
        alt=""
        src={coins}
      />
    </div>
  );
};

export default ContentColumns1;
