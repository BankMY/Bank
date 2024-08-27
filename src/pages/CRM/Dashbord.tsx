import { FunctionComponent } from "react";

import styles from "./Dashbord.module.css";
import Menu_mini from "../../components/CRM/Menu_mini";
import welcome_img from "../../assets/svg/CRM/Dashboard/Welkoming_message.svg";


const Dashbord: FunctionComponent = () => {
  return (
      <main className={styles.main}>
        <Menu_mini active="1"></Menu_mini>
        <div className={styles.mainContent}>
          <div className={styles.titlemain}>Dashboard</div>
          <div className={styles.welcome_wrapper}>
            <img className={styles.welcome_img} src={welcome_img} alt=""></img>
            <div className={styles.hellomsg}>
              <div>Welcome back, <span className={styles.welcome_name}>Jaxon Redmone</span></div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Dashbord;
