import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type LogCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
};
