export interface CardState {
  hidden: boolean;
  matched: boolean;
}

export interface Player {
  id: number;
  name: string;
  score: number;
}

export interface Product {
  id: string;
  name: string;
  url: string;
  images: [];
}

export interface Billboard {
  imageUrl: string;
  label: string;
}

export interface BillboardProps {
  billboard: Billboard;
}

export interface ProductImage {
  url: string;
}

export interface ProductCardProps {
  name: string;
  url: string;
  images: ProductImage[];
}

export interface GalleryNavProps {
  projectCount: number;
}
