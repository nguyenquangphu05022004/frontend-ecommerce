/**
 * private Long userId;
 *     private String fullName;
 *     private String accessToken;
 *     private String refreshToken;
 *     private LocalDateTime expires;
 */

export interface AuthLoginResVO {
  userId: number
  fullName: string
  accessToken: string
  refreshToken: string
  expires: any
}
