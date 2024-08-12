export interface ProductRequest {
  language: Language;
  categoryId: number;
  brandId: number;
  description: string;
  price: number;
  combination: boolean;
}
export interface Language {
  nameVn: string,
  nameEn: string
}

