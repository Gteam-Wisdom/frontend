// ChatBody.tsx

import React from 'react';
import styles from './ChatBody.module.css';
import Avatar from './avatar';

interface Sender {
  id: number;
  name: string;
  avatarURL: string;
};

interface Message {
  sender: Sender;
  text: string;
  isMe: boolean;
}

interface ChatBodyProps {
  messages: Message[];
}

const ChatBody: React.FC<ChatBodyProps> = ({ messages }) => {
  return (
    <div className={styles['chat-body']}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${message.isMe ? styles.me : styles.other}`}>
          <div className={`${styles['message-sender']} d-flex align-items-center`}>
            <Avatar src={message.sender.avatarURL} alt=''/>
            <div className='mx-3'>{message.sender.name}</div>
            <div className={styles['message-date']}>01:43</div>
          </div>
          <div className={`${styles['message-text']} my-3`}>
            <div>{message.text}</div>
            <div className={styles['message-date']}>01:43</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
