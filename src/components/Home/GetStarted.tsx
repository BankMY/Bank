import { FunctionComponent } from "react";
import styles  from "./GetStarted.module.css";
import FrameComponent2 from "./FrameComponent2";
import girl_img from "../../assets/svg/Home/Girl_with_card_homepage.svg"

const GetStarted: FunctionComponent = () => {
  return (
    <div className={styles.getStarted}>
      <FrameComponent2/>
      <img style={{maxWidth: "80%",marginLeft: '-5rem'}} src={girl_img} alt=""></img>       
    </div>
  );
}





export default GetStarted;