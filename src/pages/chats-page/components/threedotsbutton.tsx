import React from 'react';
import { OverlayTrigger, Tooltip, Button, Image } from 'react-bootstrap';
import icon from './threedots.svg'
import css from './ThreeDotsButton.module.css'

const ThreeDotsButton = () => {
  const handleThreeDotsClick = () => {
    // Add your logic for handling the three dots button click
    console.log('Three dots button clicked');
  };

  // const threeDotsTooltip = (
  //   <Tooltip id="three-dots-tooltip">
  //     More options
  //   </Tooltip>
  // );

  return (
    // <OverlayTrigger placement="bottom" overlay={threeDotsTooltip}>
      <Button variant="light" className={css.button} onClick={handleThreeDotsClick}>
        <Image src={icon} alt="" />
      </Button>
    // </OverlayTrigger>
  );
};

export default ThreeDotsButton;
