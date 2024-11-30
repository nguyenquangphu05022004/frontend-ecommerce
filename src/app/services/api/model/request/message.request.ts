import {EntityType} from "../view/common/entity.type";

export class MessageRequest {
  fromUserId?: number;
  toEntityType?: EntityType;
  content?: string;
}
