interface LawsListResponse extends PaginationOptions {
  news: LawSchemaItem[];
}

type LawSchemaItem = {
  id: number;
  title: string;
  laws: string;
};
