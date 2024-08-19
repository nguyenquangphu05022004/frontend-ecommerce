
export interface CategoryModelView {
  id: number;
  name: string;
  slug: string;
  children: Array<CategoryModelView>
  imageUrl: string
}
