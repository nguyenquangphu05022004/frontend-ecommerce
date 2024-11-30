export class EntityType {
  constructor(entityType?: string, entityId?: number) {
    this.entityId = entityId;
    this.entityType = entityType;
  }
  entityType?: string
  entityId?: number
}
