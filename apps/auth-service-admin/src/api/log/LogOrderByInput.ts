import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  appUserId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
