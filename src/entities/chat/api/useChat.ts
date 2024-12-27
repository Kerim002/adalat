import { useQuery } from "@tanstack/react-query";
import { chatService } from "./chat.service";

export const useChat = () => {
  console.log("first");
  return useQuery<{ user_id: string }>({
    queryKey: ["chat"],
    queryFn: () => chatService.getChatId(),
    enabled: !localStorage.getItem("userid"),
  });
};
