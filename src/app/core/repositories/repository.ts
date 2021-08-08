export interface Repository<Type> {
  save(entity: Type): Type;
  find(entity: Type): Type;
  findAll(): Type[];
}
