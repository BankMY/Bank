import React, { useState, useCallback } from "react";
import FormChat from "./FormChat"; // Импортируем компонент чата
import styles from "./ChatManager.module.css";
import chatimg from "../../assets/png/Chat/chat@2x.png"

const ChatManager = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = useCallback(() => {
    setIsChatOpen(true);
  }, []);

  const handleChatClose = useCallback(() => {
    setIsChatOpen(false);
  }, []);

  return (
    <>
    <button className={`${styles.chatButton} ${styles.fixPosition}`} onClick={handleChatButtonClick}>
        <img
          className={styles.chatIcon}
          loading="lazy"
          alt=""
          src={chatimg}
        />
      </button>
      {isChatOpen && <FormChat onClose={handleChatClose} />}
    </>
  );
};

export default ChatManager;
