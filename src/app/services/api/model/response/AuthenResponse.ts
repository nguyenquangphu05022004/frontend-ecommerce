

export interface AuthenResponse {
  token: string,
  refreshToken: string,
  expiredAt: number,
  fullName: string,
}
