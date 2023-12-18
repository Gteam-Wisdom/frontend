import React from 'react';
import { OverlayTrigger, Tooltip, Button, Image } from 'react-bootstrap';
import pinicon from './pin.svg'
import css from './PinButton.module.css'

const PinButton = () => {
  const handlePinClick = () => {
    // Add your logic for handling the pin button click
    console.log('Pin button clicked');
  };

  const pinTooltip = (
    <Tooltip id="pin-tooltip">
      Pin chat
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="bottom" overlay={pinTooltip}>
      <Button className={css.button} variant="secondary" onClick={handlePinClick}>
        <Image src={pinicon} alt=""  className={css.icon} />
      </Button>
    </OverlayTrigger>
  );
};

export default PinButton;
