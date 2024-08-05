import { FunctionComponent, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "./HeaderFinal.module.css";

import logo_light from "../../assets/svg/header/logo.svg"
import logo_dark from "../../assets/svg/header/logo2.svg"
import logo_light_small from "../../assets/svg/header/logo1_small.svg"
import logo_dark_small from "../../assets/svg/header/logo2_small.svg"
import { Link } from "react-router-dom";


const HeaderFinal: FunctionComponent = (
) => {
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
        <div className={styles.component4Parent}>
          <MenuItem title="Cards" href="/cards"/>
          <MenuItem title="Services" href="/Services"/>
          <MenuItem title="Business"  href="/Services"/>
          <MenuItem title="About Us"  href="/Services"/>
        </div>
      </div>
      <div className={styles.auth}>
        <SignIn href="/sign-in" title="Sign In"/>
        <SignUp href="/sign-up" title="Sign Up"/>
      </div>
    </header>
  );
};



interface MenuItemProps {
  title: string;
  href: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ title, href }) => {

  return (
    <div className={styles.menuitem}>
      <Link to={href} className={styles.title}>{title}</Link>
    </div>
  );
};


export default HeaderFinal;
