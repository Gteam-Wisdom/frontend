import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ModalWrapper from "../../components/modal-wrapper/ModalWrapper";
import Modal from "../../components/modal/Modal";
import CongratsPage from "../expert-congrats-page/ExpertCongratsPage";
import ExpertRegistrationPageTwo from "../expert-registration-page-two/ExpertRegistrationPage";
import ExpertRegistrationPageThree from "../expert-registration-page-three/ExpertRegistrationPage";
import ExpertRegistrationPageFour from "../expert-registration-page-four/ExpertRegistrationPage";
import ExpertRegistrationPage from "../expert-registration-page/ExpertRegistrationPage";
import ExpertVerifyEmailPage from "../expert-verify-email-page/ExpertVerifyEmailPage";
import ExpertEmailVerificationPage from "../expert-email-verification-page/ExpertEmailVerificationPage";
import WelcomePage from "../welcome-page/WelcomePage";

import styles from "./BecomeAnExpert.module.css";
import ExpertReviewPage from "../expert-review-page/ExpertReviewPage";
import BecomeHeader from "../../components/become-header/BecomeHeader";
import axios from "axios";
import {
  localStorageGet,
  localStorageSet,
  sessionStorageSet,
} from "../../utils";
import { handleLoginOrSignupSuccess } from "../../api/interceptors";
import { useAppStore } from "../../store/store";

const totalSteps = 6;

function BecomeAnExpert() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [, dispatch] = useAppStore();

  const nextPageNumber = (pageNumber: string) => {
    const numericPageNumber = parseInt(pageNumber, 10);
    if (
      !isNaN(numericPageNumber) &&
      numericPageNumber >= 1 &&
      numericPageNumber <= totalSteps
    ) {
      setCurrentPage(numericPageNumber);
    } else {
      setCurrentPage(1);
    }
  };

  const commonProps = {
    isExpert: true,
    currentPage,
    setCurrentPage,
    nextPageNumber,
    totalSteps,
  };

  const addData = (e: any) => {
    setData((old) => ({ ...old, ...e }));
  };

  const onSubmit = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint
      const apiEndpoint = "http://localhost:2999/auth/signup";

      // Perform POST request to the API endpoint with the data
      const response = await axios.post(apiEndpoint, data);

      console.log("Response from server:", response);
      if (!response.data.access_token) {
        return;
      }

      localStorageSet("refresh_token", response.data.refresh_token);
      sessionStorageSet("access_token", response.data.access_token);
      handleLoginOrSignupSuccess();

      dispatch({ type: "SIGN_UP" });
      navigate("/expert");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting data:", error);
    }
  };

  // useEffect(() => {
  //     const renderCurrentPage = () => {
  //         switch (currentPage) {
  //             case 1:
  //                 return navigate('/become-an-expert/registration');
  //             case 2:
  //                 return navigate('/become-an-expert/verify-email');
  //             case 3:
  //                 return navigate('/become-an-expert/email-verification');
  //             case 4:
  //                 return navigate('/become-an-expert/congrats');
  //             case 5:
  //                 return navigate('/become-an-expert/registration');
  //             case 6:
  //                 return navigate('/become-an-expert/registration');
  //             default:
  //                 return null;
  //         }
  //     };
  //     renderCurrentPage()
  // }, [currentPage, navigate])

  return (
    <div className={styles.wrapper}>
      <BecomeHeader />
      <ModalWrapper>
        <Modal>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            {/* <Route path="/join" element={<JoinPage isExpert={true} />} /> */}
            <Route
              path="/registration"
              element={
                <ExpertRegistrationPage addData={addData} {...commonProps} />
              }
            />
            <Route
              path="/verify-email"
              element={
                <ExpertVerifyEmailPage addData={addData} {...commonProps} />
              }
            />
            <Route
              path="/email-verification"
              element={
                <ExpertEmailVerificationPage
                  handleVerify={addData}
                  {...commonProps}
                />
              }
            />
            <Route path="/congrats" element={<CongratsPage />} />
            <Route
              path="/registration-two"
              element={
                <ExpertRegistrationPageTwo addData={addData} {...commonProps} />
              }
            />
            <Route
              path="/registration-three"
              element={
                <ExpertRegistrationPageThree
                  addData={addData}
                  {...commonProps}
                />
              }
            />
            <Route
              path="/registration-four"
              element={
                <ExpertRegistrationPageFour
                  addData={addData}
                  {...commonProps}
                />
              }
            />
            <Route
              path="/review"
              element={<ExpertReviewPage onSubmit={onSubmit} data={data} />}
            />
          </Routes>
        </Modal>
      </ModalWrapper>
    </div>
  );
}

export default BecomeAnExpert;
