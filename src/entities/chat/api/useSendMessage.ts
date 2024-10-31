import { useMutation } from "@tanstack/react-query";
import { chatService } from "./chat.service";

export const useSendChat = () =>
  useMutation({
    mutationFn: (msg: string) => chatService.sendMessage(msg),
    onError: (err) => {
      console.log(err);
    },
  });
