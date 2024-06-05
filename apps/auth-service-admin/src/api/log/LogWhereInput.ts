import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
