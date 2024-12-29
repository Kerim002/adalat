import { useWebSocketChat } from "@/entities/chat/hooks/WebSoketChat";
import AdminMessage from "@/entities/chat/ui/AdminMessage";
import ChatInput from "@/entities/chat/ui/ChatInput";
import ClientMessage from "@/entities/chat/ui/ClientMessage";
import { PageAnimationWrapper } from "@/widget/animationwrapper";
import { useEffect, useRef } from "react";

const NewChat = () => {
  const { messages, sendMessage } = useWebSocketChat(
    `${import.meta.env.VITE_WEB_SOCKET_URL}/ws?user_id=${localStorage.getItem(
      "userid"
    )}`
  );
  const chatEndRef = useRef<HTMLDivElement>(null);
  console.log(messages);
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <PageAnimationWrapper className="h-[calc(100vh-116px)]  flex flex-col">
      <div className="flex-1 flex flex-col overflow-auto h-full pt-3 gap-3">
        {messages.map((message) =>
          message.rule === "User" ? (
            <ClientMessage content={message.content} />
          ) : (
            <AdminMessage content={message.content} />
          )
        )}
      </div>
      <div className="min-h-16 flex items-center justify-center  w-full">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </PageAnimationWrapper>
  );
};

export default NewChat;
