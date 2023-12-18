import React from 'react';
import { Badge } from 'react-bootstrap';
import styles from './DateButtons.module.css'

// type Props = {label: string; isActive: boolean;};

type ButtonData = {
  id: number;
  isActive: boolean;
  title: string;
}

const DateButtons = () => {
  const [buttons, setButtons] = React.useState<ButtonData[]>([
    {
      id: 1,
      isActive: false,
      title: '24 hours'
    },
    {
      id: 2,
      isActive: true,
      title: '3 days'
    },
    {
      id: 3,
      isActive: false,
      title: 'Last week'
    },
    {
      id: 4,
      isActive: false,
      title: 'Last month'
    },
    {
      id: 5,
      isActive: false,
      title: 'Custom date'
    }
  ]);

  return (
    <div className='d-flex'>
      {buttons.map((button: ButtonData, index: number) => (
        <div key={index} className={`${styles.button} mx-2 ${button.isActive ? styles.active : ''}`} onClick={() => {
          setButtons(buttons.map(b => {
            if (b.isActive) return {...b, isActive: false}

            return b.id === button.id ? {...button, isActive: !button.isActive} : b
          }));
        }}>
          {button.title}
        </div>
      ))}
    </div>
  );
};

export default DateButtons;
