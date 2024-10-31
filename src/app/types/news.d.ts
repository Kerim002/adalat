interface NewsItemSchema {
  id: number;
  image: string;
  tm_description: string;
  tm_title: string;
  en_title: string;
  ru_title: string;
  en_description: string;
  ru_description: string;
  view: number;
  date: string;
}

type NewsListResponse = PaginationResponse<NewsItemSchema>;
