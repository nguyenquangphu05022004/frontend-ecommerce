
export interface APIListResponse<T> {
  message?: string
  page?: number
  limit?: number
  status?: number
  totalPage?: number
  data: Array<T>
}
