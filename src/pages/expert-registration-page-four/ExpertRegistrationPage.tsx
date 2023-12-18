import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";

import styles from "./ExpertRegistrationPage.module.css";

interface ExpertRegistrationPageProps {
  currentPage?: number;
  setCurrentPage?: any;
  nextPageNumber?: (pageNumber: string) => void;
  totalSteps?: number;
  isExpert?: boolean;
  addData: (e: any) => void;
}

const ExpertRegistrationPage: React.FC<ExpertRegistrationPageProps> = ({
  currentPage = 0,
  nextPageNumber = () => {},
  totalSteps = 0,
  setCurrentPage,
  isExpert,
  addData,
}) => {
  const navigate = useNavigate();
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/become-an-expert/review");
    // const nextPageIndex = currentPage < totalSteps ? currentPage + 1 : totalSteps;
    // setCurrentPage(nextPageIndex);
  };

  return (
    <Layout>
      <ModalHeader title={"Become an expert"} />
      <MultiStepProgressBar
        page={currentPage}
        onPageNumberClick={nextPageNumber}
        totalSteps={totalSteps}
      />
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <p>Your additional services</p>
        <ToggleSwitch
          label="1:1 meetings"
          isToggled={isToggled1}
          onToggle={() => setIsToggled1(!isToggled1)}
        />
        <ToggleSwitch
          label="Workshops"
          isToggled={isToggled2}
          onToggle={() => setIsToggled2(!isToggled2)}
        />
        <Buttons>
          <Button isWide hasBorder>
            Cancel
          </Button>
          <Button type="submit" isAccent isWide>
            Next
          </Button>
        </Buttons>
      </form>
    </Layout>
  );
};

export default ExpertRegistrationPage;

interface SocialMediaLinksProps {}

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = () => {
  const [socialLinks, setSocialLinks] = useState<string[]>([""]);

  const handleAddLink = () => {
    setSocialLinks([...socialLinks, ""]);
  };

  const handleChangeLink = (index: number, value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = value;
    setSocialLinks(updatedLinks);
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  return (
    <div className={styles.mediaLinksContainer}>
      {socialLinks.map((link, index) => (
        // <div key={index}>
        <Input
          key={index}
          type="text"
          name="socialMedia"
          label={index === 0 ? "Link to your social media" : ""}
          placeholder="https://www.linkedin.com/in/sylvain-duranton/"
          value={link}
          onChange={(e) => handleChangeLink(index, e.target.value)}
        />
        // <button onClick={() => handleRemoveLink(index)}>Remove</button>
        // </div>
      ))}
      <Button className={styles.button} onClick={handleAddLink}>
        +
      </Button>
    </div>
  );
};
