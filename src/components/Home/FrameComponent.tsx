import { FunctionComponent } from "react";
import TestimonialRowOne from "../../components/Home/TestimonialRowOne";
import Label from "../../components/Home/Label";
import styles from "./FrameComponent.module.css";

import ellipse_86 from "../../assets/png/Home/ellipse-86@2x.png"
import ellipse_86_1 from "../../assets/png/Home/ellipse-86-1@2x.png"
import ellipse_86_2 from "../../assets/png/Home/ellipse-86-2@2x.png"
import ellipse_86_3 from "../../assets/png/Home/ellipse-86-3@2x.png"
import ellipse_86_4 from "../../assets/png/Home/ellipse-86-4@2x.png"
import ellipse_86_5 from "../../assets/png/Home/ellipse-86-5@2x.png"

import star10 from "../../assets/svg/Home/star-10.svg";
import star11 from "../../assets/svg/Home/star-11.svg";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.testimonialContainerParent}>
      <div className={styles.testimonialContainer}>
        <h1 className={styles.whatOurUsersContainer}>
          <span>{`What our `}</span>
          <span className={styles.users}>Users</span>
          <span> say</span>
        </h1>
      </div>
      <div className={styles.testimonialGridParent}>
        <div className={styles.testimonialGrid}>
          <TestimonialRowOne
            loveTheQuickResponseTimes="Love the quick response times and friendly service! Always a pleasure to deal with your staff."
            change={ellipse_86}
            sarahJohnson="Sarah Johnson"
            happyCust01="@happy_cust01"
            theMobileAppIsFantasticAn="The mobile app is fantastic and very user-friendly. It makes managing my finances so convenient!"
            label1={ellipse_86_1}
            michaelSmith=" Michael Smith"
            techSavvy="@tech_savvy "
          />
          <TestimonialRowOne
            loveTheQuickResponseTimes={`Great rewards program on your credit cards, very pleased! The variety of options for redeeming points is excellent."`}
            change={ellipse_86_2}
            sarahJohnson="David Brown"
            happyCust01="@rewards_fan"
            theMobileAppIsFantasticAn="Customer support resolved my issue quickly and professionally. Very satisfied with the assistance I received."
            label1={ellipse_86_3}
            michaelSmith="Jessica Martinez"
            techSavvy="@support_star"
          />
        </div>
        <div className={styles.loanExperience}>
          <Label
            websitenet={star10}
            label={star11}
            hadAGreatExperienceWithYo={`Had a great experience with your loan process; it was quick and efficient. The communication was clear and helpful."`}
            title={ellipse_86_4}
            emilyDavis="Emily Davis"
            loanWiz="@loan_wiz "
          />
          <Label
            websitenet={star10}
            label={star11}
            hadAGreatExperienceWithYo="Your branches are always clean and welcoming. The staff is incredibly helpful and friendly."
            title={ellipse_86_5}
            emilyDavis="John Wilson "
            loanWiz="@branch_visitor"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
