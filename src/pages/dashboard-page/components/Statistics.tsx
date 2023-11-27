import React from 'react';
import styles from './Statistics.module.css'
import card1icon from './dialoguesstart.svg'
import card2icon from './messagefromavatar.svg'
import card3icon from './timespentwithavatar.svg'
import StatCard from './StatCard';

const Statistics: React.FC = () => {
  return <div className={`${styles.container} d-flex my-5 align-items-center justify-content-around`}>
    <StatCard icon={card1icon} title="Dialogues start" increase="6.5%" text="51"/>
    <StatCard icon={card2icon} title="Messages from avatar" increase="11%" text="130"/>
    <StatCard icon={card3icon} title="Time spent with avatar" increase="6.5%" text="470min"/>
  </div>
};

export default Statistics;
