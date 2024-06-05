import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type LogUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
};
