
export interface APIResponse<T> {
  message: string,
  error: number
  ok: number,
  status: number,
  data: T
}
