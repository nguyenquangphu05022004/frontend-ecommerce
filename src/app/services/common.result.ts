/**
 *  private String message;
 *     private Integer code;
 *     private T data;
 */
export interface CommonResult<T> {
  message?: string
  code: number
  data: T
}
