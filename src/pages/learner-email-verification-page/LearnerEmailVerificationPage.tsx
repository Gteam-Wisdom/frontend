import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";

const LearnerEmailVerificationPage: React.FC = () => {
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
      try {
        const response = await axios.post("http://localhost:3000/auth/verify", {
          code: code,
        });

        if (response.data === true) {
          // Code verification successful, navigate to the next screen
          return navigate("/become-a-learner/congrats");
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
          "Select a sign-up option below. If you continue with an email address, we’ll send you a verification code via email."
        }
      />
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          name="code"
          label="Verification code"
          placeholder="Enter 6-digit code"
          expires
          value={code}
          errors={errors}
          onChange={handleChange}
        />
        <Button type="submit" isLong isAccent isWide>
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

export default LearnerEmailVerificationPage;
