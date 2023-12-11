import { Route, Routes } from "react-router";
import LoginWrapper from "../pages/LoginWrapper/LoginWrapper";
import BecomeALearner from "../pages/become-a-learner/BecomeALearner";
import BecomeAnExpert from "../pages/become-an-expert/BecomeAnExpert";
import Dev from "../pages/dev/Dev";
import Home from "../pages/home/Home";
import JoinPage from "../pages/join-page/JoinPage";
import LearnerCongratsPage from "../pages/learner-congrats-page/LearnerCongratsPage";
import LearnerEmailVerificationPage from "../pages/learner-email-verification-page/LearnerEmailVerificationPage";
import LearnerOnboardingPage from "../pages/learner-onboarding-page/LearnerOnboardingPage";
import LearnerRegistrationPage from "../pages/learner-registration-page/LearnerRegistrationPage";
import LearnerVerifyEmailPage from "../pages/learner-verify-email-page/LearnerVerifyEmailPage";
import WelcomePage from "../pages/welcome-page/WelcomePage";

const PublicRoutes = () => {
  console.log("Private");

  return (
    <Routes>
      <Route path="dev" element={<Dev />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginWrapper />} />
      <Route path="/become-a-learner/*" element={<BecomeALearner />} />
      <Route path="/become-an-expert/*" element={<BecomeAnExpert />} />
    </Routes>
  );
};

export default PublicRoutes;
