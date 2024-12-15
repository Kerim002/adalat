// hooks/useWebSocketChat.js
import { useState, useEffect } from "react";

type SocketMessage = {
  user_id: number;
  content: string;
  created_at: string;
  rule: string;
  id: number;
};

export const useWebSocketChat = (url: string) => {
  const [messages, setMessages] = useState<SocketMessage[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);
    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      console.log(newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (message: any) => {
    console.log(message);
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(
        JSON.stringify({
          content: message,
          rule: "User",
          created_at: new Date(),
          user_id: localStorage.getItem("userid"),
        })
      );
    }
  };

  return { messages, sendMessage };
};
