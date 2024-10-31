import { ChatList, useSendChat } from "@/entities/chat";
import { useChat } from "@/entities/chat/api/useChat";
import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";

const Chat = () => {
  useChat();
  const [input, setInput] = useState("");
  const { mutate } = useSendChat();

  const handleSend = () => {
    mutate(input);
    setInput("");
  };
  return (
    <div className="w-full  relative">
      <ChatList />
      {/* Chat in put  */}
      <div className="fixed bottom-0  flex justify-center left-0 right-0 h-20 ">
        <div className="w-full flex xl:w-[800px] bg-primary gap-2 items-center h-full py-2 px-4">
          <textarea
            value={input}
            className="border w-full resize-none h-11 focus:outline-none px-3 py-2 rounded-full bg-secondary"
            name=""
            id=""
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="p-3 border border-slate-200 rounded-2xl bg-secondary"
          >
            <LuSendHorizonal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
