
export interface CollectionItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
  button?: {
    text: string;
    href: string;
  };
}

export interface NavLink {
  name: string;
  href: string;
}