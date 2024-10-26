import axiosInstance from "../../../shared/api/axiosInstance";

class HomeService {
  private url = "/home";

  async getHome() {
    const res = await axiosInstance.get<HomeSchema>(`${this.url}`);
    return res.data;
  }
}

export const homeService = new HomeService();
