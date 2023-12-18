import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import { Option } from "../../components/multi-select/MultiSelect";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";

import styles from "./ExpertRegistrationPage.module.css";
import CountrySelect from "../../components/country-select/CountrySelect";

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

  const [formData, setFormData] = useState({
    phone: "",
    selectedCountry: "",
  });
  const [, setSelected] = useState<Option[] | null>();

  const { phone, selectedCountry } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = !phone || !selectedCountry;
    if (!errors) {
      const nextPageIndex =
        currentPage < totalSteps ? currentPage + 1 : totalSteps;
      setCurrentPage(nextPageIndex);
      addData(formData);
      return navigate("/become-an-expert/registration-three");
    }
  };

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCountry: event.target.value,
    }));
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
        <CountrySelect onChange={handleCountryChange} />
        <Input
          type="tel"
          name="phone"
          label="Phone number"
          placeholder="908 082 35 67"
          value={phone}
          onChange={handleChange}
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
