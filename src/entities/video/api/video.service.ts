import axiosInstance from "@/shared/api/axiosInstance";

class VideoService {
  private url = "/media";

  async getVideos() {
    const res = await axiosInstance.get<any>(this.url);
    return res.data;
  }
}

export const videoService = new VideoService();
