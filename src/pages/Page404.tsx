import { FunctionComponent } from "react";

import styles from "./Page404.module.css";
import monkey from "../assets/svg/page404/404 1.svg"
import { Link } from "react-router-dom";

const Page404: FunctionComponent = () => {
  return (
    <main className={styles.main}>
        <div className={styles.leftSide}>
            <div className={styles.mainText}>
                <h2 className={styles.Oops}>Oops! </h2>
                <h2 className={styles.NotFound}>Page Not Found</h2>
                <p className={styles.Sorry}>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>

            </div>
            <div className={styles.btns}>
                <Link to="/" className={styles.component1}>
                    <b className={styles.pickAPlan}>Back to Home</b>
                </Link>
                <Link to="/faq" className={styles.component2}>
                    <b className={styles.pickAPlan2} >Help</b>
                </Link>
            </div>
        </div>
        
        <img className={styles.monkey} src={monkey} alt=""></img>
    </main>
  );
};

export default Page404;