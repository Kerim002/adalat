import axiosInstance from "@/shared/api/axiosInstance";

class NewsService {
  private url = "/news";

  async getNews() {
    const res = await axiosInstance.get<any>(`${this.url}`);
    return res.data;
  }
}

export const newsService = new NewsService();
