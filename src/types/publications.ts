export interface Publication {
  title: string;
  authors: string;
  year: number | string;
  booktitle: string;
  link: string;
  featured: boolean;
}

export interface PublicationsType {
  authorName: string;
  items: Publication[];
}
