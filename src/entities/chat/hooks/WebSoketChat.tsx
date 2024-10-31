// hooks/useWebSocketChat.js
import { useState, useEffect } from "react";

export const useWebSocketChat = (url: string) => {
  const [messages, setMessages] = useState<
    { id: number; content: string; rule: "Admin" | "User" }[]
  >([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    setSocket(ws);

    ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      if (Array.isArray(newMessage.data)) {
        setMessages((prev: any) => [...prev, ...newMessage.data]);
      } else {
        setMessages((prev: any) => [...prev, newMessage.data]);
      }
    };

    return () => {
      ws.close();
    };
  }, [url]);

  const sendMessage = (message: any) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ content: message }));
    }
  };

  return { messages, sendMessage };
};
