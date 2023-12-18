import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AvatarUpload from "../../components/avatar-upload/AvatarUpload";
import CountrySelect from "../../components/country-select/CountrySelect";
import Already from "../../components/already/Already";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";

import styles from "./LearnerRegistrationPage.module.css";

const LearnerRegistrationPage = ({ addData }: any) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    password: "",
    selectedCountry: "",
  });

  const { fullname, password, selectedCountry } = formData;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = !fullname || !password || !selectedCountry;

    addData(formData);

    if (!errors) {
      navigate("/become-a-learner/verify-email");
    }
  };

  const handleUpload = (file: File) => {
    console.log("Uploading file:", file);
  };

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCountry: event.target.value,
    }));
  };

  return (
    <Layout>
      <ModalHeader title={"Welcome"} />
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          name="fullname"
          label="Full name"
          placeholder="Jenny Wilson"
          className={styles.input}
          value={fullname}
          onChange={handleChange}
        />
        <AvatarUpload onUpload={handleUpload} />
        <CountrySelect onChange={handleCountryChange} />
        <Input
          required
          type="password"
          name="password"
          label="Password"
          placeholder="Create password"
          helperMessage="8 or more characters"
          value={password}
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
      <Already />
    </Layout>
  );
};

export default LearnerRegistrationPage;
