import axiosInstance from "@/shared/api/axiosInstance";

class ChatService {
  private URL = "/chat";

  async getChatId() {
    try {
      const res = await axiosInstance.get(`${this.URL}/me`);
      console.log(res.data);
      if (localStorage.getItem("userid") === null) {
        localStorage.setItem("userid", res.data.user_id);
      }
      return res.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async sendMessage(msg: string) {
    const res = await axiosInstance.post(
      `${this.URL}/${localStorage.getItem("userid")}`,
      {
        content: msg,
        rule: "User",
      }
    );
    return res.data;
  }
}

export const chatService = new ChatService();
