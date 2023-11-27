import React, { useState } from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import styles from './TopQuestions.module.css'

const TopQuestions = () => {
  // Dummy data for the top 10 questions
  const topQuestions = [
    {
      question: 'How to use React hooks?',
      answer: 'To use React hooks, you can use functions like useState and useEffect...',
    },
    // ... (Other questions with answers)
  ];

  const [expandedQuestion, setExpandedQuestion] = useState<any>(null);

  const handleArrowClick = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <Container>
      <div>Top 10 questions</div>
      {topQuestions.map((qna, index) => (
          <div key={index} className={styles.question}>
            <ListGroup.Item>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
                onClick={() => handleArrowClick(index)}
              >
                <span>{qna.question}</span>
                <span>{expandedQuestion === index ? '▼' : '▶'}</span>
              </div>
            </ListGroup.Item>
            {expandedQuestion === index && (
              <ListGroup.Item style={{ backgroundColor: '#f8f9fa' }}>{qna.answer}</ListGroup.Item>
            )}
          </div>
        ))}
    </Container>
  );
};

export default TopQuestions;
