import axiosInstance from "@/shared/api/axiosInstance";

class MediaService {
  private url = "/media";

  async getMediaList(params?: PaginationRequest) {
    const res = await axiosInstance.get<MediaListResponse>(this.url, {
      params,
    });
    return res.data;
  }

  async getMediaById(id: string) {
    const res = await axiosInstance.get<MediaItemSchema>(`${this.url}/${id}`);
    return res.data;
  }
}

export const mediaService = new MediaService();
