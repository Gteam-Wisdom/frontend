import { useState } from "react";
import styles from "./ExpertProfile.module.css";
import Menu from "./components/Menu";
import Billing from "../../components/billing/Billing";
import Settings from "../../components/personal-information/PersonalInformation";
import PersonalInformation from "./components/PersonalInformation";
import ExpertSettings from "./components/ExpertSettings";

const ExpertProfileView = () => {
  const [page, setPage] = useState("1");

  return (
    <div className={styles.wrapper}>
      <Menu pageClickHandle={setPage}></Menu>
      {page === "1" ? (
        <PersonalInformation></PersonalInformation>
      ) : page === "2" ? (
        <Billing></Billing>
      ) : (
        <ExpertSettings></ExpertSettings>
      )}
    </div>
  );
};

export default ExpertProfileView;
