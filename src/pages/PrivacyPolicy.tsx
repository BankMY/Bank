import { FunctionComponent } from "react";
import PrivacyContent1 from "../components/Privacy/PrivacyContent1";
import PrivacyContent from "../components/Privacy/PrivacyContent";
import styles from "./PrivacyPolicy.module.css";
import styles2 from "./Homepage.module.css";
import Subscription from "../components/Home/Subscription";

import star1 from "../assets/svg/FAQ/star-1.svg";
import star2 from "../assets/svg/FAQ/star-2.svg";
import arrow from "../assets/svg/Home/vector-1.svg";

import star10 from "../assets/svg/Home/star-10.svg";
import star11 from "../assets/svg/Home/star-11.svg";

import star10_1 from "../assets/svg/Home/star-10-1.svg";
import star112 from "../assets/svg/Home/Star11.svg";

import starPrem from "../assets/svg/Home/Star10_prem.svg"
import star11prem from "../assets/svg/Home/Star11_prem.svg";
import star10_4 from "../assets/svg/Home/star-10-4.svg";
import star10_iron from "../assets/svg/Home/Star10_iron.svg";
import star111 from "../assets/svg/Home/star-111.svg";

import frame56 from "../assets/png/Privacy/frame-56@2x.png";
import frame57 from "../assets/png/Privacy/frame-57@2x.png";
import frame58 from "../assets/png/Privacy/frame-58@2x.png";
import frame59 from "../assets/png/Privacy/frame-59@2x.png";
import frame60 from "../assets/png/Privacy/frame-60@2x.png";
import frame61 from "../assets/png/Privacy/frame-61@2x.png";
import frame62 from "../assets/png/Privacy/frame-62@2x.png";

const PrivacyPolicy: FunctionComponent = () => {
  return (
      <main>
      <section className={styles.privacyPolicyContainerWrapper}>
        <div className={styles.privacyPolicyContainer}>
          <div className={styles.policyContent}>
            <div className={styles.frameParent}>
              <div className={styles.policyHeaderWrapper}>
                <div className={styles.policyHeader}>
                  <div className={styles.starContainer}>
                    <img
                      className={styles.starLeftIcon}
                      loading="lazy"
                      alt=""
                      src={star1}
                    />
                  </div>
                  <div className={styles.policyTitle}>
                    <h1 className={styles.privacyPolicy1}>PRIVACY POLICY</h1>
                    <img
                      className={styles.starRightIcon}
                      loading="lazy"
                      alt=""
                      src={star2}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.atVeridionBanking}>
                At Veridion Banking, we are committed to protecting your privacy
                and safeguarding your personal information. This Privacy Policy
                outlines how we collect, use, disclose, and protect the
                information you provide to us when you use our services.
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrivacyContent
        frame58={frame56}
        informationSharing="Information Collection"
        weMayShareYourInformation=" We collect personal information such as your name, contact
                  details, financial information, and other relevant data
                  necessary for providing banking services. This information is
                  collected directly from you or from third parties with your
                  consent."
      />
      <PrivacyContent1
        useOfInformation="Use of Information"
        weUseYourPersonalInformat="We use your personal information to provide and 
        improve our banking services, personalize your experience, process 
        transactions, prevent fraud, and comply with legal obligations."
        frame57={frame57}
      />
      <PrivacyContent
        frame58={frame58}
        informationSharing="Information Sharing"
        weMayShareYourInformation="We may share your information with third-party 
        service providers who assist us in delivering our services. These providers 
        are contractually obligated to maintain the confidentiality and security 
        of your information.
"
      />
      <PrivacyContent1
        useOfInformation="Data Security"
        weUseYourPersonalInformat="We employ industry-standard security measures 
        to protect your personal information from unauthorized access, disclosure, 
        alteration, or destruction. However, no method of transmission over the 
        internet or electronic storage is completely secure, and we cannot 
        guarantee absolute security.
"
        frame57={frame59}
      />
      <PrivacyContent
        frame58={frame60}
        informationSharing="Cookies and Tracking Technologies"
        weMayShareYourInformation="We use cookies and similar technologies to enhance your experience on our website and mobile applications. You can manage your cookie preferences through your browser settings.
Cookies are small text files placed on your device when you visit a website, helping us enhance your browsing experience and provide personalized services."
        
      />
      <PrivacyContent1
        useOfInformation="Your Rights"
        weUseYourPersonalInformat="You have the right to access, correct, or delete your personal information. You may also withdraw consent for certain processing activities where applicable.
Additionally, you can request the deletion of your personal information under certain circumstances, such as when it is no longer necessary for the purposes for which it was collected."
        frame57={frame61}
      />
      <PrivacyContent
        frame58={frame62}
        informationSharing="Changes to this  "
        informationSharing2="Privacy Policy"
        weMayShareYourInformation="We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our website."
      />
      <section className={styles2.mainContent}>
        <div className={styles2.progressTracking}>
            <div className={styles2.progressTrackingContent}>
              <h1 className={styles2.moreEffectiveWayContainer}>
                <p className={styles2.moreEffectiveWay}>
                  <span className={styles2.more}>{`More `}</span>
                  <span className={styles2.effective}>effective</span>
                  <span>{` way `}</span>
                </p>
                <p className={styles2.toTrackProgress}>to track progress</p>
              </h1>
            </div>
            <div className={styles2.progressTrackingPlansSecond}>
              <Subscription arrow={arrow} star1={star10} star2={star11} price="Free" quality='Standart'
              desc="The Standard Plan offers essential banking services with no
              monthly fees. Enjoy free online transfers, basic customer support,
              and access to a wide network of ATMs. Ideal for everyday banking
              needs."/>
              <Subscription arrow={arrow} star1={star10_1} star2={star112} price="$4,99/month" quality='Plus'
              desc="The Plus Plan includes all Standard features with added benefits
              such as higher transaction limits, priority customer support.
              Perfect for those seeking enhanced banking convenience."/>
              <Subscription arrow={arrow} star1={starPrem} star2={star11prem} price="$8,99/month" quality='Premium'
              desc="The Premium Plan provides all Plus features along with exclusive
              perks like lower foreign transaction fees, travel insurance, and
              cashback rewards on purchases. Tailored for frequent travelers and
              high spenders."/>
            </div>

            <div className={styles2.progressTrackingPlansSecond}>
              <Subscription 
              arrow={arrow} star1={star10_iron} star2={star111} price="$15,99/month" quality='Iron Plan'
              desc="The Standard Plan offers essential banking services with no monthly
            fees. Enjoy free online transfers, basic customer support, and
            access to a wide network of ATMs. Ideal for everyday banking needs."/>
              <Subscription 
              arrow={arrow} star1={star10_4} star2={star112} price="$24,99/month" quality='Ultra Plan'
              desc="The Plus Plan includes all Standard features with added benefits
              such as higher transaction limits, priority customer support.
              Perfect for those seeking enhanced banking convenience."/>
            </div>
          </div>
      </section>
      </main>
  );
};

export default PrivacyPolicy;
