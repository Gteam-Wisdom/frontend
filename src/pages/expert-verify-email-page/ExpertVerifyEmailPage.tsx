import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import Already from "../../components/already/Already";
import ModalHeader from "../../components/modal-header/ModalHeader";
import axios from "axios";

// import styles from './ExpertVerifyEmailPage.module.css';

interface ExpertVerifyEmailPageProps {
  currentPage?: number;
  nextPageNumber?: (pageNumber: string) => void;
  totalSteps?: number;
  setCurrentPage?: any;
  addData: (e: any) => any;
}

const ExpertVerifyEmailPage: React.FC<ExpertVerifyEmailPageProps> = ({
  currentPage = 0,
  nextPageNumber = () => {},
  totalSteps = 0,
  setCurrentPage,
  addData,
}) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
    errors: false,
  });

  const { email, errors } = state;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const errors = !email;
    setState((prevState) => ({
      ...prevState,
      errors,
    }));
    if (!errors) {
      try {
        // Send the email to the backend endpoint for further processing
        const response = await axios.post("http://localhost:3000/auth/send", {
          email: state.email,
        });

        if (response.status === 200) {
          const nextPageIndex =
            currentPage < totalSteps ? currentPage + 1 : totalSteps;
          setCurrentPage(nextPageIndex);
          addData({
            email: state.email,
            password: state.password,
          });
          return navigate("/become-an-expert/email-verification");
          // If the request is successful, navigate to the email verification page
        } else {
          // Handle the case where the backend request is not successful
          console.error("Error sending email:", response.data);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
    if (!errors) {
    }
  };

  return (
    <Layout>
      <ModalHeader
        title={"Verify email address"}
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
          required
          type="email"
          name="email"
          label="Current email"
          placeholder="example@mail.com"
          value={email}
          errors={errors}
          onChange={handleChange}
        />
        <Button type="submit" isAccent isLong isWide>
          Join
        </Button>
      </form>
      <Already />
    </Layout>
  );
};

export default ExpertVerifyEmailPage;
