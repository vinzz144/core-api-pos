import { AppUser as TAppUser } from "../api/appUser/AppUser";

export const APPUSER_TITLE_FIELD = "username";

export const AppUserTitle = (record: TAppUser): string => {
  return record.username?.toString() || String(record.id);
};
