// TopQuestions.jsx
import React, { useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import styles from "./TopQuestions.module.css";
import Typography from "../../../components/Typography";
import Up from "../assets/up.svg";
import Down from "../assets/down.svg";
import Stack from "../../../components/Stack";

const TopQuestions = () => {
  // Dummy data for the top 10 questions
  const topQuestions = [
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
    {
      question: "How to use React hooks?",
      answer:
        "To use React hooks, you can use functions like useState and useEffect...",
    },
  ];

  const [expandedQuestion, setExpandedQuestion] = useState<any>(null);

  const handleArrowClick = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <Typography
        sx={{
          margin: 10,
        }}
      >
        Top 10 questions
      </Typography>
      <div className={styles.questionsContainer}>
        {topQuestions.map((qna, index) => (
          <div
            key={index}
            className={`${styles.question} ${
              expandedQuestion === index ? styles.expanded : ""
            }`}
          >
            <ListGroup.Item>
              <div
                className={styles.questionContent}
                onClick={() => handleArrowClick(index)}
              >
                <Stack direction="row" gap="10">
                  <Typography variant="h3">{index + 1}</Typography>
                  <Typography variant="h3">{qna.question}</Typography>
                </Stack>

                <span>
                  {expandedQuestion === index ? (
                    <img src={Down} alt="down" />
                  ) : (
                    <img src={Up} alt="up" />
                  )}
                </span>
              </div>
            </ListGroup.Item>
            {expandedQuestion === index && (
              <ListGroup.Item className={styles.answer}>
                <Typography sx={{ marginLeft: 30 }} variant="p2" secondary>
                  {qna.answer}
                </Typography>
              </ListGroup.Item>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopQuestions;
