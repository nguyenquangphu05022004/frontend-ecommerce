import {EntityType} from "../view/common/entity.type";


export interface AuthenResponse {
  token: string,
  refreshToken: string,
  expiredAt: number,
  fullName: string,
  userId: number
  entityType: EntityType
}
