import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to shrink
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`;
    }
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent default new line on Enter
      // Add your send message function here
      console.log(inputValue); // Replace this with your send message logic
      setInputValue(""); // Clear input after sending
    }
  };
  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full p-2 border bg-black rounded resize-none overflow-auto"
        rows={1} // Start with 1 row
        style={{ height: "25px", maxHeight: "150px" }} // Limit max height to 150px
        placeholder="Type your message..."
      />
    </div>
  );
};

export default Chat;
