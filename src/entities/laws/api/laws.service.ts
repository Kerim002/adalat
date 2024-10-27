import axiosInstance from "@/shared/api/axiosInstance";

class LawService {
  async getAll(params?: PaginationRequest) {
    const res = await axiosInstance.get<LawsListResponse>("/laws", { params });
    return res.data;
  }
  async getById(id: string) {
    const res = await axiosInstance.get<LawSchemaItem>(`/laws/${id}`);
    return res.data;
  }
}

export const lawsService = new LawService();
