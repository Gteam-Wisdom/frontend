import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import BecomeALearner from "./pages/become-a-learner/BecomeALearner";
import BecomeAnExpert from "./pages/become-an-expert/BecomeAnExpert";
import Learner from "./pages/learner/Learner";
import HomePage from "./pages/home-page/HomePage";
import Dashboard from "./pages/dashboard-page/DashboardPage";
import Chats from "./pages/chats-page/ChatsPage";
import Community from "./pages/community-page/CommunityPage";
import Profile from "./pages/profile/Profile";
import Help from "./pages/help-page/HelpPage";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import JoinPage from "./pages/join-page/JoinPage";
import LearnerRegistrationPage from "./pages/learner-registration-page/LearnerRegistrationPage";
import LearnerVerifyEmailPage from "./pages/learner-verify-email-page/LearnerVerifyEmailPage";
import LearnerEmailVerificationPage from "./pages/learner-email-verification-page/LearnerEmailVerificationPage";
import LearnerCongratsPage from "./pages/learner-congrats-page/LearnerCongratsPage";
import LearnerOnboardingPage from "./pages/learner-onboarding-page/LearnerOnboardingPage";
import LoginWrapper from "./pages/LoginWrapper/LoginWrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import Wisdom from "./pages/wisdom/Wisdom";
import Dev from "./pages/dev/Dev";
import CollectionView from "./pages/wisdom/CollectionView";
import ExpertView from "./pages/expert/ExpertView";
import Avatar from "./pages/Avatar/Avatar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="dev" element={<Dev />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginWrapper />} />

          <Route path="/become-a-learner" element={<BecomeALearner />}>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="join" element={<JoinPage isExpert={false} />} />
            <Route path="registration" element={<LearnerRegistrationPage />} />
            <Route path="verify-email" element={<LearnerVerifyEmailPage />} />

            <Route
              path="email-verification"
              element={<LearnerEmailVerificationPage />}
            />
            <Route path="congrats" element={<LearnerCongratsPage />} />
            <Route path="onboarding" element={<LearnerOnboardingPage />} />
          </Route>
          <Route path="/expert" element={<ExpertView />}>
            <Route path="wisdom" element={<Wisdom />}></Route>
            <Route index element={<HomePage />}></Route>
            <Route path="avatar" element={<Avatar />}></Route>
            <Route
              path="default_collection"
              element={<CollectionView />}
            ></Route>
          </Route>
          <Route path="/become-an-expert/*" element={<BecomeAnExpert />} />
          <Route path="/learner" element={<Learner />}>
            <Route index path="home" element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="chats" element={<Chats />} />
            <Route path="community" element={<Community />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
            <Route path="default_collection" element={<CollectionView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
