import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";

import styles from "./Settings.module.css";
import Menu_mini from "../../components/CRM/Menu_mini";
import img_item2 from "../../assets/svg/CRM/Settings/community_01.svg";
import { Link } from "react-router-dom";

import avatar from "../../assets/svg/CRM/Settings/avatar.svg";
import FieldLabels from "../../components/FieldLabels";
import { postData } from "../../api";


const Settings: FunctionComponent = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [Name, setName] = useState("");
    const [UserName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleButtonClick = (index: number): void => {
        setActiveIndex(index);
    };
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      };
      const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      };
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };
      const handleToggle = () => {
        setShowPassword(prevState => !prevState);
      };
    
      const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
    

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email + " , " + password);
        try {
          const response = await postData('/auth/login', {       
            email,
            password,
          });
      
          console.log('Server response:', response);
        } catch (error) {
          console.error('Error sending data:', error);
          setError('An error occurred while sending data. Please try again.');
        }
      };
  
  return (
      <main className={styles.main}>
        <Menu_mini></Menu_mini>
        <div className={styles.welcomeContent}>
          <div className={styles.titlemain}>Settings</div>

          <div className={styles.mainContent}>
            <div className={styles.item1}>
                <div className={styles.header}>
                    <div className={styles.buttons}>
                        {['Edit Profile', 'Preferences  ', 'Security'].map((text, index) => (
                            <button
                                key={index}
                                className={`${styles.button} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => handleButtonClick(index)}
                            >
                                {text}
                            </button>
                        ))}
                        <div className={styles.underline} style={{ left: `${activeIndex * 33.33}%` }} />
                    </div>                   
                    <div className={styles.underline2} />
                </div>
                
                {activeIndex === 0 && (<>
                <div className={styles.item1_mainContent}>
                    <img className={styles.avatar} src={avatar} alt="avatar"></img>
                    <div className={styles.inputWrapper}>        
                         <FieldLabels
                            fullName="Your Name"
                            enterYourFullNamePlacehol="Jaxon Redmone"
                            value={Name}
                            onChange={handleNameChange}
                        />
                        <FieldLabels
                            fullName="Email address"
                            enterYourFullNamePlacehol="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <FieldLabels
                            fullName="Date Of Birth"
                            enterYourFullNamePlacehol="24 june 1998"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <FieldLabels
                            fullName="Phone Number"
                            enterYourFullNamePlacehol="(646) 555-2371"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <FieldLabels
                            fullName="Postal Code"
                            enterYourFullNamePlacehol="10035"
                            value={email}
                            onChange={handleEmailChange}
                            inputType="number"
                        />
                    </div>
                    <div className={styles.inputWrapper}>        
                         <FieldLabels
                            fullName="User Name"
                            enterYourFullNamePlacehol="@jaxon98r"
                            value={UserName}
                            onChange={handleUserNameChange}
                        />
                        <FieldLabels
                        fullName="Password"
                        enterYourFullNamePlacehol="* * * * * * * *"
                        inputType={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        />
                        <FieldLabels
                            fullName="Present Address"
                            enterYourFullNamePlacehol="1875 Madison Avenue, Apt 3B, NY"
                            value={Name}
                            onChange={handleNameChange}
                        />
                        <FieldLabels
                        fullName="City"
                        enterYourFullNamePlacehol="New York"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                        <FieldLabels
                        fullName="Country"
                        enterYourFullNamePlacehol="USA"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                        {error && <div className={styles.errorMessage}>{error}</div>}
                        
                    </div>
                </div>
                <nav className={styles.item1_btns_wrapper}>
                    <button className={styles.btn_cancel}>Cancel Updates</button>
                    <button className={styles.btn_save}>Save Updates</button>
                </nav>
                </>)}
                
            </div>
            {/* ITEM2 */}
            <div className={styles.item2}>
                <p></p>
                <img className={styles.img_item2} src={img_item2} alt=""></img>
                <p className={styles.needhelp}>Need Help?</p>
                <p className={styles.cust}>Our customer support team is available 24/7
                    For any quaries, please visit our Support Portal
                </p>

                <nav className={styles.sup_btn_wrapper}>
                    <Link className={styles.support_btn} to="*">Support</Link>
                </nav>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Settings;
