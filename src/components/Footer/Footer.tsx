import React from 'react';
import styles from './footer.module.css';
import Background from '../../assets/png/Footer/Background.png'
import BackgroundStar from '../../assets/svg/footer/Star 2.svg'
import Logo from '../../assets/svg/footer/Vector 8.svg'

import About from '../../assets/svg/footer/About the Bank.svg'
import ContactInfo from '../../assets/svg/footer/Contact Information.svg'
import Security from '../../assets/svg/footer/Security.svg'
import Careers from '../../assets/svg/footer/Careers.svg'

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
        <footer className={styles.footer} style={{ backgroundImage: `url(${Background})`, height: '300px' }}>
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
        <img className={styles.logo} src={Logo}></img>
    );
};

const AboutSection: React.FC = () => {
    return (
        <div className={styles.buttonscontainer}>
            <img src={About}></img>
            <Link to="/">
                <img src={ContactInfo}/>
            </Link>
            <Link to="/">
                <img src={Security}/>
            </Link>
            <Link to="/">
                <img src={Careers}/>
            </Link>
        </div>
    );
};
const SupportSection: React.FC = () => {
    return (
        <div className={styles.buttonscontainer}>
            <img src={Support}></img>
            <Link to="/">
                <img src={Faq}/>
            </Link>
            <Link to="/">
                <img src={OnlineSupport}/>
            </Link>
            <Link to="/">
                <img src={SupportContacts}/>
            </Link>
        </div>
    );
};

interface SocialSectionpProps {
    star: string;
}

const SocialSection: React.FC<SocialSectionpProps> = ({star}) => {
    return (
        <div className={styles.buttonscontainerSocial1}>
            <div style={{display:'flex'}}>
                <img src={Social} />
                <img src={star} />
            </div>
            
            <div className={styles.buttonscontainerSocial}>
                <Link to="/" className={styles.padding}>
                    <img src={F}/>
                </Link>
                <Link to="/" className={styles.padding}>
                    <img src={X}/>
                </Link>
                <Link to="/" className={styles.padding}>
                    <img src={Insta}/>
                </Link>
            </div>
        </div>
    );
};



export default Footer;