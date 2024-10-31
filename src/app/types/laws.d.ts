type LawsListResponse = PaginationResponse<LawSchemaItem>;

type LawSchemaItem = {
  id: number;
  title: string;
  laws: string;
};
