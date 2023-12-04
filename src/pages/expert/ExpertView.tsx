import Layout from "./Layout/Layout";
import { Outlet } from "react-router";

const ExpertView = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ExpertView;
