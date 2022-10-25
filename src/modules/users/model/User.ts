import { v4 as uuidV4 } from "uuid";
// eslint-disable-next-line prettier/prettier

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }
  }
}

export { User };
