import { LuSendHorizonal } from "react-icons/lu";

const Chat = () => {
  return (
    <div className="w-full  relative">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start">
          <div className="p-3 bg-secondary sm:text-base text-sm rounded-lg sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs">
            Hello! I have a question about my account. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iure qui cum, quae sunt vel
            repudiandae aspernatur? Exercitationem deleniti illo, corrupti
            adipisci fuga vitae impedit officiis. In quibusdam nihil illum!
            Velit.
          </div>
        </div>

        <div className="flex items-end justify-end">
          <div className="p-3 bg-primary text-white sm:text-base text-sm rounded-lg sm:max-w-sm md:max-w-lg lg:w-2xl  max-w-xs">
            Hi! Sure, I'd be happy to help you with that. What do you need Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur
            nulla ex hic nobis adipisci, reprehenderit rerum tempore. Enim
            veritatis iusto a dolore officiis. Numquam placeat consequatur amet
            tempore vitae? assistance with?
          </div>
        </div>
      </div>
      {/* Chat in put  */}
      <div className="fixed bottom-0  flex justify-center left-0 right-0 h-20 ">
        <div className="w-full flex xl:w-[800px] bg-primary gap-2 items-center h-full py-2 px-4">
          <textarea
            className="border w-full resize-none h-11 focus:outline-none px-3 py-2 rounded-full bg-secondary"
            name=""
            id=""
          />
          <button className="p-3 border border-slate-200 rounded-2xl bg-secondary">
            <LuSendHorizonal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
