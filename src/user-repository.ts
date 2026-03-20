import type { Pool } from "pg";

export class UserRepository {
  private readonly db: Pool;

  constructor(db: Pool) {
    this.db = db;
  }

  public create(name: string, email: string, password: string): void {
    this.db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [name, email, password]
    );
  }
}
