import { LogCreateNestedManyWithoutAppUsersInput } from "./LogCreateNestedManyWithoutAppUsersInput";

export type AppUserCreateInput = {
  email?: string | null;
  isActive?: boolean | null;
  logs?: LogCreateNestedManyWithoutAppUsersInput;
  password?: string | null;
  token?: string | null;
  username?: string | null;
};
