import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  password?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
