import { AppUserWhereInput } from "./AppUserWhereInput";
import { AppUserOrderByInput } from "./AppUserOrderByInput";

export type AppUserFindManyArgs = {
  where?: AppUserWhereInput;
  orderBy?: Array<AppUserOrderByInput>;
  skip?: number;
  take?: number;
};
