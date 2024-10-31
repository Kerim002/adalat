type LanguageVariants = "en" | "ru" | "tm";
type LanguageModalItemProps = {
  src: string;
  title: string;
  lang: LanguageVariants;
};

interface PaginationRequest {
  limit?: number;
  offset?: number;
}
interface PaginationResponse<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}
