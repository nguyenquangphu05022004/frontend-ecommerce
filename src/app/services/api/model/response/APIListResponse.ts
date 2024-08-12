
export interface APIListResponse<T> {
  message?:string;
  error: number,
  ok: number,
  status: number,
  page: number,
  limit: number,
  totalPage: number,
  data: Array<T>
}
