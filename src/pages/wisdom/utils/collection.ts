export interface CollectionItem {
  file_name: string;
  file_type: string;
  date_created: string;
  status: string;
  tags: string;
}

export interface WisdomResponse {
  data: CollectionItem[];
  message: string;
  totalCount: number;
  totalPages: number;
}

export interface CollectionsList {
  collection_name: string;
  collection_path: string;
  status: string;
}
