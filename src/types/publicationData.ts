export interface Publication {
  title: string;
  authors: string;
  year: number | string;
  booktitle: string;
  link: string;
  featured: boolean;
}

export interface PublicationDataType {
  authorName: string;
  items: Publication[];
}