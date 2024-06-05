import { LogUpdateManyWithoutAppUsersInput } from "./LogUpdateManyWithoutAppUsersInput";

export type AppUserUpdateInput = {
  email?: string | null;
  isActive?: boolean | null;
  logs?: LogUpdateManyWithoutAppUsersInput;
  password?: string | null;
  token?: string | null;
  username?: string | null;
};
