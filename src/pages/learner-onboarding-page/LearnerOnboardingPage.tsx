import React, { useCallback, useState } from "react";

import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import MultiStepProgressBar from "../../components/multi-step-progress-bar/MultiStepProgressBar";
import PurposeOnboarding from "../../components/purpose-onboarding/PurposeOnboarding";
import TopicSelectionOnboarding from "../../components/topic-selection-onboarding/TopicSelectionOnboarding";
import LearningPreferencesOnboarding from "../../components/learning-preferences-onboarding/LearningPreferencesOnboarding";
import PersonalGoalsOnboarding from "../../components/personal-goals-onboarding/PersonalGoalsOnboarding";
import ModalHeader from "../../components/modal-header/ModalHeader";
import Buttons from "../../components/buttons/Buttons";
import { useNavigate } from "react-router";

// import styles from './LearnerOnboardingPage.module.css';

const LearnerOnboardingPage = ({ onSubmit }: any) => {
  const [page, setPage] = useState(1); // Start with page 1
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/learner");
  }, [navigate]);

  const nextPageNumber = (pageNumber: string) => {
    const numericPageNumber = parseInt(pageNumber, 10);
    if (
      !isNaN(numericPageNumber) &&
      numericPageNumber >= 1 &&
      numericPageNumber <= 4
    ) {
      setPage(numericPageNumber);
    } else {
      setPage(1);
    }
  };

  // const onButtonClick = (event: any) => {
  //   event.preventDefault();
  //   const nextPageIndex = page < 4 ? page + 1 : 4;
  //   setPage(nextPageIndex);
  // };

  const renderCurrentPage = () => {
    switch (page) {
      case 1:
        return <PurposeOnboarding />;
      case 2:
        return <TopicSelectionOnboarding />;
      case 3:
        return <LearningPreferencesOnboarding />;
      case 4:
        return <PersonalGoalsOnboarding />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <ModalHeader title={"Onboarding"} />
      {/* Use the onSubmit prop in the form's onSubmit handler */}
      <form
        onSubmit={() => {
          onSubmit();
          navigate("/learner");
        }}
      >
        <MultiStepProgressBar
          page={page}
          onPageNumberClick={nextPageNumber}
          totalSteps={4}
        />
        {renderCurrentPage()}
        <Buttons>
          <Button isWide hasBorder>
            Skip
          </Button>
          <Button isAccent isWide type="submit">
            Next
          </Button>
        </Buttons>
      </form>
    </Layout>
  );
};

export default LearnerOnboardingPage;
