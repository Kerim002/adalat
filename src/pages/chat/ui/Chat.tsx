import { ChatList } from "@/entities/chat";
import { useChat } from "@/entities/chat/api/useChat";

const Chat = () => {
  useChat();
  // const { mutate } = useSendChat();

  return (
    <div className="w-full flex flex-col items-center justify-end relative md:h-[calc(100vh-6rem)] h-[calc(100vh-5rem)] ">
      <ChatList />
      {/* <div className=" w-full border flex-col justify-end overflow-auto">
        
      </div>
      <div className="border">
        <ChatTest />
      </div> */}
    </div>
  );
};

export default Chat;
