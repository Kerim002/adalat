import AdminMessage from "@/entities/chat/ui/AdminMessage";
import ChatInput from "@/entities/chat/ui/ChatInput";
import ClientMessage from "@/entities/chat/ui/ClientMessage";
import { PageAnimationWrapper } from "@/widget/animationwrapper";

const NewChat = () => {
  const handleSend = () => {
    console.log("send");
  };
  return (
    <PageAnimationWrapper className="h-[calc(100vh-116px)]  flex flex-col">
      <div className="flex-1 overflow-auto h-full pt-3">
        <AdminMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />

        <ClientMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />
        <AdminMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />

        <ClientMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />
        <AdminMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />

        <ClientMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />
        <AdminMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />

        <ClientMessage
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
        corporis. Quo odio omnis obcaecati magni, autem dolore, iusto nemo
        soluta expedita quos ipsam dicta facere quisquam quibusdam maxime
        laudantium nisi?"
        />
      </div>
      <div className="min-h-16 flex items-center justify-center  w-full">
        <ChatInput sendMessage={handleSend} />
      </div>
    </PageAnimationWrapper>
  );
};

export default NewChat;
