import { AppUser } from "../appUser/AppUser";

export type Log = {
  appUser?: AppUser | null;
  createdAt: Date;
  id: string;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
