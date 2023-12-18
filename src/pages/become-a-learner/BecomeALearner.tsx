import React, { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import BecomeHeader from "../../components/become-header/BecomeHeader";
import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Modal from "../../components/modal/Modal";

import styles from "./BecomeALearner.module.css";
import JoinPage from "../join-page/JoinPage";
import LearnerCongratsPage from "../learner-congrats-page/LearnerCongratsPage";
import LearnerEmailVerificationPage from "../learner-email-verification-page/LearnerEmailVerificationPage";
import LearnerOnboardingPage from "../learner-onboarding-page/LearnerOnboardingPage";
import LearnerRegistrationPage from "../learner-registration-page/LearnerRegistrationPage";
import LearnerVerifyEmailPage from "../learner-verify-email-page/LearnerVerifyEmailPage";
import WelcomePage from "../welcome-page/WelcomePage";
import axios from "axios";
import { handleLoginOrSignupSuccess } from "../../api/interceptors";
import { localStorageSet, sessionStorageSet } from "../../utils";
import { useAppStore } from "../../store/store";

function BecomeALearner() {
  const [data, setData] = useState({});
  const [, dispatch] = useAppStore();
  const navigate = useNavigate();

  const addData = (e: any) => {
    setData((old) => ({ ...old, ...e }));
  };

  const onSubmit = async () => {
    try {
      const apiEndpoint = "http://localhost:3000/auth/signup";

      const response = await axios.post(apiEndpoint, data);

      if (response.data && response.data.access_token) {
        localStorage.setItem("refresh_token", response.data.refresh_token);
        sessionStorage.setItem("access_token", response.data.access_token);

        handleLoginOrSignupSuccess();
      } else {
        console.error("Unexpected response structure:", response);
        return;
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      return;
    }
    dispatch({ type: "LOG_IN" });
    navigate("/learner", { replace: true });
  };

  return (
    <div className={styles.wrapper}>
      <BecomeHeader />
      <ModalWrapper>
        <Modal>
          <Routes>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="join" element={<JoinPage isExpert={false} />} />
            <Route
              path="registration"
              element={<LearnerRegistrationPage addData={addData} />}
            />
            <Route
              path="verify-email"
              element={<LearnerVerifyEmailPage addData={addData} />}
            />
            <Route
              path="email-verification"
              element={<LearnerEmailVerificationPage />}
            />
            <Route path="congrats" element={<LearnerCongratsPage />} />
            <Route
              path="onboarding"
              element={<LearnerOnboardingPage onSubmit={onSubmit} />}
            />
          </Routes>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

export default BecomeALearner;
