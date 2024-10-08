import { FunctionComponent, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "./HeaderFinal.module.css";

import logo_light from "../../assets/svg/header/logo.svg"
import logo_dark from "../../assets/svg/header/logo2.svg"
import logo_light_small from "../../assets/svg/header/logo1_small.svg"
import logo_dark_small from "../../assets/svg/header/logo2_small.svg"
import { Link } from "react-router-dom";

interface HeaderFinalProps {
  active?: string;
}

const HeaderFinal: FunctionComponent<HeaderFinalProps> = ({ active }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className={styles.headerFinal}>
      <div className={styles.main}>
        <nav>
        <Link className={styles.logoWrapper} to={"/"}>
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src={isHovered ? logo_dark : logo_light}
          />
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.logoIconSmall}
            loading="lazy"
            alt=""
            src={isHovered ? logo_dark_small : logo_light_small}
          />
        </Link>
        </nav>
        <div className={styles.component4Parent}>
          <MenuItem title="Cards" href="/cards" active={active === "cards"} />
          <MenuItem title="Services" href="/services" active={active === "services"} />
          <MenuItem title="Business" href="/for-business" active={active === "for-business"} />
          <MenuItem title="About Us" href="/about-us" active={active === "about-us"} />
        </div>
      </div>
      <div className={styles.auth}>
        <SignIn href="/sign-in" title="Sign In" />
        <SignUp href="/sign-up" title="Sign Up" />
      </div>
    </header>
  );
};

interface MenuItemProps {
  title: string;
  href: string;
  active: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, href, active }) => {
  return (
    <nav className={`${styles.menuitem} ${active ? styles.active : ""}`}>
        <Link to={href} className={styles.title}>{title}</Link>
    </nav>
  );
};

export default HeaderFinal;
