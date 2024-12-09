import { useEffect, useRef, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
type Props = {
  sendMessage: (message: any) => void;
};
const ChatInput = ({ sendMessage }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`;
    }
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    sendMessage(inputValue);
    console.log(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="w-full flex xl:w-[800px] bg-bgprimary gap-2 items-end h-full py-2 px-4">
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full px-3 pt-3 pb-4 border overflow-auto  focus:outline-none bg-zinc-800 rounded-3xl resize-none "
        rows={1}
        style={{ height: "25px", maxHeight: "150px" }}
        placeholder="Type your message..."
      />
      <button
        onClick={handleSend}
        className="aspect-square h-12 border flex items-center justify-center border-slate-200 rounded-2xl bg-zinc-800"
      >
        <LuSendHorizonal className="text-2xl" />
      </button>
    </div>
  );
};

export default ChatInput;
