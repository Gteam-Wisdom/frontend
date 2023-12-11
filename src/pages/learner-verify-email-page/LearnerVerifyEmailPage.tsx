import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Layout from "../../components/layout/Layout";
import Already from "../../components/already/Already";
import ModalHeader from "../../components/modal-header/ModalHeader";

const LearnerVerifyEmailPage = ({ addData }: any) => {
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
      addData({ email });
      navigate("/become-a-learner/email-verification");
    }
  };

  return (
    <Layout>
      <ModalHeader
        title={"Verify email address"}
        subtitle={
          "Select a sign up option below. If you continue with email address, we’ll send you a verification code via email."
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
