import React, { FormEvent, useCallback, useState } from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Input from "../../components/input/Input";
import { useNavigate } from "react-router";
import styles from "./WelcomePage.module.css";
import axios from "axios";
import { sessionStorageSet } from "../../utils";
import { handleLoginOrSignupSuccess } from "../../api/interceptors";
import { useAppStore } from "../../store/store";

const LoginView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, dispatch] = useAppStore();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log("Submitted:", e);

      // Perform your form validation here
      if (!email || !password) {
        // Display an error message or handle validation accordingly
        console.log("Please fill in all required fields.");
        return;
      }

      // If validation is successful, navigate to the dashboard
      const login = async () => {
        const tokens = await axios.post("login", {
          email: email,
          password: password,
        });
        sessionStorageSet("access_token", tokens.data.access_token);
        sessionStorageSet("refresh_token", tokens.data.refresh_token);
        handleLoginOrSignupSuccess();
        dispatch({ type: "LOG_IN" });
      };

      navigate("/learner");
    },
    [email, password, navigate, dispatch]
  );

  return (
    <Layout>
      <ModalHeader
        title={"Welcome back"}
        subtitle={"Please enter your details"}
      />
      <form onSubmit={onSubmit}>
        <Input
          required
          type="email"
          label="Email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          required
          label="Password"
          type="password"
          showPasswordToggle
          placeholder="************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" isLong isCenter isAccent isWide>
          join
        </Button>
      </form>

      <div className={styles.socialButtons}></div>
    </Layout>
  );
};

export default LoginView;
