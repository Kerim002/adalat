import { useEffect, useRef } from "react";
import { useWebSocketChat } from "../hooks/WebSoketChat";
import AdminMessage from "./AdminMessage";
import ClientMessage from "./ClientMessage";

const ChatList = () => {
  const { messages } = useWebSocketChat(
    `ws://192.168.100.180:3000/api/chat/ws/${localStorage.getItem("userid")}`
  );
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever a new message arrives
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((item) => {
        if (item.rule === "Admin") {
          return <AdminMessage key={item.id} content={item.content} />;
        } else {
          return <ClientMessage key={item.id} content={item.content} />;
        }
      })}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatList;
