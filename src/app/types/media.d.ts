interface MediaItemSchema {
  id: number;
  video: string;
  tm_title: string;
  en_title: string;
  ru_title: string;
  date: string;
  view: number;
  cover: string;
}

interface MediaListResponse extends PaginationResponse {
  media: MediaItemSchema[];
}
