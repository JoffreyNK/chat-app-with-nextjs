import React, { useEffect, useState, useContext } from "react";
import FirebaseContext from "../FirebaseContext";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const messagesRef = firebase.database().ref("messages");

    messagesRef.on("value", (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesList = Object.values(messagesData);
        setMessages(messagesList);
      } else {
        setMessages([]);
      }
    });

    return () => {
      messagesRef.off();
    };
  }, []);

  const handleSendMessage = () => {
    const messagesRef = firebase.database().ref("messages");
    messagesRef.push({ text: newMessage });
    setNewMessage("");
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
