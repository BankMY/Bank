import { FunctionComponent } from "react";
import styles  from "./GetStarted.module.css";
import FrameComponent2 from "./FrameComponent2";

const GetStarted: FunctionComponent = () => {
  return (
    <div className={styles.getStarted}>
      <FrameComponent2/>
      <img style={{maxWidth: "80%"}} src="/Groupfull.svg"></img>       
    </div>
  );
}





export default GetStarted;