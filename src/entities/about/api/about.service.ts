import axiosInstance from "@/shared/api/axiosInstance";

class AboutService {
  async getAbout() {
    const res = await axiosInstance.get<AboutResponse>("/about");
    return res.data;
  }
}

export const aboutService = new AboutService();
