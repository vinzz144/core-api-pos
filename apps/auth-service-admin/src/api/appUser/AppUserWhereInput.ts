import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LogListRelationFilter } from "../log/LogListRelationFilter";

export type AppUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  logs?: LogListRelationFilter;
  password?: StringNullableFilter;
  token?: StringNullableFilter;
  username?: StringNullableFilter;
};
