import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';
import { ButtonProps } from 'react-bootstrap/Button'; // Import ButtonProps from react-bootstrap
import css from './ChatsNavBar.module.css'
import voiceicon from './voice.svg'
import personicon from './person.svg'

const ChatsNavBar = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Chats</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <button  className={css.button}><Image src={voiceicon} alt=""/>Audio Chat</button>
          </ListGroup.Item>
          <ListGroup.Item>
            <button  className={css.button}><Image src={personicon} alt=""/> Video Chat</button>
          </ListGroup.Item>
          <ListGroup.Item>
            <button  className={css.button}>View saved chats</button>
          </ListGroup.Item>
        </ListGroup>

        <Card.Title className='mt-5'>Other services</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <button  className={css.button}>Live chats</button>
          </ListGroup.Item>
          <ListGroup.Item>
            <button  className={css.button}>Workshop</button>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ChatsNavBar;
