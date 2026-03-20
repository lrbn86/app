import { UserRepository } from "./user-repository";
import { db } from "./db";

export class UserService {
  private static readonly repository: UserRepository = new UserRepository(db);

  public createUser(name: string, email: string, password: string): void {
    UserService.repository.create(name, email, password);
  }
}
