import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import Already from "../../components/already/Already";
import ModalHeader from "../../components/modal-header/ModalHeader";

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = !email;
    setState((prevState) => ({
      ...prevState,
      errors,
    }));

    if (!errors) {
      const nextPageIndex =
        currentPage < totalSteps ? currentPage + 1 : totalSteps;
      setCurrentPage(nextPageIndex);
      addData({
        email: state.email,
        password: state.password,
      });
      return navigate("/become-an-expert/email-verification");
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
