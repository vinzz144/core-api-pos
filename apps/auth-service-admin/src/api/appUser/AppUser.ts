import { Log } from "../log/Log";

export type AppUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  isActive: boolean | null;
  logs?: Array<Log>;
  password: string | null;
  token: string | null;
  updatedAt: Date;
  username: string | null;
};
