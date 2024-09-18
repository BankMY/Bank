import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";

import styles from "./Settings.module.css";
import Menu_mini from "../../components/CRM/Menu_mini";
import img_item2 from "../../assets/svg/CRM/Settings/community_01.svg";
import { Link } from "react-router-dom";

import avatar from "../../assets/svg/CRM/Settings/avatar.svg";
import FieldLabels from "../../components/FieldLabels";
import { postData } from "../../api";
import background from "../../assets/svg/CRM/Dashboard/Ellipse 121.svg";
import el122 from "../../assets/svg/CRM/Settings/Ellipse 122.svg"
import ToggleSwitch from "./ToggleSwitch";


const Settings: FunctionComponent = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [Name, setName] = useState("");
    const [UserName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isChecked, setIsChecked] = useState(true);

    const [isChecked1, setIsChecked1] = useState(true);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(true);

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
      const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordRepeat(e.target.value);
      };
      const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
      };
      const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
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
            <img className={styles.background_small} src={background} alt=''></img>
            <div className={styles.item1}>
                <div className={styles.header}>
                    <div className={styles.buttons}>
                        {['Edit Profile', 'Preferences', 'Security'].map((text, index) => (
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
                        value={city}
                        onChange={handleCityChange}
                        />
                        <FieldLabels
                        fullName="Country"
                        enterYourFullNamePlacehol="USA"
                        value={country}
                        onChange={handleCountryChange}
                        />
                        {error && <div className={styles.errorMessage}>{error}</div>}
                        
                    </div>
                </div>
                <nav className={styles.item1_btns_wrapper}>
                    <button className={styles.btn_cancel}>Cancel Updates</button>
                    <button className={styles.btn_save}>Save Updates</button>
                </nav>
                </>)}
                {activeIndex === 1 && (<>                 
                  <div className={styles.item1_mainContent}>
                  <img className={styles.ell122} src={el122} alt=""/>
                  <div className={styles.item1_main_wrapper}>Two-Factor Authentication
                    <div className={styles.checkbox_wrapper}>
                      {/* <input type="checkbox"></input> */}
                      <ToggleSwitch
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        width={60}
                        height={30}
                        onColor="#5E1EE5"
                        offColor="#ddd"
                        thumbColor="#fff"
                      />
                      <span className={styles.checkbox_text}>Enable or disable two-factor authentication</span>
                    </div>
                    Change Password
                  <div className={styles.inputWrapper}>     
                        <FieldLabels
                        fullName="Repeat Password"
                        enterYourFullNamePlacehol="* * * * * * * *"
                        inputType={showPassword ? "text" : "password"}
                        value={passwordRepeat}
                        onChange={handleRepeatPasswordChange}
                        />
                        <FieldLabels
                        fullName="Password"
                        enterYourFullNamePlacehol="* * * * * * * *"
                        inputType={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </div>
                      
                  </div>
                  <nav className={styles.item1_btns_wrapper}>
                        <button className={styles.btn_cancel}>Cancel Updates</button>
                        <button className={styles.btn_save}>Save Updates</button>
                    </nav>
                  </div>
            </>)}
            {activeIndex === 2 && (<>                 
                  <div className={styles.item1_mainContent}>
                  <img className={styles.ell122} src={el122} alt=""/>
                  <div className={styles.item1_main_wrapper2}>
                    <div className={styles.inputWrapper2}>     
                        <FieldLabels
                        fullName="Currency"
                        enterYourFullNamePlacehol="USD"
                        inputType={showPassword ? "text" : "password"}
                        value={passwordRepeat}
                        onChange={handleRepeatPasswordChange}
                        />
                        <FieldLabels
                        fullName="Time Zone"
                        enterYourFullNamePlacehol="UTC-5 during Eastern Standard Time (EST)"
                        inputType={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={styles.checkbox_wrapperColumn}>Notifications
                      <div className={styles.checkbox_wrapperRow}>
                        <ToggleSwitch
                          checked={isChecked1}
                          onChange={() => setIsChecked1(!isChecked1)}
                          width={60}
                          height={30}
                          onColor="#5E1EE5"
                          offColor="#ddd"
                          thumbColor="#fff"
                        />
                        <span className={styles.checkbox_text}>I send or recieve digital currency</span>
                      </div>
                      
                      <div className={styles.checkbox_wrapperRow}>
                        <ToggleSwitch
                          checked={isChecked2}
                          onChange={() => setIsChecked2(!isChecked2)}
                          width={60}
                          height={30}
                          onColor="#5E1EE5"
                          offColor="#ddd"
                          thumbColor="#fff"
                        />
                        <span className={styles.checkbox_text}>I recieve news and updates</span>
                      </div>
                      
                      <div className={styles.checkbox_wrapperRow}>
                        <ToggleSwitch
                          checked={isChecked3}
                          onChange={() => setIsChecked3(!isChecked3)}
                          width={60}
                          height={30}
                          onColor="#5E1EE5"
                          offColor="#ddd"
                          thumbColor="#fff"
                        />
                        <span className={styles.checkbox_text}>There are recommendations for my accounts</span>
                      </div>
                      
                    </div> 
                      
                  </div>
                  <nav className={styles.item1_btns_wrapper}>
                        <button className={styles.btn_cancel}>Cancel Updates</button>
                        <button className={styles.btn_save}>Save Updates</button>
                    </nav>
                  </div>
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
