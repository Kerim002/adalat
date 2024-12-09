import { useEffect, useRef } from "react";
import { useWebSocketChat } from "../hooks/WebSoketChat";
import AdminMessage from "./AdminMessage";
import ChatInput from "./ChatInput";
import ClientMessage from "./ClientMessage";

const ChatList = () => {
  const { messages, sendMessage } = useWebSocketChat(
    `ws://localhost:3000/api/chat/ws/?user_id=${localStorage.getItem("userid")}`
  );
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="w-full  flex-col justify-end overflow-auto">
        {messages.map((item) => {
          if (item.rule === "User") {
            return <ClientMessage key={item.id} content={item.content} />;
          } else {
            return <AdminMessage key={item.id} content={item.content} />;
          }
        })}

        <div ref={chatEndRef} />
      </div>
      <ChatInput sendMessage={sendMessage} />
    </>
  );
};

export default ChatList;
