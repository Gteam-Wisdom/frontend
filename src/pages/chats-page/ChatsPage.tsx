// import React, {ChangeEvent, useState} from 'react';
// import styles from "./ChatsPage.module.css";
// import Button from "../../components/button/Button";
// import Input from "../../components/input/Input";
//
// // Dummy data for chats
// const chatList = [
//   { id: 1, name: 'Chat 1', content: 'Chat 1 content' },
//   { id: 2, name: 'Chat 2', content: 'Chat 2 content' },
//   // Add more chat items as needed
// ];
//
// const ChatsPage: React.FC = () => {
//
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     password: '',
//     email: '',
//     errors: false,
//   });
//
//   const { phone, email, name, password, errors } = formData;
//
//   const handleChange = (e: ChangeEvent<any>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const [selectedChat, setSelectedChat] = useState<number | null>(null);
//
//   const handleChatClick = (chatId: number) => {
//     setSelectedChat(chatId);
//   };
//
//   const [isCollapsed, setCollapsed] = useState(false);
//
//   const toggleCollapse = () => {
//     setCollapsed(!isCollapsed);
//   };
//
//   const handleClick = (e: any) => {
//     console.log(e);
//   };
//
//   return (
//     <div className={styles.chatsPage}>
//       <div className={styles.chatList}>
//         <Button className={styles.toggleButton} onClick={toggleCollapse}>
//           <p>All Chats</p>
//           {isCollapsed ? <i className={`${styles.arrow} ${styles.up}`}></i> : <i className={`${styles.arrow} ${styles.down}`}></i>}
//         </Button>
//         <div>
//           <Input
//             type="text"
//             name="name"
//             label="Name"
//             placeholder="Jenny Wilson"
//             className={styles.input}
//             value={name}
//             onChange={handleChange}
//           />
//           <Button className={styles.button} onClick={() => {}}>+</Button>
//
//         </div>
//         <ul>
//           {chatList.map(chat => (
//             <li key={chat.id} onClick={() => handleChatClick(chat.id)}>
//               {chat.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//
//       {/*<div className={styles.chatDetails}>*/}
//       {/*  <h2>Chat Details</h2>*/}
//       {/*  {selectedChat !== null ? (*/}
//       {/*    <div>*/}
//       {/*      <h3>{chatList[selectedChat - 1].name}</h3>*/}
//       {/*      <p>{chatList[selectedChat - 1].content}</p>*/}
//       {/*    </div>*/}
//       {/*  ) : (*/}
//       {/*    <p>Select a chat to view details</p>*/}
//       {/*  )}*/}
//       {/*</div>*/}
//     </div>
//   );
// };
//
// export default ChatsPage;
import React, { ChangeEvent, useState } from "react";
import styles from "./ChatsPage.module.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

import iconUser from "./assets/icon-user.svg";
import { Tag } from "./components/tag";
import { ChatContactBar } from "./components/chatcontactbar";
import ChatBody from "./components/chatbody";
import ChatInput from "./components/chatinput";
import ChatsNavBar from "./components/chatsnavbar";
import Dialog from "./dialogs/dialog";
import Divider from "../../components/Divider/Divider";

// Dummy data for chats
const chatList = [
  {
    id: 1,
    name: "Robert Fox",
    title: "Al Expert",
    date: "Oct 1, 2023",
    group: "AIChats",
    tags: ["Investments", "Finance", "Dating"],
  },
  {
    id: 2,
    name: "Robert Fox",
    title: "Al Expert",
    date: "Oct 1, 2023",
    group: "LiveChats",
    tags: ["Investments", "Finance", "Dating"],
  },
];

const ChatsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
    errors: false,
  });

  const { phone, email, name, password, errors } = formData;

  const handleChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const handleChatClick = (chatId: number) => {
    setSelectedChat(chatId);
  };

  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  const handleClick = (e: any) => {
    console.log(e);
  };

  const handleNewChat = () => {
    // Create a new chat
    const newChat = {
      id: 3,
      name: "Robert Fox",
      title: "Al Expert",
      date: "Oct 1, 2023",
      group: "Workshops",
      tags: ["Investments", "Finance", "Dating"],
    };

    chatList.push(newChat);

    // Select the new chat
    setSelectedChat(newChat.id);
  };

  const renderChatDetails = () => {
    if (selectedChat === null) {
      return <p>Select a chat to view details</p>;
    }

    const chat = chatList[selectedChat - 1];

    return (
      <div className="d-flex flex-row h-100">
        <div className="d-flex flex-column justify-content-between">
          <ChatContactBar chat={chat} />
          <div className="d-flex align-center">
            {chat.tags.map((tag) => (
              <Tag className="m-3" name={tag} />
            ))}
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div className="mx-5 d-flex flex-column justify-content-between">
            <ChatBody
              messages={[
                {
                  sender: { id: 2, name: "Expert", avatarURL: iconUser },
                  text: "Hi there!",
                  isMe: false,
                },
                {
                  sender: { id: 1, name: "Learner", avatarURL: iconUser },
                  text: "Hello!",
                  isMe: true,
                },
              ]}
            />
          </div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div className="mx-5 mb-3 d-flex flex-column justify-content-between">
            <ChatInput onSendMessage={(text: string) => {}} />
          </div>
        </div>

        <div
          className={`${styles.chatsnavbarContainer} d-flex flex-column mt-5`}
        >
          <ChatsNavBar />
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.chatsPage}`}>
      <div className={styles.chatList}>
        <Button className={styles.toggleButton} onClick={toggleCollapse}>
          <p>All Chats</p>
          {isCollapsed ? (
            <i className={`${styles.arrow} ${styles.up}`}></i>
          ) : (
            <i className={`${styles.arrow} ${styles.down}`}></i>
          )}
        </Button>

        <div className={styles.chatSearch}>
          <Input
            type="text"
            name="search"
            placeholder="Search"
            className={styles.input}
            value={name}
            onChange={handleChange}
          />

          <Button className={styles.button} onClick={handleNewChat}>
            +
          </Button>
        </div>

        <div className={styles.chatHeader}>
          <Button className={styles.toggleButton} onClick={toggleCollapse}>
            <p>AI Chats</p>
            {isCollapsed ? (
              <i className={`${styles.arrow} ${styles.up}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.down}`}></i>
            )}
          </Button>
          <Button className={styles.addChatButton}>+</Button>
        </div>
        <div className={styles.chatItems}>
          {chatList.map((chat) => (
            <div
              className={styles.chatItem}
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
            >
              <img src={iconUser} alt="" />
              <div className={styles.chatItemContent}>
                <div className={styles.chatItemTop}>
                  <h5 className={styles.chatItemName}>{chat.name}</h5>
                  <Button className={styles.chatItemOptions}>...</Button>
                </div>
                <div className={styles.chatItemBottom}>
                  <p className={styles.chatItemTitle}>{chat.title}</p>
                  <p className={styles.chatItemDate}>{chat.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Divider />

        <div className={styles.chatHeader}>
          <Button className={styles.toggleButton} onClick={toggleCollapse}>
            <p>Live Chats</p>
            {isCollapsed ? (
              <i className={`${styles.arrow} ${styles.up}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.down}`}></i>
            )}
          </Button>
          <Button className={styles.addChatButton}>+</Button>
        </div>
        <div className={styles.chatItems}>
          {chatList.map((chat) => (
            <>
              {" "}
              <div
                className={styles.chatItem}
                key={chat.id}
                onClick={() => handleChatClick(chat.id)}
              >
                <img src={iconUser} alt="" />
                <div className={styles.chatItemContent}>
                  <div className={styles.chatItemTop}>
                    <h5 className={styles.chatItemName}>{chat.name}</h5>
                    <Button className={styles.chatItemOptions}>...</Button>
                  </div>
                  <div className={styles.chatItemBottom}>
                    <p className={styles.chatItemTitle}>{chat.title}</p>
                    <p className={styles.chatItemDate}>{chat.date}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <Divider />

        <div className={styles.chatHeader}>
          <Button className={styles.toggleButton} onClick={toggleCollapse}>
            <p>Workshops</p>
            {isCollapsed ? (
              <i className={`${styles.arrow} ${styles.up}`}></i>
            ) : (
              <i className={`${styles.arrow} ${styles.down}`}></i>
            )}
          </Button>
          <Button className={styles.addChatButton}>+</Button>
        </div>
        <div className={styles.chatItems}>
          {chatList.map((chat) => (
            <>
              <div
                className={styles.chatItem}
                key={chat.id}
                onClick={() => handleChatClick(chat.id)}
              >
                <img src={iconUser} alt="" />
                <div className={styles.chatItemContent}>
                  <div className={styles.chatItemTop}>
                    <h5 className={styles.chatItemName}>{chat.name}</h5>
                    <Button className={styles.chatItemOptions}>...</Button>
                  </div>
                  <div className={styles.chatItemBottom}>
                    <p className={styles.chatItemTitle}>{chat.title}</p>
                    <p className={styles.chatItemDate}>{chat.date}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={styles.chatDetails}>{renderChatDetails()}</div>
    </div>
  );
};

export default ChatsPage;
