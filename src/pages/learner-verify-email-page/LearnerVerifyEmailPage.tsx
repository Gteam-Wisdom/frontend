import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import Already from "../../components/already/Already";
import ModalHeader from "../../components/modal-header/ModalHeader";

const LearnerVerifyEmailPage = ({ addData }: any) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
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
        const response = await axios.get("http://localhost:3000/auth/send", {});

        if (response.status === 200) {
          // If the request is successful, navigate to the email verification page
        } else {
          // Handle the case where the backend request is not successful
          console.error("Error sending email:", response.data);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
      navigate("/become-a-learner/email-verification");
    }
  };

  return (
    <Layout>
      <ModalHeader
        title={"Verify email address"}
        subtitle={
          "Select a sign-up option below. If you continue with an email address, we’ll send you a verification code via email."
        }
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

export default LearnerVerifyEmailPage;
