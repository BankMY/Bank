import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Title_with_btn.module.css";
import btn1 from "../../assets/svg/CRM/crm_btn1.svg";

export type TitleType = {
    href?: string;
    imgbtn?: string;
    text?: string;
  };

const Title_with_btn: FunctionComponent<TitleType> = ({imgbtn, text, href="/"}) => {

  return (
    <div className={styles.totalbalance_text}>{text}
        <nav>
            <Link to={href}>
                <img className={styles.btn_1} src={imgbtn} alt=''/>
            </Link>
        </nav>             
    </div>
  );
};

export default Title_with_btn;
