import { FunctionComponent } from "react";

import styles from "./Dashbord.module.css";
import Menu_mini from "../../components/CRM/Menu_mini";


const Dashbord: FunctionComponent = () => {
  return (
      <main >
        <Menu_mini active="1"></Menu_mini>
      </main>
  );
};

export default Dashbord;
