import { FunctionComponent, useCallback } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/svg/CRM/Header/logo.svg";
import grp5 from "../../assets/svg/CRM/Header/group-5.svg";
import fulltime from "../../assets/svg/CRM/Header/full-time.svg";
import grp100 from "../../assets/svg/CRM/Header/group-100.svg";
import grp99 from "../../assets/svg/CRM/Header/group-99.svg";
import { Link } from "react-router-dom";

export type HeaderType = {
  avatar?: string;
};

const Header: FunctionComponent<HeaderType> = ({ avatar }) => {
 

  return (
    <header className={styles.header}>
      <div className={styles.headerwrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.logoParent}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src={logo}
            />
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src={grp5}
                
              />
            </div>
          </div>
        </div>
        <div className={styles.fullTimeParent}>
          <img className={styles.fullTimeIcon} alt="" src={fulltime} />
          <input
            className={styles.searchHere}
            placeholder="Search here..."
            type="text"
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <Link to="*">
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src={grp100}
          />
        </Link>
        <Link to="/settings">
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src={grp99}         
          />
        </Link>
        <div className={styles.userInfo}>
          <div className={styles.nameRole}>
            <a className={styles.jaxonRedmone}>Jaxon Redmone</a>
            <a className={styles.admin}>@jaxon98r</a>
          </div>
        </div>
        <div className={styles.userInfo}>
          <img
            className={styles.projectCoordinatorIcon}
            loading="lazy"
            alt=""
            src={avatar}
          />
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
