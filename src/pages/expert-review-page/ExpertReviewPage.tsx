import React, { useState } from "react";

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";

import styles from "./ExpertReviewPage.module.css";
import Divider from "../../components/Divider/Divider";
import Typography from "../../components/Typography";
import Link from "../../components/Link";

import Map from "../../assets/img/svg/map.svg";
import Edit from "../../assets/img/svg/edit.svg";
import Mail from "../../assets/img/svg/mail.svg";
import Phone from "../../assets/img/svg/phone.svg";
import Man from "../../assets/img/svg/man.png";
import { useNavigate } from "react-router";

interface ExpertRegistrationPageProps {
  currentPage?: number;
  setCurrentPage?: any;
  nextPageNumber?: (pageNumber: string) => void;
  totalSteps?: number;
  isExpert?: boolean;
  data: any;
  onSubmit: () => void;
}

const ExpertReviewPage: React.FC<ExpertRegistrationPageProps> = ({
  currentPage = 0,
  nextPageNumber = () => {},
  totalSteps = 0,
  setCurrentPage,
  isExpert,
  data,
  onSubmit,
}) => {
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit();
    navigate("/expert");
  };

  return (
    <Layout>
      <ModalHeader title={"Review"} />
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <div className={styles.sectionWithEdit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Man} width={"44px"} height={"44px"} alt="Man" />
            <div
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h1">{data.fullname}</Typography>
              <Typography variant="p1" secondary>
                Investment expert
              </Typography>
            </div>
          </div>
          <button>
            <img src={Edit} alt="Edit" />
          </button>
        </div>
        <div className={styles.sectionWithEdit}>
          <Typography variant="h2">My category</Typography>
          <button>
            <img src={Edit} alt="Edit" />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <div
            style={{
              width: "auto",
              height: "26px",
              padding: "4px 12px",
              borderRadius: "24px",
              gap: "8px",
              background: "#F1E8F8",
            }}
          >
            AI x
          </div>
          <div
            style={{
              width: "auto",
              height: "26px",
              padding: "4px 12px",
              borderRadius: "24px",
              gap: "8px",
              background: "#F1E8F8",
            }}
          >
            Career x
          </div>
          <div
            style={{
              width: "auto",
              height: "26px",
              padding: "4px 12px",
              borderRadius: "24px",
              gap: "8px",
              background: "#F1E8F8",
            }}
          >
            Design x
          </div>
        </div>
        <Divider />
        <div className={styles.sectionWithEdit}>
          <Typography className={styles.sectionTitle}>Contacts</Typography>
          <button>
            <img src={Edit} alt="Edit" />
          </button>
        </div>
        <div className="flex-column-wrapper">
          <div className={styles.flexColumnItem}>
            <img src={Map} alt="Map" />
            <Typography variant="p1" sx={{ marginLeft: "2px" }} secondary>
              W. Gray St. Utica, Pennsylvania
            </Typography>
          </div>
          <div className={styles.flexColumnItem}>
            <img src={Phone} alt="Phone" />
            <Typography sx={{ marginLeft: "2px" }} variant="p1" secondary>
              {data.phone}
            </Typography>
          </div>
          <div className={styles.flexColumnItem}>
            <img src={Mail} alt="Mail" />
            <Typography sx={{ marginLeft: "2px" }} variant="p1" secondary>
              <Link
                to="mailto:jenny.wilson@example.com"
                className="custom-link"
              >
                {data.email}
              </Link>
            </Typography>
          </div>
        </div>
        <Divider />
        <div className={styles.sectionWithEdit}>
          <Typography className={styles.sectionTitle}>Bio</Typography>
          <button>
            <img src={Edit} alt="Edit" />
          </button>
        </div>
        <Typography variant="p1" secondary>
          {data.bio} AAAAAAA
        </Typography>
        <Divider />
        <div className={styles.sectionWithEdit}>
          <Typography className={styles.sectionTitle}>
            Links to social media
          </Typography>
          <button>
            <img src={Edit} alt="Edit" />
          </button>
        </div>
        <Link to="https://www.linkedin.com/in/sylvain-duranton/">
          <Typography className={styles.section} variant="p1" secondary>
            https://www.linkedin.com/in/sylvain-duranton/
          </Typography>
        </Link>
        <Divider />
        <Typography className={styles.sectionTitle}>
          Your additional services
        </Typography>
        <ToggleSwitch
          label="1:1 meetings"
          isToggled={isToggled1}
          onToggle={() => setIsToggled1(!isToggled1)}
        />
        <ToggleSwitch
          label="Workshops"
          isToggled={isToggled2}
          onToggle={() => setIsToggled2(!isToggled2)}
        />
        <Buttons>
          <Button isWide hasBorder>
            Cancel
          </Button>
          <Button type="submit" isAccent isWide>
            Next
          </Button>
        </Buttons>
      </form>
    </Layout>
  );
};

export default ExpertReviewPage;
