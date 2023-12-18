import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './Dashboard.module.css'
import DateButtons from './components/DateButtons';
import Statistics from './components/Statistics';
import TopQuestions from './components/TopQuestions';

const DashboardPage: React.FC = () => {

  return <Container className={styles.container}>
    <DateButtons />
    <Statistics />
    <TopQuestions />
  </Container>
};

export default DashboardPage;
