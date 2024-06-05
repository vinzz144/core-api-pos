import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "id";

export const LogTitle = (record: TLog): string => {
  return record.id?.toString() || String(record.id);
};
