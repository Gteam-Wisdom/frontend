import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";

import styles from "./ExpertEmailVerificationPage.module.css";
import axios from "axios";

interface ExpertEmailVerificationPageProps {
  currentPage?: number;
  nextPageNumber?: (pageNumber: string) => void;
  totalSteps?: number;
  setCurrentPage?: any;
  handleVerify: (e: any) => void;
}

const ExpertEmailVerificationPage: React.FC<
  ExpertEmailVerificationPageProps
> = ({
  currentPage = 0,
  nextPageNumber = () => {},
  totalSteps = 0,
  setCurrentPage,
  handleVerify,
}) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    code: "",
    errors: false,
  });

  const { code, errors } = state;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors = !code;
    setState((prevState) => ({
      ...prevState,
      errors,
    }));
    if (!errors) {
      const nextPageIndex =
        currentPage < totalSteps ? currentPage + 1 : totalSteps;
      setCurrentPage(nextPageIndex);
      try {
        const response = await axios.post("http://localhost:3000/auth/verify", {
          code: code,
        });

        if (response.data === true) {
          // Code verification successful, navigate to the next screen
          return navigate("/become-an-expert/congrats");
        } else {
          // Handle the case where verification fails
          console.error("Verification failed");
        }
      } catch (error) {
        console.error("Error during verification:", error);
      }
    }
  };

  return (
    <Layout>
      <ModalHeader
        title={"Verification"}
        subtitle={
          "If you continue with email address, we’ll send you a verification code via email."
        }
      />
      <MultiStepProgressBar
        page={currentPage}
        onPageNumberClick={nextPageNumber}
        totalSteps={totalSteps}
      />
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          name="code"
          label="Verification code"
          placeholder="Enter 6 digit code"
          expires
          value={code}
          errors={errors}
          onChange={handleChange}
        />
        <Button className={styles.buttonConfirm} isAccent isWide type="submit">
          Confirm
        </Button>
      </form>
      <Buttons>
        <Button>Send new code</Button>
        <Button>Try new email</Button>
      </Buttons>
    </Layout>
  );
};

export default ExpertEmailVerificationPage;
