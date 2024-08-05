import React from 'react';
import styles from "./Homepage.module.css";

import GetStarted from '../components/Home/GetStarted';
import ChatManager from '../components/Chat/ChatManager';
import BottomFeatures from '../components/Home/BottomFeatures';
import FrameComponent1 from '../components/Home/FrameComponent1';
import FrameComponent from '../components/Home/FrameComponent';
import Subscription from '../components/Home/Subscription';

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


const Homepage: React.FC = () => {
    return (
      <main>
        <ChatManager/>
        <section className={styles.mainContent}>
            <GetStarted/>
          <div className={styles.progressTracking}>
            <div className={styles.progressTrackingContent}>
              <h1 className={styles.moreEffectiveWayContainer}>
                <p className={styles.moreEffectiveWay}>
                  <span className={styles.more}>{`More `}</span>
                  <span className={styles.effective}>effective</span>
                  <span>{` way `}</span>
                </p>
                <p className={styles.toTrackProgress}>to track progress</p>
              </h1>
            </div>
            <div className={styles.progressTrackingPlansSecond}>
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

            <div className={styles.progressTrackingPlansSecond}>
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
          <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
            <BottomFeatures />
            <FrameComponent1 />
            <FrameComponent />
          </div>
         
        </section>
      </main>
    );
  };

export default Homepage;