import React from 'react';
import styles from './footer.module.css';
import Background from '../../assets/png/Footer/Background.png'
import BackgroundStar from '../../assets/svg/footer/Star 2.svg'
import Logo from '../../assets/svg/footer/Vector 8.svg'

import About from '../../assets/svg/footer/About the Bank.svg'
import ContactInfo from '../../assets/svg/footer/Contact Information.svg'
import Security from '../../assets/svg/footer/Security.svg'
import Careers from '../../assets/svg/footer/Careers.svg'
import priva from '../../assets/svg/footer/priva.svg'

import Support from '../../assets/svg/footer/Support.svg'
import Faq from '../../assets/svg/footer/FAQ.svg'
import OnlineSupport from '../../assets/svg/footer/Online Support Chat.svg'
import SupportContacts from '../../assets/svg/footer/Technical Support Contacts.svg'

import Social from '../../assets/svg/footer/Our social media.svg'
import F from '../../assets/svg/footer/Group 19.svg'
import X from '../../assets/svg/footer/Group 17.svg'
import Insta from '../../assets/svg/footer/Group 16.svg'
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} style={{ backgroundImage: `url(${Background})`}}>
            <div className={styles.elements}>
                <LogoSection/> 
                <AboutSection/>
                <SupportSection/>
                <SocialSection star={BackgroundStar}/>
            </div>
                   
        </footer>
    );
};


const LogoSection: React.FC = () => {
    return (
        <img className={styles.logo} src={Logo} alt=''></img>
    );
};

const AboutSection: React.FC = () => {
    return (
        <nav className={styles.buttonscontainer}>
            <img src={About} alt=''></img>
            <Link to="/about-us">
                <img src={ContactInfo} alt=''/>
            </Link>
            <Link to="/privacy">
                <img src={Security} alt=''/>
            </Link>
            <Link to="/about-us">
                <img src={Careers} alt=''/>
            </Link>
            <Link to="/privacy">
                <img src={priva} alt=''/>
            </Link>
        </nav>
    );
};
const SupportSection: React.FC = () => {
    return (
        <nav className={styles.buttonscontainer}>
            <img src={Support} alt=''></img>
            <Link to="/faq">
                <img src={Faq} alt=''/>
            </Link>
            <Link to="*">
                <img src={OnlineSupport} alt=''/>
            </Link>
            <Link to="*">
                <img src={SupportContacts} alt=''/>
            </Link>
        </nav>
    );
};

interface SocialSectionpProps {
    star: string;
}

const SocialSection: React.FC<SocialSectionpProps> = ({star}) => {
    return (
        <div className={styles.buttonscontainerSocial1}>
            <div style={{display:'flex'}}>
                <img src={Social} alt=''/>
                <img src={star} alt=''/>
            </div>
            
            <nav className={styles.buttonscontainerSocial}>
                <Link to="*" className={styles.padding}>
                    <img src={F} alt=''/>
                </Link>
                <Link to="*" className={styles.padding}>
                    <img src={X} alt=''/>
                </Link>
                <Link to="*" className={styles.padding}>
                    <img src={Insta} alt=''/>
                </Link>
            </nav>
        </div>
    );
};



export default Footer;