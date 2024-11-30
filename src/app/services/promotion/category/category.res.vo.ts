/**
 *  private Long id;
 *     private String name;
 *     private ProductCategoryResVO categoryParent;
 *     private String thumbnail;
 */
export interface CategoryResVO {
  id?: number
  name?: string
  categoryParent?: CategoryResVO
  thumbnail?: string
}
