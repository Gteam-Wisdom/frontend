import { Route, Routes } from "react-router";
import Avatar from "../pages/Avatar/Avatar";
import ExpertView from "../pages/expert/ExpertView";
import HomePage from "../pages/home-page/HomePage";
import CollectionView from "../pages/wisdom/CollectionView";
import Wisdom from "../pages/wisdom/Wisdom";
import Learner from "../pages/learner/Learner";
import Dashboard from "../pages/dashboard-page/DashboardPage";
import Chats from "../pages/chats-page/ChatsPage";
import Community from "../pages/community-page/CommunityPage";
import Profile from "../pages/profile/Profile";
import Help from "../pages/help-page/HelpPage";
import { useState } from "react";
import Dev from "../pages/dev/Dev";
import ExpertProfileView from "../pages/ExpertProfile/ExpertProfileView";

const PrivateRoutes = () => {
  const [role, setRole] = useState("expert");
  return (
    <Routes>
      <Route path="/expert" element={<ExpertView />}>
        <Route path="wisdom" element={<Wisdom />}></Route>
        <Route index element={<HomePage />}></Route>
        <Route path="avatar" element={<Avatar />}></Route>
        <Route path="default_collection" element={<CollectionView />}></Route>
        <Route path="profile" element={<ExpertProfileView />}></Route>
      </Route>
      <Route path="/learner" element={<Learner />}>
        <Route index path="home" element={<HomePage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chats" element={<Chats />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
        <Route path="help" element={<Help />} />
        <Route path="default_collection" element={<CollectionView />} />
      </Route>
      <Route path="/dev" element={<Dev />}></Route>
    </Routes>
  );
};

export default PrivateRoutes;
