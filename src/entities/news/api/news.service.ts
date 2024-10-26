import axiosInstance from "@/shared/api/axiosInstance";

class NewsService {
  private url = "/news";

  async getNewsAll(params?: PaginationRequest) {
    const res = await axiosInstance.get<NewsListResponse>(`${this.url}`, {
      params,
    });
    return res.data;
  }
  async getNewsById(id: string) {
    const res = await axiosInstance.get<NewsItemSchema>(`${this.url}/${id}`);
    return res.data;
  }
}

export const newsService = new NewsService();
