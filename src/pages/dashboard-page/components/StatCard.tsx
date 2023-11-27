import React from 'react';
import styles from './StatCard.module.css'
import { Image } from 'react-bootstrap';
import increaseIcon from './uparrow.svg'

type Props = {
  title: string;
  text: string;
  increase?: string;
  decrease?: string;
  icon: any;
}

const StatCard: React.FC<Props> = (props: Props) => {
  const renderDesc = (props: Props) => {
    if (props.increase) {
      return (
        <div className={`${styles.desc} d-flex align-items-center w-100`}>
          <Image src={increaseIcon} alt='increase'/>
          <div className={styles.increaseDesc}>+{props.increase} since last week</div>
        </div>
      )
    }

    return (
      <div>
        <Image src={increaseIcon} alt='decrease'/>
        <div className={styles.decreaseDesc}>- {props.decrease} since last week</div>
      </div>
    )
  }

  return <div className={styles.card}>
    <div className={`${styles.cardBody} d-flex w-100 justify-content-between align-items-start`}>
      <div className='d-flex'>
        <div className={styles.rectangle}></div>
        <div className={`${styles.titleContainer} d-flex flex-column justify-content-between`}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.text}>{props.text}</div>
        </div>
      </div>

      <div className={styles.icon}><Image src={props.icon} alt=""/></div>
    </div>

    <div>
      {renderDesc(props)}
    </div>
  </div>
};

export default StatCard;
